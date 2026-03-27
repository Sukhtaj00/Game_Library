import { Request, Response } from "express";
import prisma from "../prisma";

// Get all games
export const getGames = async (req: Request, res: Response) => {
  const games = await prisma.game.findMany();
  res.json(games);
};

// Get single game
export const getGameById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const game = await prisma.game.findUnique({
    where: { id },
  });

  if (!game) {
    return res.status(404).json({ message: "Game not found" });
  }

  res.json(game);
};

// Create game
export const createGame = async (req: Request, res: Response) => {
  const { title, completion } = req.body;

  const newGame = await prisma.game.create({
    data: { title, completion },
  });

  res.status(201).json(newGame);
};

// Update game
export const updateGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, completion } = req.body;

  try {
    const updatedGame = await prisma.game.update({
      where: { id },
      data: { title, completion },
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