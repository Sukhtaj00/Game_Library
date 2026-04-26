import type { Game } from "../types/Game";

const BASE_URL = "http://localhost:3000/games";

export const gameRepository = {
  async getAll(token: string): Promise<Game[]> {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    return response.json();
  },

  async create(title: string, token: string): Promise<Game> {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  async update(game: Game, token: string): Promise<Game> {
    const response = await fetch(`${BASE_URL}/${game.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

  async delete(id: string, token: string): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete game");
    }
  },
};