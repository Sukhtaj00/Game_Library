import GameProgress from "../game_progress/game_progress";

function GameProgressPage({ totalGames }: any) {
  return (
    <>
      <p>Total Games Tracked: {totalGames}</p>
      <GameProgress />
    </>
  );
}

export default GameProgressPage;
