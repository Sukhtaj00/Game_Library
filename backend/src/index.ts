import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import gameRoutes from "./routes/gameRoutes";

const app = express();

// Clerk middleware (T.1 requirement)
app.use(clerkMiddleware());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully" });
});

app.use("/games", gameRoutes);

const PORT = 3000;

// Only run app.listen in local development
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;