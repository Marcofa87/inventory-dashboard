// App.js
import React from "react";

function App() {
  return (
    <>
      <div>
        <p>New Inventory Item</p>
        <button>Save as draft</button>
        <button>Save & Publish</button>
      </div>
      <div>
        <div>
          <label>
            Product Name:{" "}
            <input name="product name" placeholder="Product Name" />
          </label>
          <select>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>
            <input name="selling price" placeholder="Selling price" />
          </label>
          <label>
            <input name="product name" placeholder="Cost Price" />
          </label>
        </div>
        <div>
          <label>
            <input
              name="product name"
              placeholder="Quantity in Stock"
              type="number"
            />
          </label>
          <select>
            <option value="Order Type">Order Type</option>
          </select>
        </div>
      </div>
      <div>
        <label>
          <textarea
            name="description"
            rows={4}
            cols={40}
            defaultValue="Product description"
          />
        </label>
      </div>
    </>
  );
}

export default App;
