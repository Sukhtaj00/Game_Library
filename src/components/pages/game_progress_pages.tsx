import React from "react";
import type { Game } from "../../App";
import GameProgress from "../game_progress/game_progress";
 
type Props = {
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  totalGames: number;
};
 
function GameProgressPage({ games, setGames, totalGames }: Props) {
  function updateCompletion(index: number, value: number) {
    const updatedGames = [...games];
    updatedGames[index] = {
      ...updatedGames[index],
      completion: value,
    };
    setGames(updatedGames);
  }
 
  function handleRemoveGame(index: number) {
    setGames(games.filter((_, i) => i !== index));
  }
 
  return (
<>
<h2>Game Progress</h2>
<p>Total Games Tracked: {totalGames}</p>
 
      <ul>
        {games.map((game, index) => (
<li key={index}>
<strong>{game.title}</strong>{" "}
<input
              type="number"
              min="0"
              max="100"
              value={game.completion}
              onChange={(e) =>
                updateCompletion(index, Number(e.target.value))
              }
            />{" "}
            %
<button onClick={() => handleRemoveGame(index)}>Remove</button>
</li>
        ))}
</ul>
<GameProgress />
</>
  );
}
 
export default GameProgressPage;