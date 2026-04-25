import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import gameRoutes from "./routes/gameRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully" });
});

app.use("/games", gameRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export default app;