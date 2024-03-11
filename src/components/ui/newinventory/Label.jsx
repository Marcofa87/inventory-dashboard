import React from "react";

export default function Label({ newItem, setNewItem }) {
  return (
    <>
      <form>
        <label className="block mb-1">Product Name:</label>
        <input
          name="product name"
          placeholder="Product Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
      </form>
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
    </>
  );
}
