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

//  GRADIENTE  bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500

//bg-[linear-gradient(180deg,_#e7dbdb_20%,_#d4c1c1_40%,_#d2c8c8_60%,_#f7f7f7_95%,_#fff_100%)]

export function Menu() {
  return (
    <div
      className="pt-[8.6rem] pb-[2rem] lg:pt-[100px] lg:pb-[10px]   "
      id="carta"
    >
      <h1 className="text-[#7b6c6c] text-center font-medium  text-6xl lg:text-5xl pb-12 font-rilke-monecias">
        Carta
      </h1>
      <div className=" text-center font-medium  text-lg lg:text-xl text-[#7b6c6c] pb-3  px-10 sm:px-24 lg:max-w-[72rem] mx-auto ">
        En Café Rilke, los sabores de Alemania y Perú se fusionan en cada plato.
        En nuestra panadería, los aromas de panes recién horneados y bebidas
        artesanales te envuelven en una experiencia única.
        <p className="mt-4">
          También Puedes ingresar a la Carta en PDF{" "}
          <a
            href="assets/menu/carta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hover:underline underline text-blue-400"
          >
            aquí
          </a>
        </p>
      </div>

      {/* <ScrollIndicator /> */}

      {/* mobile */}
      <Flipbook />
      {/* desktop */}
      <Ebook />
    </div>
  );
}
