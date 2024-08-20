"use client";
import Image from "next/image";
import Check from "../../public/assets/check.svg";
import { useEffect, useState } from "react";
import carta1 from "../../public/assets/menu/carta-01.jpeg";
import carta2 from "../../public/assets/menu/carta-02.jpeg";
import carta3 from "../../public/assets/menu/carta-03.jpeg";
import carta4 from "../../public/assets/menu/carta-04.jpeg";
import carta5 from "../../public/assets/menu/carta-05.jpeg";
import carta6 from "../../public/assets/menu/carta-06.jpg";
import dynamic from "next/dynamic";

import Ebook from "../components/Ebook";
import ScrollIndicator from "../components/ScrollIndicator";



const Flipbook = dynamic(() => import("../components/Flipbook"), {
  ssr: false,
});

export function Menu() {
  return (
    <div className="py-[48px] lg:py-[60px] " id="carta">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px] pb-3 font-rilke-monecias">
        Carta
      </h1>
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px] pb-3 font-rilke-monecias">
        Cafes y Panes
      </h1>
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px] pb-16 font-rilke-monecias">
        Comidas y Cocteles
      </h1>

      {/* <ScrollIndicator /> */}

      <Flipbook />

      <Ebook />
    </div>
  );
}
