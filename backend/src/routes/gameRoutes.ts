import { Router } from "express";
import { requireAuth } from "@clerk/express";
import {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "../controllers/gameControllers";

const router = Router();

router.get("/", getGames);
router.get("/:id", requireAuth(), getGameById);
router.post("/", requireAuth(), createGame);
router.put("/:id", requireAuth(), updateGame);
router.delete("/:id", requireAuth(), deleteGame);

export default router;