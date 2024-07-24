import React from "react";

interface ImageContainerProps {
  image?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  return (
    <a href="" className="  overflow-hidden">
      <div className="w-full h-full ">
        <img
          src={`/assets/gallery-instagram/${image}.jpg`}
          alt=""
          className="object-cover object-center w-full h-full hover:brightness-50 "
        />
      </div>
    </a>
  );
};

export default ImageContainer;
