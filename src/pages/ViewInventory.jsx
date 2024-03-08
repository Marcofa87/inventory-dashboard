import React from "react";

export default function ViewInventory() {
  return (
    <>
      <div className="m-0 overflow-x-auto">
        <h2 className="text-lg mt-4">Products Stocked</h2>
        <div className="shadow-md overflow-hidden border border-neutral-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Nome Prodotto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Quantità
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Prezzo di Vendita
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Prezzo di Costo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Descrizione
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {inventoryItem.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.sellingPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.costPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
