import { gameRepository } from "../repositories/gameRepository";
import type { Game } from "../types/Game";


export const gameService = {
  getGames(): Game[] {
    return gameRepository.getAll();
  },

  addGame(title: string): void {
    if (!title.trim()) return;

    const existing = gameRepository
      .getAll()
      .find((g: Game) => g.title.toLowerCase() === title.toLowerCase());

    if (existing) return; // prevent duplicates

    const newGame: Game = {
      id: Date.now().toString(),
      title,
      completion: 0,
    };

    gameRepository.create(newGame);
  },

  updateCompletion(id: string, completion: number): void {
    if (completion < 0 || completion > 100) return;

    const game = gameRepository.getAll().find((g: Game) => g.id === id);
    if (!game) return;

    gameRepository.update({
      ...game,
      completion,
    });
  },

  removeGame(id: string): void {
    gameRepository.delete(id);
  },
};