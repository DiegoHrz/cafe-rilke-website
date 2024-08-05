'use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CardSlider = () => {
  const users = [
    { name: "James Wilson", profession: "Software Developer", image: "/images/img-1.jpg" },
    { name: "Sarah Johnson", profession: "Graphic Designer", image: "/images/img-2.jpg" },
    { name: "Michael Brown", profession: "Project Manager", image: "/images/img-3.jpg" },
    { name: "Emily Davis", profession: "Marketing Specialist", image: "/images/img-4.jpg" },
    { name: "Christopher Garcia", profession: "Data Scientist", image: "/images/img-5.jpg" },
    { name: "Richard Wilson", profession: "Product Designer", image: "/images/img-6.jpg" },
  ];

  useEffect(() => {
    // Add background image to body
    document.body.style.backgroundImage = "url('/images/bg.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor = "#030728";

    // Cleanup function
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen font-montserrat">
      <div className="container max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="slider-wrapper overflow-hidden mb-14"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index} className="card-item p-9 flex flex-col items-center justify-center rounded-lg backdrop-blur-md bg-white/20 border border-white/50">
              <img src={user.image} alt={user.name} className="w-40 h-40 rounded-full mb-10 border-3 border-white p-1" />
              <h2 className="text-white text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-200 text-lg font-medium mt-3 mb-10">{user.profession}</p>
              <button className="text-xl px-9 py-2.5 text-[#030728] rounded-md font-medium cursor-pointer bg-white border border-transparent transition-all duration-200 hover:bg-white/10 hover:border-white hover:text-white">
                Message
              </button>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
          <div className="swiper-button-next text-white mt-[-55px] transition-colors duration-200 hover:text-[#4658ff]"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;