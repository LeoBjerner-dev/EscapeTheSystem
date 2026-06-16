import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Room from "./pages/room";
import Victory from "./pages/victory";
import { InventoryProvider } from "./InventoryProvider";
import Inventory from "./components/inventory";

const NotFound = () => {
  const navigate = useNavigate();
  navigate("/", { replace: true });
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomPath" element={<Room />} />
          <Route path="/victory" element={<Victory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Inventory />
      </InventoryProvider>
    </BrowserRouter>
  );
};

export default App;
