import { createContext, useState } from "react";
import items from "./data/items.json";
import React from "react";

interface Items {
  id: number,
  item: string,
  description: string,
  image: string
}

interface InventoryContextType {
  ItemsInventory: Items[],
  addNewItem: (newItem:Items) => void
}

export const InventoryContext = createContext<InventoryContextType | null>(null)
export const InventoryProvider = ({ children }: { children: React.ReactNode }) => {


  const [ItemsInventory, setItemsInventory] = useState<Items[]>([items.find((i) => i.id === 1)!])

  const addNewItem = (newItem:Items) => {

    setItemsInventory([...ItemsInventory, newItem])
  }

  return (
    <InventoryContext.Provider value={{addNewItem, ItemsInventory}}>
    {children}
    </InventoryContext.Provider>
  )}