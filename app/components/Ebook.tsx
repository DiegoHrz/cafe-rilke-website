import Link from "next/link";
import React from "react";

const Ebook = () => {
  return (
    <a href="/Pdf" target="_blank">
      <div className="book pt-8">
        <input type="checkbox" id="c1" style={{ display: "none" }} />
        <input type="checkbox" id="c2" style={{ display: "none" }} />
        <input type="checkbox" id="c3" style={{ display: "none" }} />
        {/* <div id="cover">
        <img src="/assets/menu/carta-01.jpeg" />
      </div> */}
        <div className="flip-book animate-custom-pulse">
          <div className="flip" id="p1">
            {/* Pagina 2 */}
            <div className="back border-2 border-[#9A753B]   overflow-hidden shadow-lg  ">
              <img
                src="/assets/menu/carta-nueva-1.png"
                className=" border-[#9A753B] h-full w-full  rounded-3xl"
              />
              <label className="back-btn" htmlFor="c1">
                Back
              </label>
            </div>
            {/* Pagina 1 */}
            <div className="front p-1 bg-[#DCDEDD]  relative overflow-hidden shadow-2xl shadow-gray-600">
              <img
                src="/assets/menu/carta-intro.png"
                className="border-2 border-[#9A753B] h-full w-full"
              />

              <label className="next-btn" htmlFor="c1">
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
            <div className="front p-[0.11rem] bg-[#DCDEDD]  relative  border-2 border-[#9A753B]">
              <div

                className="border-2 border-[#9A753B] h-full w-full"
              />
              <img
                src="/assets/menu/carta-nueva-1.png"
                className=" h-[100.1%] w-[105%] absolute top-0 right-[0.10rem] rounded-3xl "
              />
              <label className="next-btn" htmlFor="c3">
                Next
              </label>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Ebook;
