import { useContext } from "react"
import { InventoryContext } from "../InventoryProvider"


const inventory = () => {
    const inventory = useContext(InventoryContext);

    if (!inventory) return null;

    return (
        <div className="inventory">
            <h2>inventory</h2>
            <div className="inventory-items">
                {inventory.ItemsInventory.map((item) => (
                    <button
                        className="inventory-button"
                        key={item.id}
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