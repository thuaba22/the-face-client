import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const product = useLoaderData();

  // Function to handle adding the product to the cart and show a toast notification
  const addToCart = () => {
    // Implement your logic to add the product to the cart here

    // Show a success toast notification
    toast.success(`${product.name} has been added to your cart!`, {
      position: "bottom-right",
      autoClose: 3000, // Adjust the duration as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
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
  );
};

export default ProductDetails;
