const ProductList = ({ items }) => {
  const { name, price, images, id } = items;
  return (
    <div key={id}>
      <ul>
        <li>
          {images.map((image) => (
            <img src={image} className="h-[250px] w-[250px]" alt="thermo-img"></img>
          ))}
        </li>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

export default ProductList;
