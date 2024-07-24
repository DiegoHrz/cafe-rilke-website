"use client";

import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import cafe from "../../public/assets/gallery-instagram/cafe-y-postre.jpg";
import GalleryContainer from "../components/GalleryContainer";

export function Gallery() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:px-[30px] lg:flex-row lg:gap-x-6">
      <div className="w-full text-center lg:py-[32px] ">
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Galería
        </h1>
        <GalleryContainer />

        
      </div>
    </div>
  );
}
