import { useEffect, useState } from "react";
import Navbar from "../Headers/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    type: "",
    price: "",
    description: "",
    rating: 0,
    photo: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://the-face-store-server-rfsm6nrpx-thuabas-projects.vercel.app/product/${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFormData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      });
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (event) => {
    setFormData({
      ...formData,
      rating: parseInt(event.target.value),
    });
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    fetch(
      `https://the-face-store-server-rfsm6nrpx-thuabas-projects.vercel.app/product/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast(data.message);

        // Redirect the user to the product details page after the update
        window.location = `/product/${productId}`;
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-[#FFFFCC] text-[#800000] p-24">
        <ToastContainer />
        <h2 className="text-3xl font-extrabold">Update a Product</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleUpdateProduct}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#800000]">
                    Product Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    className="input input-bordered w-full"
                    required
                    value={formData.name}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-[#800000]">Brand Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Brand Name"
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    required
                    value={formData.brandName}
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#800000]">
                    Product Type
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    onChange={handleInputChange}
                    placeholder="Product Type"
                    className="input input-bordered w-full"
                    required
                    value={formData.type}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-[#800000]">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="price"
                    onChange={handleInputChange}
                    placeholder="Price"
                    className="input input-bordered w-full"
                    required
                    value={formData.price}
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-[#800000]">
                    Product Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    className="input input-bordered w-full"
                    required
                    value={formData.description}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text text-[#800000]">Rating</span>
                </label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleRatingChange}
                    className="mask mask-star-2 bg-orange-400"
                    required
                    checked={formData.rating === 1}
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleRatingChange}
                    className="mask mask-star-2 bg-orange-400"
                    required
                    checked={formData.rating === 2}
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleRatingChange}
                    className="mask mask-star-2 bg-orange-400"
                    required
                    checked={formData.rating === 3}
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleRatingChange}
                    className="mask mask-star-2 bg-orange-400"
                    required
                    checked={formData.rating === 4}
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleRatingChange}
                    className="mask mask-star-2 bg-orange-400"
                    required
                    checked={formData.rating === 5}
                  />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-[#800000]">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    onChange={handleInputChange}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    required
                    value={formData.photo}
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Product"
              className="btn bg-[#800] hover:bg-[#800000] text-white btn-block"
              required
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;
