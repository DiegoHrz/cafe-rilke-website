import React from "react";

interface ribbonProps {
  text?: string;
}

const Ribbon: React.FC<ribbonProps> = ({ text = "Default text" }) => {
  return (
    <div className="ribbon-outer bg-rilke-red  relative max-w-[70rem] rounded-md ">
      <div className="ribbon-left "></div>
      <div className="ribbon-right"></div>
      <span className="flex justify-center items-center h-full text-white px-3 text-sm sm:text-base">{text}</span>
    </div>
  );
};

export default Ribbon;
