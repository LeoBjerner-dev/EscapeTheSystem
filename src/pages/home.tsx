import rooms from "../data/rooms.json";
import { Link } from "react-router-dom";


export const Home = () => {

  return (
    <div>
      <h1>Escape the System</h1>
      {rooms.map((room) => (
        <Link to={room.roomPath}>
            <h3>{room.roomName}</h3>
        </Link>
        
      ))}
    </div>
  );
};
export default Home;
