"use client";
import Link from "next/link";
import React, { useState } from "react";

const Ebook = () => {
  const [centered, setCentered] = useState(false);

  const handleFirstNextClick = () => {
    setCentered(true);
  };

  const handleFirstBackClick = () => {
    setCentered(false);
  };

  return (
    <div className="hidden md:block  overflow-hidden pb-20">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <div className={`book pt-8 ${centered && "centered "}`}>
          <input type="checkbox" id="c1" style={{ display: "none" }} />
          <input type="checkbox" id="c2" style={{ display: "none" }} />
          <input type="checkbox" id="c3" style={{ display: "none" }} />
          <div
            className={`flip-book transform transition-transform duration-[2] ${
              !centered && "animate-custom-pulse"
            }`}
            style={{
              width: "370px",
              height: "520px",
              position: "relative",
              perspective: "1500px",
            }}
          >
            <div className="flip" id="p1">
              {/* Pagina 2 */}
              <div className="back border-2 border-[#9A753B]   overflow-hidden   ">
                <img
                  src="/assets/menu/carta-nueva-1.png"
                  className=" border-[#9A753B] h-full w-full  rounded-3xl"
                />
                <label
                  className="back-btn"
                  htmlFor="c1"
                  onClick={handleFirstBackClick}
                >
                  Back
                </label>
              </div>
              {/* Pagina 1 */}
              <div className="front p-1 bg-[#DCDEDD]  relative overflow-hidden shadow-2xl shadow-gray-600">
                <img
                  src="/assets/menu/carta-nueva-0.png"
                  className="border-2 border-[#9A753B] h-full w-full"
                />

                <label
                  className="next-btn"
                  htmlFor="c1"
                  onClick={handleFirstNextClick}
                >
                  Next
                </label>
              </div>
            </div>
            {/* Pagina 4 */}
            <div className="flip border-2 border-[#9A753B]" id="p2">
              <div className="back    relative overflow-hidden">
                <img
                  src="/assets/menu/carta-nueva-1.png"
                  className=" h-full w-full rounded-3xl"
                />

                <label className="back-btn" htmlFor="c2">
                  Back
                </label>
              </div>
              {/* Pagina 3 */}
              <div className="front bg-[#DCDEDD] rounded-3xl relative overflow-hidden">
                <img
                  src="/assets/menu/carta-nueva-1.png"
                  className=" rounded h-full w-full"
                />

                <label className="next-btn" htmlFor="c2">
                  Next
                </label>
              </div>
            </div>
            {/* Pagina 6 */}

            <div className="flip " id="p3">
              <div className="back  bg-[#DCDEDD] p-1 relative overflow-hidden shadow-2xl shadow-gray-600 border">
                <img
                  src="/assets/menu/carta-nueva-1.png"
                  className="border-2 border-[#9A753B] h-full w-full"
                />

                <label className="back-btn" htmlFor="c3">
                  Back
                </label>
              </div>
              {/* Pagina 5 */}
              <div
                className="front p-[0.11rem] bg-[#DCDEDD] relative border-2 border-[#9A753B] shadow-2xl shadow-gray-600"
                style={{
                  boxShadow:
                    "10px 25px 20px 0px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  className="border-2 border-[#9A753B] h-full w-full bg-white"
                  // style={{
                  //   boxSizing: "border-box",
                  //   boxShadow:
                  //     "20px 0 50px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(0, 0, 0, 0.5)",
                  // }}
                />
                <img
                  src="/assets/menu/carta-nueva-ultima.png"
                  className="h-[100%] w-[105%] absolute top-0 right-0 rounded-3xl"
                />
                <label className="next-btn" htmlFor="c3" >
                  Next
                </label>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Ebook;
