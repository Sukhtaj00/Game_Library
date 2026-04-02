import { gameRepository } from "../repositories/gameRepository";
import type { Game } from "../types/Game";

export const gameService = {
  getGames(): Game[] {
    return gameRepository.getAll();
  },

  addGame(title: string): void {
    const newGame: Game = {
      id: Date.now(), 
      title,
      completion: 0,
    };

    gameRepository.create(newGame);
  },

  removeGame(id: number): void { 
    gameRepository.delete(id);
  },

  updateCompletion(id: number, value: number): void { 
    if (value < 0 || value > 100) return;

    const game = gameRepository.getAll().find((g: Game) => g.id === id);
    if (!game) return;

    gameRepository.update({
      ...game,
      completion: value,
    });
  },
};