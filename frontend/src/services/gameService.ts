import { gameRepository } from "../repositories/gameRepository";
import type { Game } from "../types/Game";

export const gameService = {
  async getGames(token: string): Promise<Game[]> {
    return await gameRepository.getAll(token);
  },

  async addGame(title: string, token: string): Promise<Game> {
    return await gameRepository.create(title, token);
  },

  async removeGame(id: string, token: string): Promise<void> {
    return await gameRepository.delete(id, token);
  },

  async updateCompletion(
    id: string,
    value: number,
    token: string
  ): Promise<Game | null> {
    if (value < 0 || value > 100) return null;

    const games: Game[] = await gameRepository.getAll(token);
    const game: Game | undefined = games.find((g) => g.id === id);

    if (!game) return null;

    return await gameRepository.update(
      {
        ...game,
        completion: value,
      },
      token
    );
  },
};