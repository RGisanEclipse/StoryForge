import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { addUser, verifyUser }from "./config.js";
import nodemailer from "nodemailer";
import { config as dotenvConfig } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const app = express();
app.use(bodyParser.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, ".env");
dotenvConfig({ path: envPath });
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
  const { firstName, lastName, userName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await addUser({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
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
      res.status(200).json({ success: true, message: "User verified successfully", token, userId: result.userId });
    } else {
      res.status(401).json({ success: false, error: "Invalid email or password" });
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
app.listen(8080, () => console.log("Server running at port number 8080"));
