import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"
import { useLocation } from "react-router-dom";


const inventory = () => {
    const inventory = useContext(InventoryContext);
    const location = useLocation();
    const canSelectItems = location.pathname.includes("/room/")

    if (!inventory) return null;

    return (
        <div className="inventory">
            <h2>inventory</h2>
            <div className="inventory-items">
                {inventory.ItemsInventory.map((item) => (
                    <button
                        className="inventory-button"
                        key={item.id}
                        disabled={!canSelectItems}
                        onClick={() => inventory.setSelectedItem(item.id)}
                    >
                        <img src={item.image} alt={item.item} width={50} />


                        {item.item}
                    </button>
                ))}
            </div>
            <p>
                Selected Item: {
                    inventory.ItemsInventory.find(
                        (item) => item.id === inventory.selectedItem
                    )?.item
                }
            </p>
        </div>
    )
}

export default inventory