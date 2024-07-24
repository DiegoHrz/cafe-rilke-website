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
    <a href="" className="  overflow-hidden">
      <div
        className="w-full h-full relative z-10"
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <img
          src={`/assets/gallery-instagram/${image}.jpg`}
          alt=""
          className="object-cover object-center w-full h-full transition-all duration-500 hover:brightness-50  "
        />
        {mouseEnter && (
          <FaInstagram
            className="z-50 rainbow absolute top-16 right-20"
            size={25}
          />
        )}
      </div>
    </a>
  );
};

export default ImageContainer;
