"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlider = () => {
  const users = [
    {
      name: "Ensalada de Quinua",
      profession: "Software Developer",
      image: "/assets/best-sellers/dish1-min.png",
    },
    {
      name: "Lomo Saltado Rilke",
      profession: "Graphic Designer",
      image: "/assets/best-sellers/dish2-min.png",
    },
    {
      name: "Arroz con Pato",
      profession: "Project Manager",
      image: "/assets/best-sellers/dish3-min.png",
    },
    {
      name: "Fetuccini a la Huancaina con Lomo",
      profession: "Ingredientes Ingredientes Ingredientes Ingredientes Ingredientes Ingredientes",
      image: "/assets/best-sellers/dish4-min.png",
    },
    {
      name: "Quinoto ",
      profession: "Data Scientist",
      image: "/assets/best-sellers/dish5-min.png",
    },
    {
      name: "Richard Wilson",
      profession: "Product Designer",
      image: "/assets/best-sellers/dish6-min.png",
    },
  ];

  return (
    <div className="max-w-full mx-auto flex flex-col justify-center gap-4 ">
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
        className="slider overflow-visible w-full flex flex-wrap justify-center gap-4  lg:rounded-3xl"
      >
        {users.map((user, index) => (
          // <div
          //   key={index}
          //   className="w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] border-red-500 border-4 aspect-square bg-red-500"
          // >
          <SwiperSlide
            key={index}
            className="card-item  flex flex-col justify-center items-center  rounded backdrop-blur-md   relative   w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] mb-10 mt-4   levatate-effect"
            //   style={{
            //     aspectRatio: '1/1.3'
            // }}
          >
            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className=" rounded-full h-[85%] w-[85%] max-h-full max-w-full mx-auto bg-gradient-radial z-50 hover:scale-125 md:hover:scale-[1.15] transform duration-500 "
                // shadow-[10px_10px_50px_rgba(0,0,0,1)] 
              />
              {/* <div className="absolute h-full w-full border-t border-x top-1/2 -z-10 rounded-t-xl"></div> */}
            </div>
            <div className="   h-16 flex justify-center items-center ">
              <h2 className="text-black text-xl md:text-2xl lg:text-[1.2rem]  font-bold  text-center px-1 ">
                {user.name}
              </h2>
            </div>
            <div className=" h-16 pt-2">
              <p className="text-[#858484] text-[50%] sm:text-sm font-medium text-center ">
                {user.profession}
              </p>
            </div>
            <div className="border-x mb-3  flex justify-center items-center">
              <button className="text-xs sm:text-sm md:text-lg px-3 sm:px-4 py-1 sm:py-2  font-medium cursor-pointer border border-rilke-red transition-all duration-1000 bg-rilke-red hover:scale-110 hover:shadow-red-700  hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] text-white font-sans w-4/6 animate-custom-pulse hover:font-black">
                Pidelo
              </button>
            </div>
          </SwiperSlide>
          // </div>
        ))}
        <div className="swiper-button-prev text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
        <div className="swiper-button-next text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
