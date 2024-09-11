import React from "react";

const ScrollIndicatorLeft = () => {
  return (
    <div
      className="w-6 h-6 sm:w-8 sm:h-8 relative  "
      style={{ transform: "rotate(45deg)" }}
    >
      <span
        className="absolute -top-4 left-5 w-full h-full block box-border border-none"
        style={{
          borderLeft: "3px solid #A5884B",
          borderBottom: "3px solid #A5884B",
        //   animation: "animate 1s linear infinite",
        }}
      ></span>
      <span
        className="absolute -top-3 left-4 w-full h-full block box-border border-none"
        style={{
          borderLeft: "3px solid #A5884B",
          borderBottom: "3px solid #A5884B",
        //   animation: "animate 1s linear infinite",
          // animationDelay: "0.2s",
        }}
      ></span>
      {/* <span
        className="absolute top-2 -left-1 w-full h-full block box-border border-none"
        style={{
          borderLeft: "3px solid #A5884B",
          borderBottom: "3px solid #A5884B",
        //   animation: "animate 1s linear infinite",
          animationDelay: "0.4s",
        }}
      ></span> */}
    </div>
  );
};

export default ScrollIndicatorLeft;
