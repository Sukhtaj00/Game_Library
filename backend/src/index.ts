import express from "express";
import cors from "cors";
import gameRoutes from "./routes/gameRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully" });
});

app.use("/games", gameRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});