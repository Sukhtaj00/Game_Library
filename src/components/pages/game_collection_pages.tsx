import { useState } from "react";
import { useGames } from "../../hooks/useGames";

/**
 * GameCollectionPage
 *
 * This component uses the hook-service-repository architecture.
 * It does not receive props or manage shared state directly.
 * All data is accessed through the useGames hook.
 */

function GameCollectionPage() {
  const { games, addGame, removeGame } = useGames();
  const [newGame, setNewGame] = useState("");

  function handleAddGame(e: React.FormEvent) {
    e.preventDefault();
    if (!newGame.trim()) return;

    addGame(newGame);
    setNewGame("");
  }

  return (
    <>
      <h2>Game Collection</h2>
      <p>Total Games: {games.length}</p>

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
        {games.map((game) => (
          <li key={game.id}>
            {game.title} ({game.completion}%)
            <button onClick={() => removeGame(game.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameCollectionPage;