import { Request, Response } from "express";
import { gameService } from "../services/gameService";

// Get all games
export const getGames = async (req: Request, res: Response) => {
  const games = await gameService.getAllGames();
  res.json(games);
};

// Get single game
export const getGameById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const game = await gameService.getGameById(id);

  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json(game);
};

// Create game
export const createGame = async (req: Request, res: Response) => {
  const { title, completion } = req.body;

  const newGame = await gameService.createGame(title, completion);
  res.status(201).json(newGame);
};

// Update game
export const updateGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, completion } = req.body;

  try {
    const updatedGame = await gameService.updateGame(
      id,
      title,
      completion
    );
    res.json(updatedGame);
  } catch {
    res.status(404).json({ message: "Game not found" });
  }
};

// Delete game
export const deleteGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await gameService.deleteGame(id);
    res.json({ message: "Game deleted" });
  } catch {
    res.status(404).json({ message: "Game not found" });
  }
};