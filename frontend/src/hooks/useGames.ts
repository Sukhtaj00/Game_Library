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

  function removeGame(id: number) {
    gameService.removeGame(id);
    refresh();
  }

  function updateCompletion(id: number, value: number) {
    gameService.updateCompletion(id, value);
    refresh();
  }

  return {
    games,
    addGame,
    removeGame,
    updateCompletion,
  };
}