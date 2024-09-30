"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const users = [
    {
      name: "Cheesecake con naranja china",
      details: "Cremoso cheesecake con naranjas chinas confitadas.",
      image: "/assets/best-sellers/cheesecake-con-naranja-china.png",
    },
    {
      name: "Crocante de Fruta",
      details: "Crujiente cake con frutas de estación",
      image: "/assets/best-sellers/crocante-de-fruta.png",
    },
    {
      name: "Croissant",
      details: "Crujiente por fuera y mantequilloso por dentro",
      image: "/assets/best-sellers/croissant.png",
    },
    {
      name: "Frankenlaib ",
      details: "Pan crocante de harina de centeno y hojuelas de avena",
      image: "/assets/best-sellers/frankenlaib.png",
    },

    {
      name: "Grissini",
      details: "Palitos de pan crujientes, perfectos para picar.",
      image: "/assets/best-sellers/grissini.png",
    },
    {
      name: "Miraflorinos",
      details: "Deliciosas galletas con frutas confitadas, almendras y chocolate",
      image: "/assets/best-sellers/miraflorinos.png",
    },
    {
      name: "Muffin de Manzana",
      details: "Esponjoso muffin con trozos de manzana y un toque de canela.",
      image: "/assets/best-sellers/muffin-de-manzana.png",
    },
    {
      name: "Pie de Limón",
      details: "Base crocante con crema de limón y merengue dorado.",
      image: "/assets/best-sellers/pie-de-limon.png",
    },
    {
      name: "Schwarzbrot",
      details: "Pan negro de centeno, linaza, ajonjolí, semillas de girasol y chancaca",
      image: "/assets/best-sellers/schwarzbro.png",
    },
    {
      name: "Strudel de Manzana",
      details: "Hojaldre relleno de manzanas especiadas y canela.",
      image: "/assets/best-sellers/strudel-de-manzana.png",
    },

    // {
    //   name: "Quinoto ",
    //   details: "Guiso de Quinua blanca con vegetales rostizados",
    //   image: "/assets/best-sellers/dish5-min.png",
    // },


    {
      name: "Trenza de Leche",
      details: "Masa dulce y suave con sabor a leche, ideal para acompañar.",
      image: "/assets/best-sellers/trenza-de-leche.png",
    },
    {
      name: "Cake de Naranja",
      details: "Jugoso Cake con jugo de naranja natural",
      image: "/assets/best-sellers/cake-de-naranja.png",
    },
  ];

  const handleClickHover = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (
        target &&
        activeIndex !== null &&
        !target.closest(".image-container")
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeIndex]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = users.map((user) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = user.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false); // Set loading to false even if there's an error, to avoid infinite loading state
      }
    };

    loadImages();

    // ... (rest of the useEffect logic)
  }, [activeIndex]);

  if (isLoading) {
    return; // Or any loading indicator you prefer
  }

  return (
    <div className="max-w-full mx-auto flex flex-col justify-center gap-4">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 30 },
          800: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 4, spaceBetween: 80 },
        }}
        className="slider overflow-visible w-full flex flex-wrap justify-center gap-4 lg:rounded-3xl"
      >
        {users.map((user, index) => (
          <SwiperSlide
            key={index}
            className="card-item flex flex-col justify-center items-center rounded backdrop-blur-md relative w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] mb-10 mt-4 levatate-effect"
          >
            <div
              className="relative  "
              onClick={() => handleClickHover(index)}
            >
              <img
                src={user.image}
                alt={user.name}
                className={`hidden sm:block rounded-full h-[85%] w-[85%]  mx-auto bg-gradient-radial z-50  md:hover:scale-[1.15] transform duration-500  hover:scale-125 relative`}
                // style={{
                //   boxShadow: "inset 0px 0px 60px -40px red"
                // }}
                // shadow-[10px_10px_50px_rgba(0,0,0,1)]
              />
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[70%] w-[50%] sm:h-[80%] sm:w-[60%] bg-transparent rounded-full"
                style={{ boxShadow: "-3px 5px 15px 5px rgba(0, 0, 0, 1)" }}
              ></div>
              {/* <div
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[85%] w-[85%] bg-transparent rounded-full"
                style={{ boxShadow: "inset 0 0 25px 15px rgba(0, 0, 0, 0.6)" }}
              ></div> */}
              <img
                src={user.image}
                alt={user.name}
                className={`block sm:hidden rounded-full h-[85%] w-[85%] max-h-full max-w-full mx-auto bg-gradient-radial z-50 transform duration-500 ${
                  activeIndex === index ? "scale-125" : ""
                }`}
              />
            </div>
            <div className="h-16 flex justify-center items-center">
              <h2 className="text-black text-lg md:text-xl lg:text-[1rem] font-serif  text-center px-1">
                {user.name}
              </h2>
            </div>
            <div className="h-16 pt-2 mb-8 sm:mb-4 px-1">
              <p className="text-[#9a9999] text-sm font-light sm:font-black text-center">
                {user.details}
              </p>
            </div>
            <div className="border-x mb-6 flex justify-center items-center">
              <a
                className="rounded-[0.25rem] text-xs sm:text-sm md:text-lg px-3 sm:px-4 py-1 sm:py-2 font-medium cursor-pointer border border-rilke-red transition-all duration-1000 bg-rilke-red hover:scale-110 hover:shadow-red-700 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] text-white font-sans w-4/6 animate-custom-pulse hover:font-black text-center"
                href={`https://wa.me/913441311?text=Hola%20que%20tal%20vengo%20de%20cafe-rilke.com%20quisiera%20hacer%20un%20pedido%20de%20${user.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pidelo
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
        <div className="swiper-button-next text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
