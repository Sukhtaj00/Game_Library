import { Router } from "express";
import {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "../controllers/gameControllers";
import {
  validateCreateGame,
  validateUpdateGame,
} from "../middleware/gameValidation";

const router = Router();

router.get("/", getGames);
router.get("/:id", getGameById);
router.post("/", validateCreateGame, createGame);
router.put("/:id", validateUpdateGame, updateGame);
router.delete("/:id", deleteGame);

export default router;