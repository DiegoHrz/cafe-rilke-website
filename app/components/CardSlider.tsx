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
    <div className="flex items-center justify-center   py-12">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        grabCursor={true}
        spaceBetween={70}
        slidesPerView={"auto"}
        centeredSlides={true}
        // initialSlide={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
        }}
        className="slider overflow-visible max-w-7xl"
      >
        {users.map((user, index) => (
          <SwiperSlide
            key={index}
            className="card-item p-9 my-20 flex flex-col items-center justify-center rounded-lg backdrop-blur-md bg-white border  relative"
            style={{ width: "300px" }} // Fixed width for each slide
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-40 h-40 rounded-full mb-10 border-3 border-white p-1 absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <h2 className="text-black text-2xl font-semibold mt-10 text-center">
              {user.name}
            </h2>
            <p className="text-[#B3B3B3] text-sm font-medium mt-3 mb-10 text-center">
              {user.profession}
            </p>
            <button className="text-xl px-9 py-2.5 text-white rounded-md font-medium cursor-pointer border border-transparent transition-all duration-200 hover:bg-white/10 hover:border-white hover:text-white w-full font-sans bg-rilke-red animate-custom-pulse">
              Pidelo
            </button>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
        <div className="swiper-button-next text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
