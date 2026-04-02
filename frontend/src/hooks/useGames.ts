import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { gameService } from "../services/gameService";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  function refresh() {
    setGames(gameService.getGames());
  }

  useEffect(() => {
    refresh();
  }, []);

  function addGame(title: string) {
    gameService.addGame(title);
    refresh();
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