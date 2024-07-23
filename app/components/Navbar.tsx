"use client";
import Image from "next/image";
import logoCafe from "../../public/assets/logo-cafe.png";
import logoBlack from "../../public/assets/logo-black.png";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { useEffect, useLayoutEffect, useState } from "react";

const navLinks = [
  { name: "Home", href:'#home' },
  { name: "Acerca", href:'#acerca' },
  { name: "Carta", href:'#carta' },
  { name: "Galeria", href:'#galeria' },
  { name: "Testimonios", href:'#testimonios' },
  { name: "Evento", href:'#evento' },
  { name: "Contacto", href:'#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [enterMouse, setEnterMouse] = useState(false)

  useLayoutEffect(() => {
    // Set initial state based on current scroll position
    setScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onEnterHandler = () =>{setEnterMouse(true)}
  const onLeaveHandler = () =>{setEnterMouse(false)}

  return (
    <>
      <nav className="hidden lg:flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-0 lg:px-0 lg:py-0">
        <div
          className={` lg:flex items-center justify-between fixed z-10 top-0 w-full px-20 lg:gap-48 ${ enterMouse && 'hover:bg-white '} ${
            scrolled ? "bg-white text-black border-b" : "text-white hover:text-black"
          }`}
          onMouseEnter={onEnterHandler}
          onMouseLeave={onLeaveHandler}
        >
          <Image
            src={scrolled || enterMouse ? logoBlack : logoCafe}
            alt="Logo"
            className={"w-8 h-8 lg:w-40 lg:h-20"}
          />

          <div className="hidden lg:flex pl-[74px] gap-x-[40px] italic">
            {navLinks.map((item, index) => (
              <a className=" -tracking-tighter font-extralight" key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-x-5 lg:hidden">
          <Image src={Menu} alt="Menu Button" className="lg:hidden bg-black" />
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

      <nav className=" lg:hidden w-full items-center justify-between mt-[-16px]  lg:container lg:mx-0 lg:px-0 lg:py-0 ">
        <div
          className={` flex items-center justify-between fixed z-10 top-0 w-full py-2  px-6 lg:px-0 text-white    ${
            scrolled &&
            "bg-white text-black border-b-2 border-b-[#E0E0E0] border-opacity-80"
          }`}
        >
          <div>
            <Image
              src={scrolled ? logoBlack : logoCafe}
              alt="Logo"
              className={scrolled ? "w-24 h-15" : "w-24 h-15"}
            />
          </div>
          <div className="">
            <div className="hidden lg:flex  gap-x-[56px]">
              {navLinks.map((item, index) => (
                <a className=" font-medium" key={index} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex gap-x-5 lg:hidden">
              <Image src={Menu} alt="Menu Button" className="lg:hidden " />
            </div>
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
    </>
  );
}
