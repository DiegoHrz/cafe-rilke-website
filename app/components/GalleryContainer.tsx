import React from "react";
import ImageContainer from "./ImageContainer";

const GalleryContainer = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center gap-4 px-5 md:px-9">
      <div className="grid gap-4 grid-cols-3 md:grid-cols-6 place-content-center">
        <ImageContainer image="ravioli-yuca" />
        <ImageContainer image="tartaleta-fresa" />
        <ImageContainer image="tacu-tacu" />
        <ImageContainer image="causa" />
        <ImageContainer image="cafe-rilke" />
        <ImageContainer image="estofado-vino" />
      </div>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-6 place-content-center">
        <ImageContainer image="biblioteca" />
        <ImageContainer image="garden" />
        <ImageContainer image="torta-chocolate" />
        <ImageContainer image="pie-limon" />
        <ImageContainer image="desayuno" />
        <ImageContainer image="panadera" />
      </div>
    </div>
  );
};

export default GalleryContainer;
