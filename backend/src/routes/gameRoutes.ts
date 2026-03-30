import express from "express";
import {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "../controllers/gameControllers";
import { validateGame } from "../middleware/gameValidation";

const router = express.Router();

router.get("/", getGames);
router.get("/:id", getGameById);

router.post("/", validateGame, createGame);
router.put("/:id", validateGame, updateGame);

router.delete("/:id", deleteGame);

export default router;