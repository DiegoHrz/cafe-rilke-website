import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SimpleFlipbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Array of image paths (replace with your actual image paths)
  const pages = [
    "/assets/menu/carta-nueva-0.png",
    "/assets/menu/carta-nueva-1.png",
    "/assets/menu/carta-nueva-1.png",
    "/assets/menu/carta-nueva-1.png",
    "/assets/menu/carta-nueva-1.png",
  ];

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  return (
    <div
      className="md:hidden  flex flex-col items-center justify-center relative max-w-[370px] max-h-[520px] mx-auto p-4"
      style={{
        boxSizing: "border-box",
        boxShadow:
          "0 -10px 50px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="p-4">
        <div className=" bg-transparent border-4   ">
          <img
            src={pages[currentPage]}
            alt={`Page ${currentPage + 1}`}
            className=" border-[#9A753B] border-2 w-fit "
          />
        </div>
      </div>
      <div className=" flex space-x-4">
        <button className="py-2 absolute top-1/2 -left-[0.2rem] border-8 -translate-y-1/2" onClick={goToPreviousPage}>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className=" border  bg-rilke-red text-white  disabled:bg-transparent disabled:border-none ] -translate-y-1/2 px-[0.65rem] py-2 rounded-l-sm "
          >
            <FaArrowLeft />
          </button>
        </button>
        {/* <span className="px-4 py-2">
          Page {currentPage + 1} of {pages.length}
        </span> */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === pages.length - 1}
          className=" border  bg-rilke-red text-white disabled:bg-transparent disabled:border-none  absolute top-1/2 -right-[0.1rem] -translate-y-1/2 px-[0.65rem] py-2 rounded-r-sm"
        >
          <FaArrowRight color="white" className="   " size={15} />
        </button>
      </div>
    </div>
  );
};

export default SimpleFlipbook;
