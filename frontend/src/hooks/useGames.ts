import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { gameService } from "../services/gameService";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  async function refresh() {
    const data = await gameService.getGames();
    setGames(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addGame(title: string) {
    await gameService.addGame(title);
    await refresh();
  }

  async function removeGame(id: string) {
    await gameService.removeGame(id);
    await refresh();
  }

  async function updateCompletion(id: string, value: number) {
    await gameService.updateCompletion(id, value);
    await refresh();
  }

  return {
    games,
    addGame,
    removeGame,
    updateCompletion,
  };
}