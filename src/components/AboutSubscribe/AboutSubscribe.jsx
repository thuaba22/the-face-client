import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
const AboutSubscribe = () => {
  return (
    <div className="container  max-w-6xl mx-auto mt-20 mb-20 md:h-[400px]  rounded-xl">
      <div className="flex h-full md:flex-row gap-4">
        <div className="border-8 flex-1 p-10 text-center space-y-6 border-[#FFFFCC]">
          <h2 className="font-extrabold text-3xl text-[#800]">
            GET 10% DISCOUNT
          </h2>
          <p className="text-[#800]">
            Subcribe to the TheFace mailing list to receive update on mnew
            arrivals, special offers and other discount information.
          </p>
          <input
            type="email"
            className="input input-bordered rounded-none w-full"
          />
          <br />
          <button className="btn bg-[#800] hover:bg-[#800] text-white">
            SUBSCRIBE
          </button>
        </div>
        <div className="border-8 flex-1 p-10 text-center space-y-6 border-[#FFFFCC]">
          <h2 className="font-extrabold text-3xl text-[#800]">ABOUT US</h2>
          <p className="text-[#800]">
            Welcome to TheFace, where beauty meets innovation. We&#39;re
            dedicated to providing high-quality cosmetics that empower and
            enhance your natural beauty. Explore our collection and discover
            your unique allure.
          </p>
          <hr className="border border-gray-100 w-full" />
          <div className="flex justify-center gap-6 text-[#800]">
            <FaTwitter /> <FaFacebook /> <FaGoogle /> <FaPinterest />{" "}
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSubscribe;
