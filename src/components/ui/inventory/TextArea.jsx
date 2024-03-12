import React from "react";

export default function TextArea({ newItem, setNewItem }) {
  return (
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
  );
}
