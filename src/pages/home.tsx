import { Link } from "react-router-dom"
import rooms from "../data/rooms.json"
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"


export const Home = () => {

    const inventory = useContext(InventoryContext);
    if (!inventory) return null;

    return (
        <>
            <h1>Escape the System</h1>
            <h2>
                You are trapped inside Project NEXUS, a high-security AI research facility.
                Explore each room, solve puzzles, collect items and find a way to escape
                before the rogue AI takes full control.
            </h2>

            {rooms.map((room) => {
                const solved =
                    room.itemToAdd !== null &&
                    inventory.ItemsInventory.some(
                        (item) => item.id === room.itemToAdd
                    );
                return (
                    <Link
                        key={room.id}
                        to={`/room/${room.roomPath}`}
                    >
                        <div>
                            <h2>{room.roomName}</h2>

                            <img src={
                                solved
                                    ? room.solvedImage
                                    : room.unsolvedImage
                            }
                                alt={room.roomName}
                                width={200}
                            />
                        </div>
                    </Link>
                )
            })}


        </>
    )
}
export default Home