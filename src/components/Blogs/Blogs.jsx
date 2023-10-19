import { FaCalendar } from "react-icons/fa";
const Blogs = () => {
  return (
    <div className="container bg-[#FFFFCC] md:h-[470px]">
      <div className="flex flex-col items-center justify-center h-full my-auto md:flex-row gap-4">
        <div className="space-y-3 text-[#800]">
          <img src="https://i.postimg.cc/FzKS4PY2/blog1.png" alt="" />
          <h3 className="font-extrabold">COOL GIRL WITH TATOO</h3>
          <p className="text-[#800]">
            <FaCalendar className="inline mr-2"></FaCalendar>20 - Jul
          </p>
          <p>
            Explore the captivating world <br />
            how tattoos add
          </p>
          <p className="hover:underline">Read More</p>
        </div>
        <div className="space-y-3 text-[#800]">
          <img src="https://i.postimg.cc/rmV01hNK/blog2.png" alt="" />
          <h3 className="font-extrabold">BLOG IMAGE POST</h3>
          <p className="text-[#800]">
            <FaCalendar className="inline mr-2"></FaCalendar>20 - Jul
          </p>
          <p>
            Explore the captivating world <br />
            how tattoos add
          </p>
          <p className="hover:underline">Read More</p>
        </div>
        <div className="space-y-3 text-[#800]">
          <img src="https://i.postimg.cc/fTp9GfDr/blog3.png" alt="" />
          <h3 className="font-extrabold">BLOG AUDIO POST</h3>
          <p className="text-[#800]">
            <FaCalendar className="inline mr-2"></FaCalendar>20 - Jul
          </p>
          <p>
            Explore the captivating world <br />
            how tattoos add
          </p>
          <a className="hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
