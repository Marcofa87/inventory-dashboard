import { useNavigate } from "react-router-dom";
import Button from "../components/ui/inventory/Button";

export default function Inventory() {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/newinventory");
  };

  return (
    <>
      <div className="flex gap-5 justify-between mx-5 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-base font-medium text-zinc-700">
          Inventory Summary
        </div>

        <Button className="grow my-auto" onClick={handleAddProduct}>
          Add a New Product +
        </Button>
      </div>
      <div className="mx-5 mt-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch px-4 py-3 w-full bg-indigo-500 rounded-xl max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 text-white basis-0 w-fit">
                  <div className="text-sm">All Products</div>
                  <div className="self-start mt-2 text-xl font-medium">X</div>
                </div>
                <div className="flex flex-col grow shrink-0 whitespace-nowrap basis-0 w-fit">
                  <div className="text-sm text-white">Active</div>
                  <div className="flex gap-2 justify-center self-start mt-2">
                    <div className="text-xl font-medium text-white"></div>
                    <div className="my-auto text-xs text-slate-200">X</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-3.5 py-3 w-full bg-white rounded-xl max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between w-full text-xs whitespace-nowrap text-neutral-300 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2 my-auto">
                  <div className="grow">This Week</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm text-red-400">Low Stock Alert</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700"></div>
                </div>
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <div className="text-sm text-neutral-400">Expired</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700"></div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="text-sm text-neutral-400">1 Start Rating</div>
                  <div className="self-start mt-2 text-xl font-medium text-zinc-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
