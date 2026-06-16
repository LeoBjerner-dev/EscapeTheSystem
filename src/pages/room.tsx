import rooms from "../data/rooms.json"
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"
import items from "../data/items.json"
import { Link } from "react-router-dom"



const Room = () => {

    const { roomPath } = useParams();
    const navigate = useNavigate();
    const inventory = useContext(InventoryContext)
    if (!inventory) return null;

    const room = rooms.find(
        (room) => room.roomPath === roomPath
    );
    if (!room) {
        return <h1>room not found</h1>
    }

    const solved = inventory.selectedItem === room.itemToSolve;


    const rewardItem = items.find(
        (item) => item.id === room.itemToAdd

    );

    if (
        solved && rewardItem && !inventory.ItemsInventory.some(
            (item) => item.id === rewardItem.id
        )
    ) {
        inventory.addNewItem(rewardItem)
    }
    const [searchParams, setSearchParams] = useSearchParams();
    const showHint = searchParams.get("hint") === "true";

    const toggleHint = () => {
        if (showHint) {
            searchParams.delete("hint");
        } else {
            searchParams.set("hint", "true");
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="room-container">
            <h1>{room.roomName}</h1>



            <p>
                {solved
                    ? room.solvedInstruction
                    : room.unsolvedInstruction}
            </p>

            <button className="hint-btn" onClick={toggleHint}>Hint</button>
            {showHint && (
                <p className="hint-txt">{room.hint}</p>
            )}
            <img src={
                solved
                    ? room.solvedImage
                    : room.unsolvedImage
            }
                alt={room.roomName}
            />
            {solved && rewardItem && (
                <div>
                    <h2>Room Completed!</h2>
                    <p>You received: {rewardItem.item}</p>

                    <img src={rewardItem.image} alt={rewardItem.item} width={100} />

                </div>
            )}

            {solved && room.roomPath === "exit-node" && (
                <div>
                    <button className="escape-btn" onClick={() => navigate("/victory")}>
                        Escape Facility
                    </button>
                </div>
            )}
            <Link to="/">
                <button className="back-btn" onClick={() => inventory.setSelectedItem(null)}>
                    back to overview
                </button>
            </Link>
        </div>

    );
}

export default Room