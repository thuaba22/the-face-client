import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_id, brand_name, brand_image } = brand || {};

  return (
    <div className="w-[80%] mx-auto md:w-full">
      <Link to={`/brands/${brand_name}`}>
        <div className="card bg-white shadow-xl">
          <figure>
            <img className="w-full h-[200px]" src={brand_image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#800]">
              {brand_name}
              <div className="badge bg-[#800] text-white border-none badge-secondary">
                POPULAR
              </div>
            </h2>
            <p className="text-[#800]">Discover Your Signature Look</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Beauty</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
