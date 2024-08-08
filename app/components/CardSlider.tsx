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
      image: "/assets/best-sellers/best-seller-1.webp",
    },
    {
      name: "Lomo Saltado Rilke",
      profession: "Graphic Designer",
      image: "/assets/best-sellers/best-seller-1.webp",
    },
    {
      name: "Arroz con Pato",
      profession: "Project Manager",
      image: "/assets/best-sellers/best-seller-1.webp",
    },
    {
      name: "Fetuccini a la Huancaina con Lomo",
      profession: "Marketing Specialist",
      image: "/assets/best-sellers/best-seller-1.webp",
    },
    {
      name: "Quinoto ",
      profession: "Data Scientist",
      image: "/assets/best-sellers/best-seller-1.webp",
    },
    {
      name: "Richard Wilson",
      profession: "Product Designer",
      image: "/assets/best-sellers/best-seller-1.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center gap-4 ">
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
        className="slider overflow-visible w-full flex flex-wrap justify-center gap-4 shadow-[0_0_50px_rgba(0,0,0,0.25)] lg:rounded-3xl"
      >
        {users.map((user, index) => (
          // <div
          //   key={index}
          //   className="w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] border-red-500 border-4 aspect-square bg-red-500"
          // >
          <SwiperSlide
            key={index}
            className="card-item  flex flex-col justify-center items-center  rounded-3xl backdrop-blur-md   relative   w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] mb-10 mt-4"
            //   style={{
            //     aspectRatio: '1/1.3'
            // }}
          >
            <div>
              <img
                src={user.image}
                alt={user.name}
                className=" rounded-full"
              />
            </div>
            <div className=" h-24">
              <h2 className="text-black text-xl md:text-2xl lg:text-[1.2rem]  font-semibold  text-center px-2 ">
                {user.name}
              </h2>
            </div>
            <div className="border-2 border-blue-500 h-14">
              <p className="text-[#B3B3B3] text-xs sm:text-sm font-medium text-center px-2">
                {user.profession}
              </p>
            </div>
            <div className="border-2 border-yellow-500">
              <button className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2 text-white rounded-md font-medium cursor-pointer border border-transparent transition-all duration-200 hover:bg-white/10 hover:border-white hover:text-white font-sans bg-rilke-red animate-custom-pulse">
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
