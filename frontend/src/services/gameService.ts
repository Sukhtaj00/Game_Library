import { gameRepository } from "../repositories/gameRepository";
import type { Game } from "../types/Game";

export const gameService = {
  async getGames(): Promise<Game[]> {
    return await gameRepository.getAll();
  },

  async addGame(title: string): Promise<Game> {
    return await gameRepository.create(title);
  },

  async removeGame(id: string): Promise<void> {
    return await gameRepository.delete(id);
  },

  async updateCompletion(id: string, value: number): Promise<Game | null> {
    if (value < 0 || value > 100) return null;

    const games = await gameRepository.getAll();
    const game = games.find(g => g.id === id);

    if (!game) return null;

    return await gameRepository.update({
      ...game,
      completion: value,
    });
  },
};