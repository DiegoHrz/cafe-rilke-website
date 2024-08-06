import React from "react";
import CardSlider from "../components/CardSlider";

const BestSellers = () => {
  return (
    <div className="pt-16">
      <div className="text-center">
        <h1 className="py-3 md:py-1 text-xs font-semibold text-[#172026] lg:text-xs lg:leading-7 tracking-[0.25em] md:tracking-[0.15em] font-rilke-monecias">
          DESDE EL BOSQUE DE DIANA
        </h1>
        <h1 className=" text-2xl  text-[#172026] lg:text-[42px] lg:leading-[58px] text-center pb-10 font-rilke-monecias">
          Los BestSellers
        </h1>
      </div>
      <CardSlider />
    </div>
  );
};

export default BestSellers;
