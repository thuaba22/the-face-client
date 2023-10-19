import { useLoaderData } from "react-router-dom";
import Navbar from "../Headers/Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";

const BrandProducts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-6xl text-center">
        Popular Products: {products.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-14 w-[80%] mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
