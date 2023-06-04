import Home from "./component/Home";
import ProductItem from "./component/productItem/ProductItem";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    // /:id/:title/:description/:price/:category/:image
    path: "/productItem/:id/",
    element: <ProductItem />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
