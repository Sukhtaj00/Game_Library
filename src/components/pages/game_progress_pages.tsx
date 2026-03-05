import { useGames } from "../../hooks/useGames";

/**
 * GameProgressPage
 *
 * This component uses the hook-service-repository architecture.
 * It retrieves shared data using the useGames hook.
 * Business logic is handled in the service layer.
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
            <input
              type="number"
              min="0"
              max="100"
              value={game.completion}
              onChange={(e) =>
                updateCompletion(game.id, Number(e.target.value))
              }
            />{" "}
            %
            <button onClick={() => removeGame(game.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameProgressPage;