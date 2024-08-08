import React from "react";
import CardSlider from "../components/CardSlider";
import { GiLaurelCrown } from "react-icons/gi";

const BestSellers = () => {
  return (
    <div className="pb-12 lg:pb-16">
      <div className="text-center py-20">
        <h1 className="py-3 md:py-1 text-xs font-semibold text-[#172026] lg:text-xs lg:leading-7 tracking-[0.25em] md:tracking-[0.15em] font-rilke-monecias">
          DESDE EL BOSQUE DE DIANA
        </h1>
        <div className="flex justify-center">
          <GiLaurelCrown size={40} className="text-rilke-red" />
        </div>
        <h1 className=" text-2xl  text-[#172026] lg:text-[42px] lg:leading-[58px] text-center pb-10 font-rilke-monecias">
          Los BestSellers
        </h1>
      </div>
      <CardSlider />
    </div>
  );
};

export default BestSellers;
