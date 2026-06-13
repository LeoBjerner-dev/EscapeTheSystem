import { Link } from "react-router-dom"
import rooms from "../data/rooms.json"
import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"
import { useMemo } from "react"


export const Home = () => {

    const inventory = useContext(InventoryContext);
    if (!inventory) return null;

    const shuffledRooms = useMemo(
        () => [...rooms].sort(() => Math.random() - 0.5),
        []
    )

    return (
        <div className="home-container">
            <h1>Escape the System</h1>
            <p className="game-description">
                You are trapped inside Project NEXUS, a high-security AI research facility.
                Explore each room, solve puzzles, collect items and find a way to escape
                before the rogue AI takes full control.
            </p>

            <div className="room-grid">
                {shuffledRooms.map((room) => {
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
                            <div className="room-card">
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

            </div>
        </div>
    )
}
export default Home