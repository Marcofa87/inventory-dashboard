export default function ViewInventory() {
  const inventoryItem = JSON.parse(localStorage.getItem("inventoryItem"));

  const itemName = inventoryItem?.name;
  const itemQuantity = inventoryItem?.quantity;
  const itemSellingPrice = inventoryItem?.sellingPrice;
  const itemCostPrice = inventoryItem?.costPrice;
  const itemDescription = inventoryItem?.description;
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
                {itemName}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Quantità:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {itemQuantity}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Prezzo di vendita:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {itemSellingPrice}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Prezzo di costo:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {itemCostPrice}
              </dd>

              <dt className="col-span-1 text-sm font-medium text-gray-500">
                Descrizione:
              </dt>
              <dd className="col-span-1 mt-1 text-sm text-gray-900">
                {itemDescription}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
