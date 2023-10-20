import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Headers/Navbar/Navbar";

const ProductDetails = () => {
  const product = useLoaderData();
  const auth = useContext(AuthContext);
  const addToCart = async () => {
    if (!auth.user) {
      toast.warning("Log in to add products to your cart.");
      return;
    }

    console.log("Adding to cart:", {
      user: auth.user.email,
      product: product,
    });

    fetch("http://localhost:3000/product/add-to-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: auth.user.email, // Assuming you have the user's email
        product: product,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Product Added Successfully!"); // Show a success toast message
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-3/4 mx-auto mt-8">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-2">
              <img
                src={product.photo}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="text-gray-800">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xl mt-2 text-gray-600">
                Brand: {product.brandName}
              </p>
              <p className="text-xl text-gray-600">Type: {product.type}</p>
              <p className="text-xl text-gray-600">Price: {product.price} Tk</p>
              <p className="text-xl text-gray-600">Rating: {product.rating}</p>
              <p className="text-xl text-gray-600 mt-4">Description:</p>
              <p className="text-lg text-gray-700">{product.description}</p>
              <ToastContainer></ToastContainer>
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-600"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-800">Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
