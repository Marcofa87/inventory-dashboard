export default function Inventory() {
  return (
    <>
      <div className="flex gap-5 justify-between mx-5 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-base font-medium text-zinc-700">
          Inventory Summary
        </div>
        <div className="flex flex-col justify-center px-6 py-1.5 text-sm text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl max-md:px-5">
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src=""
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
            <div className="grow my-auto">Add a New Product</div>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch px-4 py-3 w-full bg-indigo-500 rounded-xl max-md:mt-5 max-md:max-w-full">
              <img loading="lazy" src="" className="w-9 aspect-square" alt="" />
              <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 text-white basis-0 w-fit">
                  <div className="text-sm">All Products</div>
                  <div className="self-start mt-2 text-xl font-medium">350</div>
                </div>
                <div className="flex flex-col grow shrink-0 whitespace-nowrap basis-0 w-fit">
                  <div className="text-sm text-white">Active</div>
                  <div className="flex gap-2 justify-center self-start mt-2">
                    <div className="text-xl font-medium text-white">316</div>
                    <div className="my-auto text-xs text-slate-200">86%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3.5 py-3 w-full bg-white rounded-xl max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between w-full text-xs whitespace-nowrap text-neutral-300 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  src=""
                  className="shrink-0 w-9 aspect-square"
                  alt=""
                />
                <div className="flex gap-2 my-auto">
                  <div className="grow">This Week</div>
                  <img
                    loading="lazy"
                    src=""
                    className="shrink-0 w-4 aspect-square"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm text-red-400">Low Stock Alert</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700">
                    23
                  </div>
                </div>
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <div className="text-sm text-neutral-400">Expired</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700">
                    3
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm text-neutral-400">1 Start Rating</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              Product 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              Category 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              10
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              100
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              1000
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
              Action 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Status 1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
