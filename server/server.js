import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import addUser from "./config.js";
import nodemailer from "nodemailer";
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const app = express();
app.use(bodyParser.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, '.env');
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

app.listen(8080, () => console.log("Server running at port number 8080"));
