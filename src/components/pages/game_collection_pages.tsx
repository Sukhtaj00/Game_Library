import React, { useState } from "react";
import type { Game } from "../../App";
import GameCollection from "../game_collection/game_collection";

type Props = {
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  totalGames: number;
};

function GameCollectionPage({ games, setGames, totalGames }: Props) {
  const [newGame, setNewGame] = useState("");

  function handleAddGame(e: React.FormEvent) {
    e.preventDefault();
    if (newGame.trim() === "") return;

    setGames([...games, { title: newGame, completion: 0 }]);
    setNewGame("");
  }

  function handleRemoveGame(index: number) {
    setGames(games.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Game Collection</h2>
      <p>Total Games: {totalGames}</p>

      <form onSubmit={handleAddGame}>
        <input
          type="text"
          value={newGame}
          onChange={(e) => setNewGame(e.target.value)}
          placeholder="Enter game name"
        />
        <button type="submit">Add Game</button>
      </form>

      <ul>
        {games.map((game, index) => (
          <li key={index}>
            {game.title} ({game.completion}%)
            <button onClick={() => handleRemoveGame(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <GameCollection />
    </>
  );
}

export default GameCollectionPage;
