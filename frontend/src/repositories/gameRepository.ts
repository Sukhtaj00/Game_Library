import type { Game } from "../types/Game";

const BASE_URL = "http://localhost:3000/games";

export const gameRepository = {
  /**
   * Fetch all games from the backend
   */
  async getAll(): Promise<Game[]> {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    return response.json();
  },

  /**
   * Create a new game in the backend
   */
  async create(title: string): Promise<Game> {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completion: 0,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create game");
    }

    return response.json();
  },

  /**
   * Update an existing game (title and/or completion)
   */
  async update(game: Game): Promise<Game> {
    const response = await fetch(`${BASE_URL}/${game.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: game.title,
        completion: game.completion,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update game");
    }

    return response.json();
  },

  delete(id: number): void {
    games = games.filter((g) => g.id !== id);
  },
};