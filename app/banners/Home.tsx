'use client'
import React, { useEffect, useState } from 'react';

export function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen" id="home">
      <div 
        className="relative flex h-full w-full justify-center bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/home-cafe-2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: `center ${scrollPosition * 0.5}px`
        }}
      >
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
    </div>
  );
}