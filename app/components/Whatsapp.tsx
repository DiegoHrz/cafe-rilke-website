'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Pide Ya!';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => {
        if (prevText.length < fullText.length) {
          return fullText.slice(0, prevText.length + 1);
        }
        clearInterval(timer);
        return prevText;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const iconWidth = 130; // Ancho aproximado del icono + padding
      const textWidth = containerRef.current.scrollWidth - iconWidth;
      const newWidth = iconWidth + (textWidth * (text.length / fullText.length));
      containerRef.current.style.width = `${Math.max(iconWidth, newWidth)}px`;
    }
  }, [text]);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex justify-center items-center animate-custom-pulse-3">
      <a
        href="https://wa.me/913441311?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div 
          ref={containerRef}
          className="bg-[#47C755] text-white rounded-3xl text-xl px-3 py-2 relative transition-all duration-1000 ease-linear "
          style={{ width: '46px', height: '46px' }}
        >
          <div className="flex items-center gap-1 whitespace-nowrap h-full">
            <FaWhatsapp color="white" size={30} />
            <span className="font-sans">{text}</span>
          </div>
          <div
            className="absolute -bottom-2 left-[83%] -translate-x-1/2 -translate-y-1/2 rotate-90"
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid #47C755",
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;