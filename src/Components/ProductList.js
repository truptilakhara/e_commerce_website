import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel.js";

const ProductList = ({ items }) => {
  const { name, price, images, _id } = items;

  return (
    <div key={_id} className="w-[310px] h-[320px] mt-5 border shadow-md">
      <ul>
        <li className="relative left-[40px] top-2">
          <ImageCarousel images={images}></ImageCarousel>
        </li>
        <Link to={"/"+ _id}>
          <li className="relative left-[40px] top-3 text-[18px] font-semibold">
            {name}
          </li>
        </Link>{" "}
        <li className="text-lg font-bold  relative left-[40px] top-2">
          ₹{price}
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
