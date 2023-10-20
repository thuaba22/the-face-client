/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../../components/Headers/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    type: "",
    price: "",
    description: "",
    rating: 0,
    photo: "",
  });

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

  const handleAddProduct = (event) => {
    event.preventDefault();
    const { name, brandName, type, price, description, rating, photo } =
      formData;

    console.log("Form Data:", formData);

    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
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
      <div className="bg-[#FFFFCC] text-[#800000] p-24">
        <ToastContainer></ToastContainer>
        <h2 className="text-3xl font-extrabold">Add a Product</h2>
        <form onSubmit={handleAddProduct}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  required
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
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[#800000]">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  onChange={handleInputChange}
                  placeholder="Product Type"
                  className="input input-bordered w-full"
                  required
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
                  name="rating-2"
                  value="1"
                  onChange={handleRatingChange} // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="2"
                  onChange={handleRatingChange} // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="3"
                  onChange={handleRatingChange} // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="4"
                  onChange={handleRatingChange} // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
                />
                <input
                  type="radio"
                  name="rating-2"
                  value="5"
                  onChange={handleRatingChange} // Add this line
                  className="mask mask-star-2 bg-orange-400"
                  required
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
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn bg-[#800] hover:bg-[#800000] text-white btn-block"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
