import { useGames } from "../../hooks/useGames";
import { SignedIn } from "@clerk/clerk-react";

/**
 * GameProgressPage
 *
 * Uses hook-service-repository architecture.
 * Guests can view progress.
 * Logged-in users can edit and remove.
 */

function GameProgressPage() {
  const { games, updateCompletion, removeGame } = useGames();

  return (
    <>
      <h2>Game Progress</h2>
      <p>Total Games Tracked: {games.length}</p>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <strong>{game.title}</strong>{" "}

            {/* Show static value for guests */}
            <span>{game.completion}%</span>

            {/* Editable controls only for logged-in users */}
            <SignedIn>
              <>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={game.completion}
                  onChange={(e) =>
                    updateCompletion(game.id, Number(e.target.value))
                  }
                  style={{ marginLeft: "10px", width: "60px" }}
                />
                {" % "}
                <button
                  onClick={() => removeGame(game.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              </>
            </SignedIn>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameProgressPage;