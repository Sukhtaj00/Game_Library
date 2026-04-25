import { Request, Response } from "express";
import prisma from "../prisma";

// Helper to get Clerk userId safely (Clerk v4)
function getClerkId(req: Request): string | null {
  try {
    const auth = req.auth?.();
    return auth?.userId ?? null;
  } catch {
    return null;
  }
}

// Get all games (only for logged-in user)
export const getGames = async (req: Request, res: Response) => {
  const clerkId = getClerkId(req);

  if (!clerkId) {
    return res.json([]);
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) return res.json([]);

    const games = await prisma.game.findMany({
      where: { userId: user.id },
    });

    res.json(games);
  } catch (error) {
    console.error("GET GAMES ERROR:", error);
    res.status(500).json({ message: "Failed to fetch games" });
  }
};

// Get single game
export const getGameById = async (req: Request, res: Response) => {
  const clerkId = getClerkId(req);
  const id = Number(req.params.id);

  if (!clerkId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const game = await prisma.game.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.json(game);
  } catch (error) {
    console.error("GET GAME ERROR:", error);
    res.status(500).json({ message: "Failed to fetch game" });
  }
};

// Create game
export const createGame = async (req: Request, res: Response) => {
  const clerkId = getClerkId(req);

  if (!clerkId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { title } = req.body;
  const completion = Number(req.body.completion) || 0;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    let user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { clerkId },
      });
    }

    const newGame = await prisma.game.create({
      data: {
        title,
        completion,
        userId: user.id,
      },
    });

    res.status(201).json(newGame);
  } catch (error) {
    console.error("CREATE GAME ERROR:", error);
    res.status(400).json({ message: "Failed to create game" });
  }
};

// Update game
export const updateGame = async (req: Request, res: Response) => {
  const clerkId = getClerkId(req);
  const id = Number(req.params.id);
  const { title } = req.body;
  const completion = req.body.completion !== undefined
    ? Number(req.body.completion)
    : undefined;

  if (!clerkId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const game = await prisma.game.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    const updatedGame = await prisma.game.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(completion !== undefined && { completion }),
      },
    });

    res.json(updatedGame);
  } catch (error) {
    console.error("UPDATE GAME ERROR:", error);
    res.status(500).json({ message: "Failed to update game" });
  }
};

// Delete game
export const deleteGame = async (req: Request, res: Response) => {
  const clerkId = getClerkId(req);
  const id = Number(req.params.id);

  if (!clerkId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const game = await prisma.game.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    await prisma.game.delete({
      where: { id },
    });

    res.json({ message: "Game deleted" });
  } catch (error) {
    console.error("DELETE GAME ERROR:", error);
    res.status(500).json({ message: "Failed to delete game" });
  }
};