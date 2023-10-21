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
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

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
          fetch(
            `https://the-face-store-server-rfsm6nrpx-thuabas-projects.vercel.app/product/brand/${params.brand_name}`
          ),
      },
      {
        path: "/product/:productId",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-face-store-server-rfsm6nrpx-thuabas-projects.vercel.app/product/${params.productId}`
          ),
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
        path: "/update/:productId",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://the-face-store-server-rfsm6nrpx-thuabas-projects.vercel.app/product/${params.productId}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
