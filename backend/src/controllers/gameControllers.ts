import { Request, Response } from "express";
import prisma from "../prisma";

// Get all games
export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch {
    res.status(500).json({ message: "Failed to fetch games" });
  }
};

// Get single game
export const getGameById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const game = await prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.json(game);
  } catch {
    res.status(500).json({ message: "Failed to fetch game" });
  }
};

// Create game
export const createGame = async (req: Request, res: Response) => {
  const { title, completion } = req.body;

  try {
    const newGame = await prisma.game.create({
      data: {
        title,
        completion: completion ?? 0,
      },
    });

    res.status(201).json(newGame);
  } catch {
    res.status(400).json({ message: "Failed to create game" });
  }
};

// Update game (supports partial updates)
export const updateGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, completion } = req.body;

  try {
    const updatedGame = await prisma.game.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(completion !== undefined && { completion }),
      },
    });

    res.json(updatedGame);
  } catch {
    res.status(404).json({ message: "Game not found" });
  }
};

// Delete game
export const deleteGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await prisma.game.delete({
      where: { id },
    });

    res.json({ message: "Game deleted" });
  } catch {
    res.status(404).json({ message: "Game not found" });
  }
};