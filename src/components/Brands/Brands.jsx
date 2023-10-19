import PropTypes from "prop-types";
import Brand from "../Brand/Brand";

const Brands = ({ brands }) => {
  return (
    <div className="container  max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands?.map((brand) => (
          <Brand key={brand.brand_id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
