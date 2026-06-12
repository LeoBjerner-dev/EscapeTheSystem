import rooms from "../data/rooms.json"
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"
import items from "../data/items.json"
import { Link } from "react-router-dom"


const Room = () => {

    const { roomPath } = useParams();

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
    return (
        <>
            <h1>{room.roomName}</h1>

            <p>selected item: {inventory.selectedItem}</p>

            <p>
                {solved
                    ? room.solvedInstruction
                    : room.unsolvedInstruction}
            </p>

            <p>{room.hint}</p>
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

                    <Link to="/">
                        <button>
                            back to overview
                        </button>
                    </Link>
                </div>
            )}
        </>

    );
}

export default Room