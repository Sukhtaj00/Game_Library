import { useState } from "react";
import { useGames } from "../../hooks/useGames";
import { SignedIn } from "@clerk/clerk-react";

/**
 * GameCollectionPage
 *
 * Guests can view games.
 * Logged-in users can add and remove games.
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

      {/* Add form only visible to logged-in users */}
      <SignedIn>
        <form onSubmit={handleAddGame}>
          <input
            type="text"
            value={newGame}
            onChange={(e) => setNewGame(e.target.value)}
            placeholder="Enter game name"
          />
          <button type="submit">Add Game</button>
        </form>
      </SignedIn>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} ({game.completion}%)

            {/* Remove button only for logged-in users */}
            <SignedIn>
              <button
                onClick={() => removeGame(game.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </SignedIn>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameCollectionPage;