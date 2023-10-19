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
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-[100px]" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title badge">{brandName}</h2>
        <p>{name}</p>
        <p>{type}</p>
        <p>{description}</p>
        <p>{price}</p>
        <div className="rating">{ratingInputs}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
