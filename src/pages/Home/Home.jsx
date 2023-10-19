import Features from "../../components/Features/Features";
import Banner from "../../components/Headers/Banners/Banner";
import Navbar from "../../components/Headers/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
};

export default Home;
