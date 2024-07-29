"use client";

import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import cafe from "../../public/assets/gallery-instagram/cafe-y-postre.jpg";
import GalleryContainer from "../components/GalleryContainer";
import { IoRoseSharp } from "react-icons/io5";

export function Gallery() {
  return (
    <div className="flex flex-col w-full py-12 lg:py-[3.75rem] lg:px-[1.875rem] lg:flex-row lg:gap-x-6" id='galeria'>
      <div className="w-full  lg:py-8 ">
        <div className="flex flex-col justify-center items-center py-10 md:py-14">
          <h1 className="py-3 md:py-1 text-xs font-semibold text-[#172026] lg:text-xs lg:leading-7 tracking-[0.25em] md:tracking-[0.5em] font-rilke-monecias">
              INSTAGRAM
          </h1>
          <div>
            <IoRoseSharp  className="text-rilke-red" />
          </div>
        </div>
        <GalleryContainer />
      </div>
    </div>
  );
}
