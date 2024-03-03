import React from "react";

export default function Inventory({ inventory }) {
  return (
    <>
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
