import React, { useState } from "react";
import Button from "../components/ui/inventory/Button";
import { useNavigate } from "react-router-dom";

export default function ViewInventory() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const handleDelete = () => {
    localStorage.removeItem("products");

    setProducts([]);
    navigate(-1);
  };

  const thStyle = "px-6 py-3 text-left border-r border-gray-300";
  const tdStyle = "px-6 py-4 whitespace-nowrap border-r border-gray-300";
  return (
    <>
      <Button onClick={handleDelete}>Delete Fields</Button>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl shadow-md mt-6">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className={thStyle}>Name</th>
              <th className={thStyle}>Quantity</th>
              <th className={thStyle}>Selling Price</th>
              <th className={thStyle}>Cost Price</th>
              <th className={thStyle}>Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products &&
              products.map((product, index) => (
                <tr key={index}>
                  <td className={tdStyle}>{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                    {product.quantity}
                  </td>
                  <td className={tdStyle}>{product.sellingPrice}</td>
                  <td className={tdStyle}>{product.costPrice}</td>
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
