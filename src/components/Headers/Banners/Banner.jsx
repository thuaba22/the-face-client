import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div className="hero container md:h-[500px] bg-[#FFFFCC]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/sXDbCRhg/hero-removebg-preview.png"
          className="md:h-[483px]"
        />
        <div data-aos="zoom-in-up">
          <h1 className="text-5xl text-[#800] font-bold">
            Everything You Need
          </h1>
          <p className="py-6 text-[#800]">
            Discover a world of beauty and self-expression at TheFace. From
            exquisite skincare to vibrant makeup, we have everything you need to
            enhance your natural radiance and embrace your unique style. Our
            carefully curated collection of cosmetics is designed to empower and
            inspire you. Indulge in a world of possibilities, where beauty knows
            no bounds. Start your journey with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
