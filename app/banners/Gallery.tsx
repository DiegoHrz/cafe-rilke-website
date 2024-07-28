"use client";

import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import cafe from "../../public/assets/gallery-instagram/cafe-y-postre.jpg";
import GalleryContainer from "../components/GalleryContainer";
import { IoRoseSharp } from "react-icons/io5";

export function Gallery() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:px-[30px] lg:flex-row lg:gap-x-6" id='galeria'>
      <div className="w-full  lg:py-[32px] ">
        <div className="flex flex-col justify-center items-center py-10 md:py-14">
          <h1 className="py-3 md:py-1 text-xs font-semibold text-[#172026] lg:text-xs lg:leading-[28px] tracking-[0.25em] md:tracking-[0.5em] font-rilke-theme">
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
