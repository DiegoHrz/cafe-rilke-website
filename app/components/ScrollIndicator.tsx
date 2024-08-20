
import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="w-6 h-6 sm:w-8 sm:h-8 relative  " style={{ transform: "rotate(45deg)" }}>
      <span
        className="absolute top-11 -left-10 w-full h-full block box-border border-none"
        style={{
          borderRight: "3px solid white",
          borderTop: "3px solid white",
          animation: "animate 1s linear infinite",
        }}
      ></span>
      <span
        className="absolute top-8 -left-8 w-full h-full block box-border border-none"
        style={{
          borderRight: "3px solid white",
          borderTop: "3px solid white",
          animation: "animate 1s linear infinite",
          animationDelay: "0.2s",
        }}
      ></span>
      <span
        className="absolute top-5 -left-6 w-full h-full block box-border border-none"
        style={{
          borderRight: "3px solid white",
          borderTop: "3px solid white",
          animation: "animate 1s linear infinite",
          animationDelay: "0.4s",
        }}
      ></span>



    </div>
  );
};

export default ScrollIndicator;
