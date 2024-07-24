import React from "react";
import ImageContainer from "./ImageContainer";

const GalleryContainer = () => {
  return (
    <div className="max-w-6xl  md:w-full mx-auto  flex flex-col justify-center gap-4  ">
      <div className="grid gap-4 grid-cols-3 md:grid-cols-6  place-content-center h-40 ">
        <ImageContainer image="ravioli-yuca" />
        <ImageContainer image="garden" />
        <ImageContainer image="cafe-rilke" />
        <ImageContainer image="panadera" />
        <ImageContainer image="estofado-vino" />
        <ImageContainer image="desayuno" />
      </div>

      <div className="grid gap-4 grid-cols-3 md:grid-cols-6  place-content-center h-40 ">
        <ImageContainer image="pie-limon" />
        <ImageContainer image="tartaleta-fresa" />
        <ImageContainer image="torta-chocolate" />
        <ImageContainer image="almuerzo-frejoles" />
        <ImageContainer image="tacu-tacu" />
        <ImageContainer image="biblioteca" />
      </div>
      <div className="grid grid-cols-6"></div>
    </div>
  );
};

export default GalleryContainer;
