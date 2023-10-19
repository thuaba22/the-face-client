import { FaTruck } from "react-icons/fa";
const Features = () => {
  return (
    <div className="container mt-10 md:mt-0 flex items-center bg-white h-[150px]">
      <div className="w-[80%] mx-auto space-y-3 md:space-y-0 justify-between md:flex items-center">
        <div className="flex items-center gap-3">
          <FaTruck className="text-[30px]"></FaTruck>
          <div>
            <h3 className="text-[20px]">FREE SHIPPING WORLDWIDE</h3>
            <p className="text-[13px] text-[#1B1A1A]">on order over $200</p>
          </div>
          <hr className="border-2 border-[#800000] h-[50px]" />
        </div>

        <div className="flex items-center gap-3">
          <img
            className="w-[30px]"
            src="https://i.postimg.cc/59H1MC5Q/rotating-arrow-to-the-right.png"
            alt=""
          />
          <div>
            <h3 className="text-[20px] text-[#331A15]">30 DAYS FREE RETURN</h3>
            <p className="text-[13px] text-[#1B1A1A]">money back guarantee</p>
          </div>
          <hr className="border-2 border-[#800000] h-[50px]" />
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-[30px]"
            src="https://i.postimg.cc/m2RdSxrZ/like.png"
            alt=""
          />
          <div>
            <h3 className="text-[20px] text-[#331A15]">MEMBER SAFE SHOPPING</h3>
            <p className="text-[13px] text-[#1B1A1A]">
              safe shopping guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
