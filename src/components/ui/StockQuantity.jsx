import React from "react";

export default function StockQuantity({ newItem, setNewItem }) {
  return (
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
  );
}
