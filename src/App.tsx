import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Room from "./pages/room";
import Victory from "./pages/victory";
import { InventoryProvider } from "./InventoryProvider";

const App = () => {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomPath" element={<Room />} />
          <Route path="/victory" element={<Victory />} />
        </Routes>
      </InventoryProvider>
    </BrowserRouter>
  );
};

export default App;
