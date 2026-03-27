import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import GameCollectionPage from "./components/pages/game_collection_pages";
import GameProgressPage from "./components/pages/game_progress_pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="collection" element={<GameCollectionPage />} />
        <Route path="progress" element={<GameProgressPage />} />
      </Route>
    </Routes>
  );
}

export default App;