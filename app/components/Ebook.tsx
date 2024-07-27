import Link from "next/link";
import React from "react";

const Ebook = () => {

 

  return (
    <a href='/Pdf' target="_blank" >
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
          <div className="back p-4 bg-[#DCDEDD] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/menu/carta-01.jpeg"
              className="border-2 border-[#9A753B] h-full w-full"
            />
            <img
              src="/assets/images-extras/marco4.jpg"
              alt=""
              className="absolute top-[-15px] left-[3px] scale-y-[1.15] scale-x-[1.13] w-[120%] "
            />
            <label className="back-btn" htmlFor="c1">
              Back
            </label>
          </div>
          {/* Pagina 1 */}
          <div className="front p-1 bg-[#DCDEDD] rounded-l-3xl relative overflow-hidden shadow-2xl shadow-gray-600">
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
        <div className="flip" id="p2">
          <div className="back p-4 bg-[#DCDEDD] rounded-lg relative overflow-hidden">
            <img
              src="/assets/menu/carta-03.jpeg"
              className="border-2 border-[#9A753B] h-full w-full"
            />
            <img
              src="/assets/images-extras/marci-2.png"
              alt=""
              className="absolute top-[-15px] left-[3px] scale-y-[1.14] scale-x-[1.13] w-[120%] "
            />
            <label className="back-btn" htmlFor="c2">
              Back
            </label>
          </div>
          {/* Pagina 3 */}
          <div className="front  p-4 bg-[#DCDEDD] rounded-lg relative overflow-hidden">
            <img
              src="/assets/menu/carta-04.jpeg"
              className="border-2 border-[#9A753B] h-full w-full"
            />
            <img
              src="/assets/images-extras/marci-2.png"
              alt=""
              className="absolute top-[-15px] left-[3px] scale-y-[1.14] scale-x-[1.13] w-[120%] "
            />
            <label className="next-btn" htmlFor="c2">
              Next
            </label>
          </div>
        </div>
        {/* Pagina 6 */}

        <div className="flip " id="p3">
          <div className="back p-4 bg-[#DCDEDD] rounded-lg relative overflow-hidden shadow-2xl shadow-gray-600">
            <img
              src="/assets/menu/carta-05.jpeg"
              className="border-2 border-[#9A753B] h-full w-full"
            />
            <img
              src="/assets/images-extras/marci-2.png"
              alt=""
              className="absolute top-[-15px] left-[3px] scale-y-[1.14] scale-x-[1.13] w-[120%] "
            />
            <label className="back-btn" htmlFor="c3">
              Back
            </label>
          </div>
          <div className="front  p-4 bg-[#DCDEDD] rounded-lg relative overflow-hidden">
            <img
              src="/assets/menu/carta-06.jpg"
              className="border-2 border-[#9A753B] h-full w-full"
            />
            <img
              src="/assets/images-extras/marci-2.png"
              alt=""
              className="absolute top-[-15px] left-[3px] scale-y-[1.14] scale-x-[1.13] w-[120%] "
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
