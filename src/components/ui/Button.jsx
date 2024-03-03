export default function Button({ children, addItem }) {
  return (
    <button
      onClick={addItem}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
    >
      {children}
    </button>
  );
}
