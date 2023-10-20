import { useLoaderData } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import ProductSlide from "../ProductSlide/ProductSlide";

const BrandProducts = () => {
  const products = useLoaderData();
  console.log(products);

  const brandName = products.length > 0 ? products[0].brandName : "";

  const brandProducts =
    products && products?.filter((product) => product.brandName === brandName);

  return (
    <div>
      <Navbar />
      {brandProducts.length > 0 ? (
        <div>
          <ProductSlide products={brandProducts} />
          <h1 className="text-3xl mt-14 mb-5 font-bold text-[#800] text-center">
            Popular Products by {brandName}: {brandProducts.length}
          </h1>
          <div className="grid md:grid-cols-2 gap-4 mt-14 mb-20 w-[80%] mx-auto">
            {brandProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-6xl text-[#800000] font-bold text-center">
          No products available.
        </p>
      )}
    </div>
  );
};

export default BrandProducts;
