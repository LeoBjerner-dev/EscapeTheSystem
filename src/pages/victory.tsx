import { Link } from "react-router-dom"
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"

const Victory = () => {
    const inventory = useContext(InventoryContext);
    if (!inventory) return null;

    return (
        <div className="victory-container">
            <h1>Congratulations!</h1>

            <img src="/images/extra/victory.png" alt="Victory" width={500} />

            <p> You escaped project NEXUS and completed the game.</p>
            <p> The rogue AI has been shut down and the facility is secure once again.</p>

            <Link to="/">
                <button className="escape-btn" onClick={inventory.resetGame}>Play Again</button>
            </Link>
        </div>
    )
}

export default Victory