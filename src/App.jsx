import React, { useState } from "react";

function App() {
  // State per tenere traccia dell'inventario
  const [inventory, setInventory] = useState([]);

  // State per tenere traccia dei nuovi elementi dell'inventario
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    sellingPrice: "",
    costPrice: "",
  });

  // Funzione per aggiungere un nuovo elemento all'inventario
  const addItem = () => {
    setInventory([...inventory, newItem]);
    setNewItem({ name: "", quantity: 0, sellingPrice: "", costPrice: "" });
  };

  return (
    <>
      <div>
        <p>New Inventory Item</p>
        <button onClick={addItem}>Save as draft</button>
        <button onClick={addItem}>Save & Publish</button>
      </div>
      <div>
        <div>
          <label>
            Product Name:{" "}
            <input
              name="product name"
              placeholder="Product Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </label>
          <select>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>
            Selling Price:{" "}
            <input
              name="selling price"
              placeholder="Selling price"
              value={newItem.sellingPrice}
              onChange={(e) =>
                setNewItem({ ...newItem, sellingPrice: e.target.value })
              }
            />
          </label>
          <label>
            Cost Price:{" "}
            <input
              name="cost price"
              placeholder="Cost price"
              value={newItem.costPrice}
              onChange={(e) =>
                setNewItem({ ...newItem, costPrice: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="product name"
              placeholder="Quantity in Stock"
              type="number"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
              }
            />
          </label>
          <select>
            <option value="Order Type">Order Type</option>
          </select>
        </div>
      </div>
      <div>
        <label>
          <textarea
            name="description"
            rows={4}
            cols={40}
            defaultValue="Product description"
          />
        </label>
      </div>

      {/* Visualizzazione dell'inventario */}
      <h2>Inventario</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - Quantità: {item.quantity} - Prezzo di vendita:{" "}
            {item.sellingPrice} - Prezzo di costo: {item.costPrice}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
