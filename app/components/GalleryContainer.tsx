import React from "react";
import ImageContainer from "./ImageContainer";

const GalleryContainer = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center gap-4 px-5 md:px-9">
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "ravioli-yuca",
          "tartaleta-fresa",
          "tacu-tacu",
          "causa",
          "cafe-rilke",
          "estofado-vino",
          "biblioteca",
          "garden",
          "torta-chocolate",
          "pie-limon",
          "desayuno",
          "panadera"
        ].map((image, index) => (
          <div key={index} className="w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)]">
            <ImageContainer image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;