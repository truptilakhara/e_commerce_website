import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "./ImageCarousel.js";

const ProductDetail = () => {
  const params = useParams();

  const [productdetails, setProductDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/${params.id}`);
      const json = await data.json();
      console.log(json);
      setProductDetails(json);
    };
    fetchData();
  }, [params.id]);

  const {
    category,
    description,
    _id,
    images,
    price,
    reviews,
    specifications,
    stock,
  } = productdetails;

  return (
    <div
      className="flex justify-evenly items-center relative top-[150px] w-[1000px] h-auto border "
      key={_id}
    >
      <div className="w-[500px]">
        <ImageCarousel images={images}></ImageCarousel>
      </div>
      <ul>
        <li>Category: {category}</li>
        <li>About the product: {description}</li>
        <li>{specifications?.dimensions}</li>
        <li>{specifications?.weight}</li>
        <li>{stock}</li>

        <li>{price}</li>
        <h1>Review</h1>
        {reviews?.map((review) => (
          <li>
            <h1>{review.user}</h1>
            <p>{review.comment}</p>
            <p>{review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
