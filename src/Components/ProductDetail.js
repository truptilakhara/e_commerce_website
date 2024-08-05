import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.id);
  return <div></div>;
};

export default ProductDetail;
