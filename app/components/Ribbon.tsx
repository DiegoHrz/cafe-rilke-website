import React from "react";

interface ribbonProps {
  text?: string;
}

const Ribbon: React.FC<ribbonProps> = ({ text = "Default text" }) => {
  return (
    <div className="ribbon-outer   relative max-w-[70rem]  shadow-2xl border-4 rounded-lg border-[#F8F8F8] ">
        <a href="https://cosas.pe/vida-social/68622/cafe-rilke/"
        target="_blank">

        
      <div className="ribbon-left "></div>
      <div className="ribbon-right"></div>
      <span className="flex justify-center items-center h-full text-white px-1 text-sm sm:text-base flex-col gap-2 ">
        {text}
        <div
        
        className="block w-fit mx-auto pb-1 sm:pb-2"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/cosas/cosas.png"
          alt=""
          className=" h-5 sm:h-8 md:h-10 animation-opacity-infinite mx-auto "
        />
      </div>
      </span>
      </a>
    </div>
  );
};

export default Ribbon;
