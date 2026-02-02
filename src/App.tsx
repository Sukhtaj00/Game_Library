import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/layout";
import GameCollectionPage from "./components/pages/game_collection_pages";
import GameProgressPage from "./components/pages/game_progress_pages";

function App() {
  const [totalGames, setTotalGames] = useState(4);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="collection"
          element={
            <GameCollectionPage
              totalGames={totalGames}
              setTotalGames={setTotalGames}
            />
          }
        />
        <Route
          path="progress"
          element={
            <GameProgressPage
              totalGames={totalGames}
              setTotalGames={setTotalGames}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
