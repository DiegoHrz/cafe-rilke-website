"use client";
import Image from "next/image";
import logoCafe from "../../public/assets/logo-cafe.png";
import logoBlack from "../../public/assets/logo/logo-no-bg/logo-black-no-bg.png";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavStore } from "../../store/useNavStore";
import { IoIosMenu } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Acerca", href: "#acerca" },
  { name: "Carta", href: "#carta" },
  { name: "Galeria", href: "#galeria" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Evento", href: "#evento" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [enterMouse, setEnterMouse] = useState(false);
  const { currentSection, setSelectedTab, isLoading, setIsLoading } =
    useNavStore();
  const [clickHamburgerMenu, setClickHamburgerMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const tabHandler = (tab: string) => {
    setSelectedTab(tab.toLowerCase());
  };

  const tabAndToggle = (tab: string) => {
    toggleMenu();
    tabHandler(tab);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      if (window.scrollY > 0 && clickHamburgerMenu) {
        setTimeout(() => {
          setClickHamburgerMenu(false);
        }, 700);
        setMenuClass("animate-collapse-out");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clickHamburgerMenu]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const onEnterHandler = () => {
    setEnterMouse(true);
  };

  const onLeaveHandler = () => {
    setEnterMouse(false);
  };

  const toggleMenu = () => {
    if (clickHamburgerMenu) {
      setMenuClass("animate-collapse-out");
      setTimeout(() => {
        setClickHamburgerMenu(false);
      }, 500); // Duración de la animación de salida
    } else {
      setClickHamburgerMenu(true);
      setMenuClass("animate-collapse-in");
    }
  };

  return (
    <>
      <nav className="hidden md:flex w-full items-center justify-between px-[20px] py-[16px] md:container md:mx-0 md:px-0 md:py-0">
        <div
          className={`md:flex items-center justify-between fixed z-10 top-0 w-full md:py-2 md:px-10 lg:px-20 md lg:gap-4 md:gap-2 md:text-sm lg:text-base transition-colors duration-1000 ease-in-out ${
            enterMouse && "hover:bg-white "
          } ${
            scrolled
              ? "bg-white text-black shadow-border-b"
              : "text-white hover:text-black"
          }`}
          onMouseEnter={onEnterHandler}
          onMouseLeave={onLeaveHandler}
          style={{ transitionDuration: "1250ms" }}
        >
          <Image
            src={scrolled || enterMouse ? logoBlack : logoCafe}
            alt="Logo"
            className={"w-8 h-8 md:w-28 md:h-16"}
          />

          <div className="hidden md:flex pl-[74px] md:gap-x-[2rem] lg:gap-x-[40px] italic">
            {navLinks.map((item) => (
              <a
                className={`-tracking-tighter font-extralight hover:text-rilke-red ${
                  !isLoading && item.href.slice(1) === currentSection
                    ? "border-b-2 border-rilke-red text-rilke-red"
                    : ""
                }`}
                key={item.href}
                href={item.href}
                onClick={() => tabHandler(item.name)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <nav className="md:hidden w-full items-center justify-between mt-[-16px] md:container md:mx-0 md:px-0 md:py-0 py-2 relative">
        <div
          className={`flex items-center justify-between fixed z-10 top-0 w-full py-2 px-6 md:px-0 text-white ${
            (scrolled || clickHamburgerMenu) &&
            "bg-white text-black border-b-2 border-b-[#E0E0E0] border-opacity-80"
          }`}
        >
          <div>
            <Image
              src={scrolled || clickHamburgerMenu ? logoBlack : logoCafe}
              alt="Logo"
              className="w-24 h-15"
            />
          </div>

          <div className="flex gap-x-5 md:hidden">
            <IoIosMenu
              size={32}
              className="md:hidden text-rilke-red"
              onClick={toggleMenu}
            />
          </div>
          {clickHamburgerMenu && (
            <div
              className={`absolute top-[4.7rem] left-0 flex flex-col w-screen border gap-x-[56px] justify-center items-center bg-white text-black ${menuClass}`}
            >
              {navLinks.map((item) => (
                <a
                  className={`-tracking-tighter font-extralight hover:text-rilke-red py-[0.6rem] ${
                    !isLoading && item.href.slice(1) === currentSection
                      ? " text-rilke-red"
                      : ""
                  }`}
                  key={item.href}
                  href={item.href}
                  onClick={() => tabAndToggle(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

