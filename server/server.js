import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  addUser,
  verifyUser,
  fetchUserData,
  uploadStory,
  updateProfile,
} from "./config.js";
import nodemailer from "nodemailer";
import { config as dotenvConfig } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import multer from "multer";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, ".env");
dotenvConfig({ path: envPath });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});
const JWT_SECRET = "StoryForgeKey";

function generateToken(user) {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
}
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, error: "Forbidden" });
    }
    req.user = user;
    next();
  });
};

app.post("/signup", async (req, res) => {
  const { firstName, lastName, userName, email, password, avatarSrc } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await addUser({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      avatarSrc,
    });

    if (result.error === "UserName already exists") {
      res
        .status(401)
        .json({ success: false, error: "UserName already exists" });
    } else if (result.error === "Email already exists") {
      res.status(402).json({ success: false, error: "Email already exists" });
    } else {
      const token = generateToken({ id: result.id });
      transporter.sendMail(
        {
          from: process.env.NODEMAILER_USERNAME,
          to: `${email}`,
          subject: "Signup confirmation",
          text: `Thanks for registering on StoryForge.`,
        },
        (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(info.response);
          }
        }
      );
      res.status(200).json({ success: true, userId: result.id, token });
    }
  } catch (error) {
    console.error("Error signing up: ", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await verifyUser({ email, password });

    if (result.success) {
      const token = generateToken({ id: result.userId });
      res.status(200).json({
        success: true,
        message: "User verified successfully",
        token,
        userId: result.userId,
      });
    } else {
      res
        .status(401)
        .json({ success: false, error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/verify-password", async (req, res) => {
  const { password, hashedPassword } = req.body;
  try {
    if (bcrypt.compareSync(password, hashedPassword)) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error verifying passwords", error);
    res.json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/user-data", authenticateToken, async (req, res) => {
  try {
    const userId = req.query.userId;
    const userData = await fetchUserData(userId);
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/uploadStory", upload.single("file"), async (req, res) => {
  const fileName = req.file.filename;
  const userID = req.body.userID;
  const title = req.body.title;
  const content = req.body.content;
  try {
    const result = await uploadStory({
      fileName,
      userID,
      title,
      content,
    });
    res.status(200).json({ success: true, postID: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/editProfile", upload.single("file"), async (req, res) => {
  try {
    let fileName = "";
    if (req.file) {
      fileName = req.file.filename;
    }
    const userID = req.body.userID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const password = req.body.password;

    const result = await updateProfile({
      fileName,
      userID,
      firstName,
      lastName,
      userName,
      password,
    });

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export async function fetchStoriesWithUserData() {
  try {
    const storiesCollection = collection(fireStoreObject, "stories");
    const querySnapshot = await getDocs(storiesCollection);
    const stories = [];

    for (const docRef of querySnapshot.docs) {
      const storyData = docRef.data();
      const userData = await fetchUserData(storyData.userID);
      const { userName, avatarSrc } = userData;
      const contentWords = storyData.content.split(" ");
      const overviewWords = contentWords.slice(0, 50);
      let overview = overviewWords.join(" ");
      if (contentWords.length > 50) {
        overview += " ...";
      }
      const storyWithUserData = {
        ...storyData,
        userName,
        avatarSrc,
        overview,
        content: storyData.content,
      };

      stories.push(storyWithUserData);
    }

    return stories;
  } catch (error) {
    console.error("Error fetching stories with user data:", error);
    throw error;
  }
}

export async function fetchPostDataWithUserData(postID) {
  try {
    const postRef = doc(collection(fireStoreObject, "posts"), postID);
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      const postData = postSnapshot.data();
      const userID = postData.userID;
      const userRef = doc(collection(fireStoreObject, "users"), userID);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const { userName, avatarSrc } = userData;
        return { ...postData, userName, avatarSrc };
      } else {
        throw new Error("User data not found");
      }
    } else {
      throw new Error("Post data not found");
    }
  } catch (error) {
    console.error("Error fetching post data with user data:", error);
    throw error;
  }
}

app.post("/verify-token", authenticateToken, (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(8080, () => console.log("Server running at port number 8080"));
