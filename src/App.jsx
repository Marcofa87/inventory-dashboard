// routing
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NewInventory from "./pages/NewInventory";
import ViewInventory from "./pages/ViewInventory";
import Inventory from "./pages/Inventory";

// routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Inventory />} />
      <Route path="newinventory" element={<NewInventory />} />
      <Route path="viewinventory" element={<ViewInventory />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
