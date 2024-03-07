import { useLocation } from "react-router-dom";

export default function ViewInventory() {
  const location = useLocation();

  const { inventoryItem } = location.state;
  return (
    <>
      <div>
        <p>Name: {inventoryItem.name}</p>
        <p>Quantity: {inventoryItem.quantity}</p>
        <p>Selling Price: {inventoryItem.sellingPrice}</p>
        <p>Cost Price: {inventoryItem.costPrice}</p>
        <p>Description: {inventoryItem.description}</p>
      </div>
    </>
  );
}
