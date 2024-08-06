import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Marketing = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-full justify-center py-9 md:py-20 px-6 gap-6 lg:gap-0  animate-fade-title">
      <div className="flex flex-col  text-center md:text-left">

        <div className="flex justify-center md:justify-normal py-3">
          <RiStarSFill className="text-rilke-red text-2xl" />
          <RiStarSFill className="text-rilke-red text-2xl" />
          <RiStarSFill className="text-rilke-red text-2xl" />
          <RiStarSFill className="text-rilke-red text-2xl" />
          <RiStarSFill className="text-rilke-red text-2xl" />
        </div>

        <div className="text-[#4D4D4D] text-4xl  md:text-4xl  md:min-w-48 font-semibold">
          <p className="hidden md:block text-[#4D4D4D] text-4xl  md:text-4xl  md:min-w-48 font-semibold">
            4.9-star
          </p>
          <p className="hidden md:block">reviews</p>
          <p className="block md:hidden" >4.9 reviews</p>
        </div>

      </div>
      <div className=" text-center  text-[#999999] text-xl md:text-2xl max-w-[30rem]  md:max-w-[50rem] mx-auto lg:mx-0 ">
        <p className="md:hidden pb-6">
          &apos;La inauguración del café propició el encuentro del arte, la
          música y la gastronomía&apos;
        </p>
        <a
          href="https://cosas.pe/vida-social/68622/cafe-rilke/"
          target="_blank"
          className="block w-fit mx-auto pb-5 md:pb-0"
        >
          <img
            src="/assets/cosas/cosas.png"
            alt=""
            className=" h-12 md:h-10 animation-opacity-infinite mx-auto    "
          />
        </a>
        <p className="hidden md:block mt-2">
          &apos;La inauguración del café propició el encuentro del arte, la
          música y la gastronomía&apos;
        </p>
      </div>
    </div>
  );
};

export default Marketing;
