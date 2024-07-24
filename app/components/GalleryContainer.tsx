import React from "react";
import ImageContainer from "./ImageContainer";

const GalleryContainer = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center gap-4 px-5 md:px-9">
      <div className="grid gap-4 grid-cols-3 md:grid-cols-6 place-content-center">
        <ImageContainer image="ravioli-yuca" />
        <ImageContainer image="garden" />
        <ImageContainer image="cafe-rilke" />
        <ImageContainer image="panadera" />
        <ImageContainer image="estofado-vino" />
        <ImageContainer image="desayuno" />
      </div>

      <div className="grid gap-4 grid-cols-3 md:grid-cols-6 place-content-center">
        <ImageContainer image="pie-limon" />
        <ImageContainer image="tartaleta-fresa" />
        <ImageContainer image="torta-chocolate" />
        <ImageContainer image="almuerzo-frejoles" />
        <ImageContainer image="tacu-tacu" />
        <ImageContainer image="biblioteca" />
      </div>
    </div>
  );
};

export default GalleryContainer;
