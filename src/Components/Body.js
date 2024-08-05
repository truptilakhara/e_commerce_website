import { useEffect, useState } from "react";
import ProductList from "./ProductList.js";

const Body = () => {
  const [productItems, setProductItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/products");
    const json = await data.json();
    console.log(json);
    setProductItems(json);
  };
  return (
    <div className="flex  flex-wrap justify-evenly  w-[1620px] absolute  top-[150px] ">
      {productItems.map((data) => (
        <ProductList items={data} key={data._id} />
      ))}
    </div>
  );
};

export default Body;
