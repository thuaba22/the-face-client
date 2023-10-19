import { useLoaderData } from "react-router-dom";
import Features from "../../components/Features/Features";
import Banner from "../../components/Headers/Banners/Banner";
import Navbar from "../../components/Headers/Navbar/Navbar";
import Brands from "../../components/Brands/Brands";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutSubscribe from "../../components/AboutSubscribe/AboutSubscribe";
import Blogs from "../../components/Blogs/Blogs";

const Home = () => {
  const brands = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

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
      <div data-aos="zoom-in">
        <AboutSubscribe></AboutSubscribe>
      </div>

      <div className="mt-[120px] mb-10">
        <h2 className="text-[45px] text-center text-[#800]">From The Blog</h2>
      </div>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
