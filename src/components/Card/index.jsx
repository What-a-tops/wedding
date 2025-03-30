import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-2xl shadow bg-white/80 w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
