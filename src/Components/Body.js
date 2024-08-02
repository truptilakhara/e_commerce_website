import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/products");
    const json = await data.json();
    console.log(json)
  };
  return <div>
    
  </div>;
};

export default Body;
