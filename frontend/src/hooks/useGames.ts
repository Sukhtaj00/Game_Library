import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { gameRepository } from "../repositories/gameRepository";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  async function refresh() {
    const data = await gameRepository.getAll();
    setGames(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addGame(title: string) {
    await gameRepository.create(title);
    await refresh();
  }

  async function removeGame(id: number) {
    await gameRepository.delete(id);
    await refresh();
  }

  async function updateCompletion(id: number, value: number) {
    const existing = games.find((g) => g.id === id);
    if (!existing) return;

    await gameRepository.update({
      ...existing,
      completion: value,
    });

    await refresh();
  }

  return {
    games,
    addGame,
    removeGame,
    updateCompletion,
  };
}