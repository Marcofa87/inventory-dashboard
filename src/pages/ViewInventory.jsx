
import { useLocation } from "react-router-dom";

export default function ViewInventory() {
  const location = useLocation();
  const { inventoryItem } = location.state; // Accedi all'elemento dell'inventario passato attraverso lo stato di navigazione
  console.log(inventoryItem);
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Dettagli del Prodotto
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 grid grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Nome:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {inventoryItem.name}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Quantità:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {inventoryItem.quantity}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Prezzo di vendita:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {inventoryItem.sellingPrice}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Prezzo di costo:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {inventoryItem.costPrice}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Descrizione:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {inventoryItem.description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
=======
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
