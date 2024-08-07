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
    <div className="max-w-6xl mx-auto flex flex-col justify-center gap-4 px-5 md:px-9">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 1 },
          768: { slidesPerView: 5, spaceBetween: 15 },
        }}
        className="slider overflow-visible w-full flex flex-wrap justify-center gap-4"
      >
        {users.map((user, index) => (
          // <div
          //   key={index}
          //   className="w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] border-red-500 border-4 aspect-square bg-red-500"
          // >
          <SwiperSlide
            key={index}
            className="card-item  flex flex-col items-center justify-center rounded-lg backdrop-blur-md bg-white  relative border-red-500 border-4 w-[calc(33.333%-1rem)] md:w-[calc(16.666%-1rem)] "
            //   style={{
            //     aspectRatio: '1/1.3'
            // }}
          >
            <div>
              <img
                src={user.image}
                alt={user.name}
                className=" rounded-full   p-1  border-green-500 border-4"
              />
            </div>
            <div className="border-2 border-purple-500">
              <h2 className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-10 sm:mt-14 md:mt-24 text-center px-2">
                {user.name}
              </h2>
            </div>
            <div className="border-2 border-blue-500">
              <p className="text-[#B3B3B3] text-xs sm:text-sm font-medium mt-1 sm:mt-2 mb-3 sm:mb-4 md:mb-6 text-center px-2">
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
