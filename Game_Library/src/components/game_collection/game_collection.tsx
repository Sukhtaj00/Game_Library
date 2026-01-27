//imported css
import "./game_collection.css";

function GameCollection() {
    const games = [
        { id: "1", title: "God of War", platform: "PlayStation", status: "Completed" },
        { id: "2", title: "Halo Infinite", platform: "Xbox", status: "Playing" },
        { id: "3", title: "Cyberpunk 2077", platform: "PC", status: "Backlog" },
        { id: "4", title: "Elden Ring", platform: "PC", status: "Completed" },
    ];

    return (
        <section className="game-collection">
            <h2>My Game Collection</h2>

            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.title}<br />
                        Platform: {game.platform} | Status: {game.status}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GameCollection;


