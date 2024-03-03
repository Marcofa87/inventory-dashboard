import React, { useState } from "react";
import Button from "./components/ui/Button";

function App() {
  // State per tenere traccia dell'inventario
  const [inventory, setInventory] = useState([]);

  // State per tenere traccia dei nuovi elementi dell'inventario
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    sellingPrice: "",
    costPrice: "",
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
  };

  return (
    <>
      <div className="flex justify-start items-start min-h-screen ">
        <div className=" p-4 bg-white rounded shadow w-full">
          <p className="text-lg font-semibold p-4">New Inventory Item</p>
          <Button addItem={addItem}>Save as Draft</Button>
          <Button addItem={addItem}>Save & Publish</Button>
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
            <div>
              <label className="block mb-1">Quantity in Stock:</label>
              <input
                name="quantity"
                placeholder="Quantity in Stock"
                type="number"
                value={newItem.quantity}
                onChange={(e) =>
                  setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
                }
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Description:</label>
            <textarea
              name="description"
              rows={4}
              cols={40}
              className="w-full px-3 py-2 border rounded"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Visualizzazione dell'inventario */}
      <h2 className="text-lg mt-4">Inventario</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - Quantità: {item.quantity} - Prezzo di vendita:{" "}
            {item.sellingPrice} - Prezzo di costo: {item.costPrice} -
            Descrizione: {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
