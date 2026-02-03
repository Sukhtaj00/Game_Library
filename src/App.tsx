import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import GameCollectionPage from "./components/pages/game_collection_pages";
import GameProgressPage from "./components/pages/game_progress_pages";
import "./App.css"

export type Game = {
  title: string;
  completion: number;
};

function App() {
  const [games, setGames] = useState<Game[]>([
    { title: "God of War", completion: 100 },
    { title: "Halo Infinite", completion: 60 },
  ]);

  const totalGames = games.length;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="collection"
          element={
            <GameCollectionPage
              games={games}
              setGames={setGames}
              totalGames={totalGames}
            />
          }
        />
        <Route
          path="progress"
          element={
            <GameProgressPage
              games={games}
              setGames={setGames}
              totalGames={totalGames}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
