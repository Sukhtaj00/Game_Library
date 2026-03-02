import type { Game } from "../types/Game";
import { gameTestData } from "../data/gameTestData";

let games: Game[] = [...gameTestData];

export const gameRepository = {
  getAll(): Game[] {
    return games;
  },

  create(game: Game): void {
    games.push(game);
  },

  update(updatedGame: Game): void {
    games = games.map((g) =>
      g.id === updatedGame.id ? updatedGame : g
    );
  },

  delete(id: string): void {
    games = games.filter((g) => g.id !== id);
  },
};