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
    <div className="py-[48px] lg:py-[50px]" id="carta">
      <h1 className="text-[#172026] text-center font-medium  text-4xl lg:text-4xl pb-12 font-rilke-monecias">
        Carta
      </h1>
      <p className=" text-center font-medium  text-lg lg:text-2xl text-[#666666] pb-3  px-10 sm:px-24 lg:max-w-[72rem] mx-auto">
      En Café Rilke, los sabores de Alemania y Perú se fusionan en cada plato. En nuestra panadería, los aromas de panes recién horneados y bebidas artesanales te envuelven en una experiencia única.
      </p>

      {/* <ScrollIndicator /> */}

      <Flipbook />

      <Ebook />
    </div>
  );
}
