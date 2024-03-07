import { useState } from "react";
import Button from "../components/ui/Button";
import StockQuantity from "../components/ui/StockQuantity";
import TextArea from "../components/ui/TextArea";
import InventoryMap from "../components/ui/InventoryMap";
import { useNavigate } from "react-router-dom";

export default function NewInventory() {
  const navigate = useNavigate();

  // State per tenere traccia dell'inventario
  const [inventory, setInventory] = useState([]);

  // State per tenere traccia dei nuovi elementi dell'inventario
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    sellingPrice: 0,
    costPrice: 0,
    description: "",
  });

  // Funzione per aggiungere un nuovo elemento all'inventario
  const addItem = () => {
    setInventory([...inventory, newItem]);

    setNewItem({
      name: "",
      quantity: 0,
      sellingPrice: 0,
      costPrice: 0,
      description: "",
    });

    navigate("/viewinventory", { state: { inventoryItem: newItem } });
  };

  return (
    <>
      <div className="flex gap-5 justify-between mx-5 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-base font-medium text-zinc-700">
          New Inventory Item
        </div>
        <div className="flex gap-5 justify-between text-sm text-center text-white">
          <Button className="my-auto">Go back</Button>

          <Button
            addItem={addItem}
            className="grow justify-center px-8 py-2.5 whitespace-nowrap bg-indigo-500 rounded-xl max-md:px-5"
          >
            Save & Publish
          </Button>
        </div>
      </div>
      <div className="flex justify-start items-start ">
        <div className=" p-4 bg-white rounded shadow w-full">
          <p className="text-lg font-semibold p-4">New Inventory Item</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1">Product Name:</label>
              <input
                name="product name"
                placeholder="Product Name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Selling Price:</label>
              <input
                name="selling price"
                placeholder="Selling price"
                value={newItem.sellingPrice}
                onChange={(e) =>
                  setNewItem({ ...newItem, sellingPrice: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Cost Price:</label>
              <input
                name="cost price"
                placeholder="Cost price"
                value={newItem.costPrice}
                onChange={(e) =>
                  setNewItem({ ...newItem, costPrice: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <StockQuantity newItem={newItem} setNewItem={setNewItem} />
          </div>
          <TextArea newItem={newItem} setNewItem={setNewItem} />
        </div>
      </div>
    </>
  );
}
