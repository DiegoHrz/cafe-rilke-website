"use client";
import Image from "next/image";
import logoCafe from "../../public/assets/logo-cafe.png";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home" },
  { name: "Acerca" },
  { name: "Carta" },
  { name: "Galeria" },
  { name: "Testimonios" },
  { name: "Evento" },
  { name: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    // filter: 'brightness(111%) invert(1)',
  };

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-0 lg:px-0 lg:py-0">
      <div
        className={`flex items-center justify-center fixed z-10 top-0 w-full border-red-500 border text-white lg:gap-48 ${
          scrolled && "bg-white text-black"
        }`}
      >
        <Image src={logoCafe} alt="Logo" style={styles} className="w-8 h-8 lg:w-40 lg:h-20" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className=" font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium  pr-[56px]"></p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block"></span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div> */}
    </nav>
  );
}
