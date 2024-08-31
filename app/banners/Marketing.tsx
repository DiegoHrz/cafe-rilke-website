import React from "react";
import { RiStarSFill } from "react-icons/ri";

// bg-gradient-to-br from-[#ECE2D2] via-[#f1f1f1] to-[#eed9b6]

const Marketing = () => {
  return (
    <div className="mx-auto w-[80%] mt-20">
      <div className="w-fit border-4 border-[#AA8A43] rounded-full mx-auto relative">
        <div className="w-fit border-4 border-[#77421A] rounded-full mx-auto">
          <div className="flex  flex-col   mx-auto justify-center py-3 md:py-5 px-6   lg:gap-0  landing-container rounded max-h-[18rem] aspect-square   max-w-[18rem] border-4 border-[#DDC47E]">
            <div className="flex flex-col  text-center md:pb-1 ">
              <p className="block  font-sans text-3xl md:text-2xl font-medium ">4.9</p>
              <div className="flex justify-center  ">
                <RiStarSFill className="text-rilke-red text-2xl" />
                <RiStarSFill className="text-rilke-red text-2xl" />
                <RiStarSFill className="text-rilke-red text-2xl" />
                <RiStarSFill className="text-rilke-red text-2xl" />
                <RiStarSFill className="text-rilke-red text-2xl" />
              </div>

              <p className=" font-serif text-2xl md:text-xl">reviews</p>
            </div>
            <div className=" text-center  text-[#282727] text-base md:text-base max-w-[30rem]  md:max-w-[50rem] mx-auto  ">
              <p className=" py-4">
                &apos;La inauguración del café propició el encuentro del arte,
                la música y la gastronomía&apos;
              </p>
              <a
                href="https://cosas.pe/vida-social/68622/cafe-rilke/"
                target="_blank"
                className="block w-fit mx-auto pb-2"
              >
                <img
                  src="/assets/cosas/cosas.png"
                  alt=""
                  className=" h-8 md:h-10 animation-opacity-infinite mx-auto    "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
