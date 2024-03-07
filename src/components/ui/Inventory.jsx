import React from "react";

export default function InventoryMap({ inventory }) {
  return (
    <>
      <div className="m-0">
        <h2 className="text-lg mt-4">Products Stocked</h2>
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>
              {item.name} - Quantità: {item.quantity} - Prezzo di vendita:{" "}
              {item.sellingPrice} - Prezzo di costo: {item.costPrice} -
              Descrizione: {item.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
