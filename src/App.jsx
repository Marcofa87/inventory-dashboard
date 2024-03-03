import React, { useState } from "react";

function InventoryForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productType: "shoes",
    sellingPrice: "",
    costPrice: "",
    quantityInStock: "",
    orderType: "",
    description: "Product description",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      productName: "",
      productType: "shoes",
      sellingPrice: "",
      costPrice: "",
      quantityInStock: "",
      orderType: "",
      description: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>New Inventory Item</p>
          <button type="submit">Save as draft</button>
          <button type="submit">Save & Publish</button>
        </div>
        <div>
          <div>
            <label>
              Product Name:
              <input
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Product Name"
              />
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
            >
              <option value="shoes">Shoes</option>
            </select>
          </div>
          <div>
            <label>
              <input
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                placeholder="Selling price"
              />
            </label>
            <label>
              <input
                name="costPrice"
                value={formData.costPrice}
                onChange={handleChange}
                placeholder="Cost Price"
              />
            </label>
          </div>
          <div>
            <label>
              <input
                name="quantityInStock"
                value={formData.quantityInStock}
                onChange={handleChange}
                placeholder="Quantity in Stock"
                type="number"
              />
            </label>
            <select
              name="orderType"
              value={formData.orderType}
              onChange={handleChange}
            >
              <option value="Order Type">Order Type</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              cols={40}
              placeholder="Product description"
            />
          </label>
        </div>
      </form>
      <div>
        <h2>Form Data</h2>
        <p>Product Name: {formData.productName}</p>
        <p>Product Type: {formData.productType}</p>
        <p>Selling Price: {formData.sellingPrice}</p>
        <p>Cost Price: {formData.costPrice}</p>
        <p>Quantity in Stock: {formData.quantityInStock}</p>
        <p>Order Type: {formData.orderType}</p>
        <p>Description: {formData.description}</p>
      </div>
    </div>
  );
}

export default InventoryForm;
