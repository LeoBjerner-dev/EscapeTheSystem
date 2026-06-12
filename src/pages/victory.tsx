import { Link } from "react-router-dom"
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"

const Victory = () => {
    const inventory = useContext(InventoryContext);
    if (!inventory) return null;

    return (
        <>
            <h1>Congratulations!</h1>

            <img src="/images/extra/victory.png" alt="Victory" width={500} />

            <p> You escaped project NEXUS and completed the game.</p>

            <Link to="/">
                <button onClick={inventory.resetGame}>Play Again</button>
            </Link>
        </>
    )
}

export default Victory