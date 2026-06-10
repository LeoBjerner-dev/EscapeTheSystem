import rooms from "../data/rooms.json"
import { useParams } from 'react-router-dom'

const Room = () => {
    const { roomPath } = useParams();

    const room = rooms.find(
        (room) => room.roomPath === roomPath
    );
    if (!room) {
        return <h1>room not found</h1>
    }

    return (
        <>
            <h1>{room.roomName}</h1>
            <p>{room.unsolvedInstruction}</p>

            <img
                src={room.unsolvedImage} alt={room.roomName}
            />
        </>
    );
};

export default Room