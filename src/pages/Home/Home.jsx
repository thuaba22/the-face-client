import { useLoaderData } from "react-router-dom";
import Features from "../../components/Features/Features";
import Banner from "../../components/Headers/Banners/Banner";
import Navbar from "../../components/Headers/Navbar/Navbar";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <div className="mt-[120px] mb-10">
        <h5 className="text-[20px] text-center mt-2">--- Indulge & Glow ---</h5>
        <h2 className="text-[45px] text-center text-[#800]">
          Our Popular Brands
        </h2>
      </div>
      <Brands brands={brands}></Brands>
    </div>
  );
};

export default Home;
