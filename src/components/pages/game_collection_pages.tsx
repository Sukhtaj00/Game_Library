import GameCollection from "../game_collection/game_collection";

function GameCollectionPage({ totalGames, setTotalGames }: any) {
  return (
    <>
      <p>Total Games: {totalGames}</p>

      <button onClick={() => setTotalGames(totalGames + 1)}>
        Add Game
      </button>

      <button
        onClick={() => setTotalGames(totalGames - 1)}
        disabled={totalGames === 0}
      >
        Remove Game
      </button>

      <GameCollection />
    </>
  );
}

export default GameCollectionPage;
