import dotenv from "dotenv";
dotenv.config();

console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import gameRoutes from "./routes/gameRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Clerk middleware
app.use(clerkMiddleware());

app.get("/test-auth", (req, res) => {
  console.log("REQ.AUTH:", req.auth);
  res.json({ auth: req.auth });
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully" });
});

// Game routes
app.use("/games", gameRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});