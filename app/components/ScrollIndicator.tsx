import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="w-full ml-20">
      <div
        className="relative w-12 h-12 bg-[#ccc] "
        style={{ transform: "rotate(45deg)" }}
      >
        <span
          className="absolute top-0 left-0 w-full h-full block box-border border-none "
          style={{
            borderRight: "3px solid #fff",
            borderBottom: "3px solid #fff",
          }}
        ></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
