import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlenext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleprev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative w-[220px] overflow-hidden ">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 200}px)` }}
      >
        {images?.map((image, index) => (
          <img
            src={image}
            key={index}
            className="h-[250px] "
            alt="thermo.png"
          ></img>
        ))}
      </div>
      <button
        onClick={handleprev}
        className="absolute top-1/2 -left-1 z-20 p-1 transform -translate-y-1/2"
      >
        ◀
      </button>
      <button
        onClick={handlenext}
        className="absolute top-1/2 -right-1 p-1 transform -translate-y-1/2 "
      >
        ▶
      </button>
    </div>
  );
};

export default ImageCarousel;
