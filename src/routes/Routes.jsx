import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/myCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../components/BrandProducts/BrandProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/brands/:brand_name",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product/brand/${params.brand_name}`),
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product/${params.productId}`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "Register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
