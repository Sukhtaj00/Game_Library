import GameCollection from "./components/game_collection/game_collection";
import GameProgress from "./components/game_progress/game_progress";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Game Library Tracker</h1>
      </header>

      <main>
        <GameCollection />
        <GameProgress />
      </main>

      <footer>
        <p>Project by: Sukhtaj and Beerdavinder</p>
      </footer>
    </div>
  );
}

export default App;
