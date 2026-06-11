import rooms from "../data/rooms.json"
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"


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
        </>

    );
}

export default Room