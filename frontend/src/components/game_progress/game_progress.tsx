import "./game_progress.css";
 
function GameProgress() {
    const progress = [
        { id: "1", title: "God of War", completion: 100 },
        { id: "2", title: "Halo Infinite", completion: 60 },
        { id: "3", title: "Cyberpunk 2077", completion: 25 },
        { id: "4", title: "Elden Ring", completion: 80 },
    ];
 
    return (
        <section className="game-progress">
            <h2>Game Progress</h2>
 
            <ul>
                {progress.map((game) => (
                    <li key={game.id}>
                        {game.title}<br />
                        Completion: {game.completion}%
                    </li>
                ))}
            </ul>
        </section>
    );
}
 
export default GameProgress;