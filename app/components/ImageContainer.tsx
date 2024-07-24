import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

interface ImageContainerProps {
  image?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handlerMouseEnter = () => {
    setMouseEnter(true);
  };
  const handlerMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <a href="https://www.instagram.com/caferilkeperu/" target="_blank" className="  overflow-hidden">
      <div
        className="aspect-square relative"
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <img
          src={`/assets/gallery-instagram/${image}.jpg`}
          alt=""
          className="object-cover object-center w-full h-full transition-all duration-500 hover:brightness-50"
        />
        {mouseEnter && (
          <FaInstagram
            className="rainbow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            size={25}
          />
        )}
      </div>
    </a>
  );
};

export default ImageContainer;
