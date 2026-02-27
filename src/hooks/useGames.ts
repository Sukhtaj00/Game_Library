import { useState, useEffect } from "react";
import type { Game } from "../types/Game";
import { gameService } from "../services/gameService";


export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(gameService.getGames());
  }, []);

  function refresh() {
    setGames(gameService.getGames());
  }

  function addGame(title: string) {
    gameService.addGame(title);
    refresh();
  }

  function removeGame(id: string) {
    gameService.removeGame(id);
    refresh();
  }

  function updateCompletion(id: string, value: number) {
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