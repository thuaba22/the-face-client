import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../components/Headers/Navbar/Navbar";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    // Fetch the user's cart items
    const fetchUserCart = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/user/cart/${auth.user.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        }
      } catch (error) {
        console.error("Error fetching user's cart items:", error);
      }
    };

    if (auth.user) {
      fetchUserCart();
    }
  }, [auth.user]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    // You'll need to implement the removal logic here
    // This is a placeholder function
    console.log(`Removing item with ID: ${itemId}`);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg p-4 flex items-center justify-between shadow-md"
            >
              <div className="text-xl font-semibold">{item.product.name}</div>
              <div className="text-lg text-gray-600">
                Price: {item.product.price} Tk
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 font-semibold focus:outline-none hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
