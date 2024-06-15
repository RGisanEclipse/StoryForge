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
  fetchStoriesWithUserData,
  uploadFile,
} from "./config.js";
import { config as dotenvConfig } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import multer from "multer";
import nodemailer from "nodemailer";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, ".env");
dotenvConfig({ path: envPath });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const JWT_SECRET = "StoryForgeKey";
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.BREVO_EMAIL,
    pass: process.env.BREVO_API_KEY,
  },
});
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
      const mailOptions = {
        from: `StoryForge <${process.env.YOUR_OWN_EMAIL}>`,
        to: email,
        subject: "Welcome to Our Platform",
        text: `Dear ${userName},

        Welcome aboard!

        We are thrilled to have you join our community. Thank you for signing up with StoryForge. You are now part of a vibrant community of StoryTellers across the World!
        
        Best regards,
        Team StoryForge.
        `,
      };
      transporter
        .sendMail(mailOptions)
        .then((info) => {
          console.log("Message sent: %s", info.messageId);
        })
        .catch((error) => {
          console.error("Error occurred: %s", error.message);
        });
      const token = generateToken({ id: result.id });
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
  try {
    const downloadURL = await uploadFile(req.file);
    const result = await uploadStory({
      fileName: downloadURL,
      userID: req.body.userID,
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json({ success: true, postID: result.id });
  } catch (error) {
    console.error("Error uploading story:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/editProfile", upload.single("file"), async (req, res) => {
  try {
    let fileName = "";
    if (req.file) {
      const downloadURL = await uploadFile(req.file);
      fileName = downloadURL;
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

app.get("/stories", async (req, res) => {
  try {
    const stories = await fetchStoriesWithUserData();
    res.status(200).json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/verify-token", authenticateToken, (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(8080, () => console.log("Server running at port number 8080"));
