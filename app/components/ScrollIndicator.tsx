import React from "react";

interface ScrollIndicatorProps {
  isFirstPage?: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isFirstPage }) => {
  return (
    <div
      className="w-6 h-6 sm:w-8 sm:h-8 relative  "
      style={{ transform: "rotate(45deg)" }}
    >
      <span
        className={`absolute  w-full h-full block box-border border-none ${
          isFirstPage ? "animate-scroll-indicator top-11 -left-10" : "top-6 -left-5"
        }`}
        style={{
          borderRight: "3px solid #A5884B",
          borderTop: "3px solid #A5884B",
        }}
      ></span>
      <span
        className={`absolute  w-full h-full block box-border border-none ${
          isFirstPage ? "animate-scroll-indicator top-8 -left-8" : "top-5 -left-4"
        }`}
        style={{
          borderRight: "3px solid #A5884B",
          borderTop: "3px solid #A5884B",
          animationDelay: "0.2s",
        }}
      ></span>
      {isFirstPage && (
        <span
          className="absolute top-5 -left-6 w-full h-full block box-border border-none"
          style={{
            borderRight: "3px solid #A5884B",
            borderTop: "3px solid #A5884B",
            animation: "animate 1s linear infinite",
            animationDelay: "0.4s",
          }}
        ></span>
      )}
    </div>
  );
};

export default ScrollIndicator;