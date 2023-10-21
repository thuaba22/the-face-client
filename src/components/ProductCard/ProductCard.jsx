import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { name, brandName, type, price, description, rating, photo } = product;

  // Calculate the number of filled stars based on the 'rating' property
  const filledStars = Math.round(rating); // Assuming 'rating' is a number from 0 to 5

  // Create an array of radio inputs for the rating
  const ratingInputs = [1, 2, 3, 4, 5].map((index) => (
    <input
      key={index}
      type="radio"
      name="rating-2"
      className={`mask mask-star-2 bg-${
        index <= filledStars ? "orange-400" : "gray-300"
      }`}
    />
  ));
  return (
    <div className="card bg-white shadow">
      <figure>
        <img className="w-full bg-cover bg-center h-[300px]" src={photo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-[#800000]">{brandName}</h2>
        <h2 className="card-title font-bold text-[#800000]">
          {name}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        <p className="text-[#800]">{description}</p>
        <p className="text-[#800]">Price: {price}Tk</p>

        <div className="rating">{ratingInputs}</div>
        <div className="flex justify-end gap-3 mt-3">
          <Link
            to={`/product/${product._id}`}
            className="btn btn-sm btn-outline btn-info"
          >
            Show Details
          </Link>
          <Link to={`/update/${product._id}`}>
            <button className="btn btn-sm">
              Update
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
