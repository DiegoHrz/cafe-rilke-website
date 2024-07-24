"use client";

import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import cafe from '../../public/assets/gallery-instagram/cafe-y-postre.jpg'

export function Gallery() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:px-[30px] lg:flex-row lg:gap-x-6">
      <div className="w-full text-center lg:py-[32px] ">
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Galería
        </h1>
        <div className="max-w-6xl  md:w-full mx-auto  flex justify-center  ">
          <div className="grid gap-4 grid-cols-3 md:grid-cols-6  place-content-center h-40 ">
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full ">
                <img
                  src="/assets/gallery-instagram/garden.jpg"
                  alt=""
                  className="object-cover object-
                   w-full h-full"
                />
              </div>
            </a>
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/assets/gallery-instagram/ravioli-yuca.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </a>
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/assets/gallery-instagram/desayuno.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </a>
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/assets/gallery-instagram/ravioli-yuca.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </a>
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/assets/gallery-instagram/ravioli-yuca.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </a>
            <a href="" className="  overflow-hidden">
              <div className="w-full h-full">
                <img
                  src="/assets/gallery-instagram/ravioli-yuca.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </a>
            
          </div>
          <div className="grid grid-cols-6"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
