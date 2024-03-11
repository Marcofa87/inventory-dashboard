export default function Form() {
  const data = [
    {
      id: 1,
      productName: "Scarpe",
      category: "Category 1",
      unitPrice: 10,
      inStock: 100,
      totalValue: 1000,
      action: "Action 1",
      status: "Status 1",
    },
  ];
  return (
    <>
      <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl shadow-md mt-6">
        <thead className="bg-indigo-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Checked
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Product name
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Category
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Unit price
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              In-stock
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Total value
            </th>
            <th className="px-6 py-3 text-left border-r border-gray-300">
              Action
            </th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.productName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.unitPrice}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.inStock}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.totalValue}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                {row.action}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
