"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowRoundBack,
  IoMdArrowRoundForward,
} from "react-icons/io";

const Ebook = () => {
  const [centered, setCentered] = useState(false);
  const [moveFrame, setMoveFrame] = useState(false);

  const handleFirstNextClick = () => {
    setCentered(true);
    setMoveFrame(false);
  };

  const handleFirstBackClick = () => {
    setCentered(false);
    setMoveFrame(true);
  };

  return (
    <div
      className="hidden md:block mt-20 "
      // style={{
      //   opacity: 0.8,
      //   backgroundSize: "70%",
      //   backgroundPosition: "50% 45%",
      // }}
    >
      <div className="relative  overflow-hidden py-16 w-full shadow-[0px_0px_50px_rgb(0,0,0,0.4)]">
        {/* Background Image Overlay */}
        <img
          src="/assets/frames/table+.jpg"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80   w-[72rem] h-full shadow-[0px_0px_50px_rgb(0,0,0,0.6)] rounded-xl"
        />
        <div className="">
          <div className={`book py-4 ${centered && "centered "}`}>
            <input type="checkbox" id="c1" style={{ display: "none" }} />
            <input type="checkbox" id="c2" style={{ display: "none" }} />
            <input type="checkbox" id="c3" style={{ display: "none" }} />
            <div
              className={`flip-book transform transition-transform duration-[2] relative ${
                !centered && "animate-custom-pulse"
              }`}
              style={{
                width: "370px",
                height: "520px",
                position: "relative",
                perspective: "1500px",
              }}
            >
              {/* <img
              src="/assets/rose/rosas-marco1.png"
              className={`absolute top-0 -left-40 h-[40rem] transition-transform-opacity ${
                moveFrame ? "translate-reset" : "translate-left md:opacity-0 block "
              }`}
              alt=""
            />
            <img
              src="/assets/rose/rosas-marco2.png"
              className={`absolute top-0 -right-40 h-[40rem] transition-transform-opacity ${
                moveFrame ? "translate-reset " : "translate-right"
              }`}
              alt=""
            /> */}
              <div className="flip" id="p1">
                {/* Pagina 2 */}
                <div className="back border-2 border-[#9A753B]      ">
                  <img
                    src="/assets/menu/carta-nueva-1.png"
                    className=" border-[#9A753B] h-full w-full  rounded-3xl"
                  />
                  <label
                    className="back-btn"
                    htmlFor="c1"
                    onClick={handleFirstBackClick}
                  >
                    <IoIosArrowBack size={50} className="text-[#ddb766]" />
                  </label>
                </div>
                {/* Pagina 1 */}
                <div className="front p-1 bg-[#DCDEDD]  relative  shadow-2xl shadow-gray-600  ">
                  <img
                    src="/assets/menu/carta-nueva-0.png"
                    className="border-2 border-[#9A753B] h-full w-full"
                  />

                  <label
                    className="next-btn"
                    htmlFor="c1"
                    onClick={handleFirstNextClick}
                  >
                    <IoIosArrowForward
                      size={50}
                      className="text-[#ddb766]"
                    />
                  </label>
                </div>
              </div>
              {/* Pagina 4 */}
              <div className="flip border-2 border-[#9A753B]" id="p2">
                <div className="back    relative ">
                  <img
                    src="/assets/menu/carta-nueva-3.png"
                    className=" h-full w-full rounded-3xl"
                  />

                  <label className="back-btn" htmlFor="c2">
                    <IoIosArrowBack size={50} className="text-[#ddb766]" />
                  </label>
                </div>
                {/* Pagina 3 */}
                <div className="front bg-[#DCDEDD] rounded-3xl relative ">
                  <img
                    src="/assets/menu/carta-nueva-2.png"
                    className=" rounded h-full w-full"
                  />

                  <label className="next-btn" htmlFor="c2">
                    <IoIosArrowForward
                      size={50}
                      className="text-[#ddb766] "
                    />
                  </label>
                </div>
              </div>
              {/* Pagina 6 */}

              <div className="flip " id="p3">
                <div className="back  bg-[#DCDEDD] p-1 relative  shadow-2xl shadow-gray-600 border">
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
                  {/* <label className="next-btn" htmlFor="c3" >
                  Next
                </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
