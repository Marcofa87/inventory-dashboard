import React, { useState } from "react";
import Button from "../components/ui/inventory/Button";

export default function ViewInventory() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const handleDelete = () => {
    localStorage.removeItem("products");

    setProducts([]);
  };
  return (
    <>
      <Button onClick={handleDelete}>Delete Fields</Button>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl shadow-md mt-6">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left border-r border-gray-300">
                Nome
              </th>
              <th className="px-6 py-3 text-left border-r border-gray-300">
                Quantità
              </th>
              <th className="px-6 py-3 text-left border-r border-gray-300">
                Prezzo di Vendita
              </th>
              <th className="px-6 py-3 text-left border-r border-gray-300">
                Prezzo di Costo
              </th>
              <th className="px-6 py-3 text-left border-r border-gray-300">
                Descrizione
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                  {product.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                  {product.sellingPrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                  {product.costPrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
