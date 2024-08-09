"use client";
import React, { useEffect, useState } from "react";

export function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const parallaxShift = scrollPosition * 0.5;
  return (
    <div className="h-screen relative overflow-hidden" id="home">
      <div className="h-full w-full relative">
        <div
          className="absolute w-full h-full"
          style={{
            transform: `translateY(${parallaxShift}px)`,
          }}
        >
          <img
            src="/assets/home-cafe-2.jpg"
            alt="Parallax Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt="White Logo"
            className="h-auto w-fit mx-auto px-3"
          />
          <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
            alt="Cafe Logo"
            className="mx-auto mt-4"
          />
        </div>
      </div>

      {/* <div className="hidden lg:block h-screen" id="home">
        <div
          className="relative flex h-full w-full justify-center bg-fixed bg-cover bg-center bg-no-repeat safari-fix"
          style={{ backgroundImage: "url('/assets/home-cafe-2.jpg')" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <img
              src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
              alt=""
              className=" h-full w-fit mx-auto px-3 "
            />
            <img
              src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
              alt=""
              className=" mx-auto mt-4  "
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
