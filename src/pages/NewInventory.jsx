// NewInventory.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/inventory/Button";
import StockQuantity from "../components/ui/inventory/StockQuantity";
import TextArea from "../components/ui/inventory/TextArea";
import Label from "../components/ui/inventory/Label";

export default function NewInventory() {
  const navigate = useNavigate();

  // State per tenere traccia dei nuovi elementi dell'inventario
  const [newItem, setNewItem] = useState({
    name: "mario",
    quantity: 10,
    sellingPrice: 100,
    costPrice: 10,
    description: "calze",
  });

  const isNotEmptyString = (value) => value.trim() !== "";
  const isPositiveNumber = (value) => !isNaN(value) && parseFloat(value) > 0;

  const validateNewItem = (newItem) => {
    return (
      isNotEmptyString(newItem.name) &&
      isPositiveNumber(newItem.sellingPrice) &&
      isPositiveNumber(newItem.costPrice) &&
      isPositiveNumber(newItem.quantity)
    );
  };

  // Funzione per aggiungere un nuovo elemento all'inventario
  const addItem = () => {
    if (!validateNewItem(newItem)) {
      alert("Please insert valid fields.");
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = { ...newItem };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    navigate("/viewinventory");
  };

  return (
    <>
      <div className="flex gap-5 justify-between mx-5 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-base font-medium text-zinc-700">
          New Inventory Item
        </div>
        <div className="flex gap-5 justify-between text-sm text-center text-white">
          <Button className="my-auto">Go back</Button>
          <Button
            onClick={addItem}
            className="grow justify-center px-8 py-2.5 whitespace-nowrap bg-indigo-500 rounded-xl max-md:px-5"
          >
            Save & Publish
          </Button>
        </div>
      </div>
      <div className="flex justify-start items-start ">
        <div className=" p-4 bg-white rounded shadow w-full">
          <p className="text-lg font-semibold p-4">New Inventory Item</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Label newItem={newItem} setNewItem={setNewItem} />
            <StockQuantity newItem={newItem} setNewItem={setNewItem} />
          </div>
          <TextArea newItem={newItem} setNewItem={setNewItem} />
        </div>
      </div>
    </>
  );
}
