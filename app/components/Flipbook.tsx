import React, { useState, useEffect } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import ScrollIndicator from "./ScrollIndicator";
import ScrollIndicatorLeft from "./ScrollIndicatorLeft";

const SimpleFlipbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array of image paths (replace with your actual image paths)
  const pages = [
    "/assets/menu/carta-nueva-0.png",
    "/assets/menu/carta-nueva-1.png",
    "/assets/menu/carta-nueva-ultima.png",
  ];

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with the transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="m-10">
      <a
        className="md:hidden flex flex-col items-center justify-center relative p-6 z-0 w-fit mx-auto"
        style={{
          boxSizing: "border-box",
          boxShadow:
            "0 5px 50px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="">
          <div className="bg-transparent max-w-[500px] overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, index) => (
                <img
                  key={index}
                  src={page}
                  alt={`Page ${index + 1}`}
                  className="border-[#9A753B] border-2 w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            className="py-2 absolute top-1/2 -left-[2rem] -translate-y-1/2 z-10"
            onClick={goToPreviousPage}
          >
            <button
              disabled={currentPage === 0 || isAnimating}
              className="  disabled:text-transparent  disabled:bg-transparent disabled:border-none px-[0.65rem] py-1 rounded-l-sm z-40 text-[#fff5f5] "
            >
              {currentPage !== 0 && <ScrollIndicatorLeft />}
              {/* size={50}
                className={`rounded-full ${
                  currentPage !== 0 && 'custom-shadow'
                } bg-transparent`}
              /> */}
            </button>
          </button>
          <button
            className="py-2 absolute top-1/2 -right-[2rem] -translate-y-1/2 z-10"
            onClick={goToNextPage}
          >
            <button
              disabled={currentPage === pages.length - 1 || isAnimating}
              className={`
                ${currentPage === 0 ? "bg-transparent" : ""}
                 disabled:bg-transparent disabled:border-none disabled:text-transparent px-[0.65rem] py-1 rounded-full text-[#FFFBF5]
              `}
            >
              {currentPage !== pages.length - 1 && (
                <ScrollIndicator isFirstPage={currentPage === 0} />
              )}
              {/* <RxDoubleArrowRight
                className={`${
                  currentPage === 0 &&
                  "animate-custom-pulse-2 rounded-full custom-shadow bg-transparent"
                } disabled:text-transparent`}
                size={currentPage === 0 ? 50 : 50}
              /> */}
            </button>
          </button>
        </div>
      </a>
    </div>
  );
};

export default SimpleFlipbook;
