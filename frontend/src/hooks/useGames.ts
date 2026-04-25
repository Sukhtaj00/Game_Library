import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { gameService } from "../services/gameService";
import { useAuth } from "@clerk/clerk-react";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const { getToken } = useAuth();

  async function refresh() {
    const token = await getToken();

    if (!token) {
      setGames([]);
      return;
    }

    const data = await gameService.getGames(token);
    setGames(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addGame(title: string) {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await gameService.addGame(title, token);
    await refresh();
  }

  async function removeGame(id: string) {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await gameService.removeGame(id, token);
    await refresh();
  }

  async function updateCompletion(id: string, value: number) {
    const token = await getToken();

    if (!token) {
      throw new Error("User not authenticated");
    }

    await gameService.updateCompletion(id, value, token);
    await refresh();
  }

  return {
    games,
    addGame,
    removeGame,
    updateCompletion,
  };
}