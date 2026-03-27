import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});