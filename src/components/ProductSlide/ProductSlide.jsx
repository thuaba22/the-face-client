const ProductSlide = ({ products }) => {
  return (
    <div>
      <div className="carousel w-full">
        {products.map((product, index) => (
          <div
            key={product._id}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <img
              src={product.photo}
              className="w-full h-[500px]"
              alt={`Product ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {products.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductSlide;
