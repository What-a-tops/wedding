import React from "react";

const Index = ({ imagePath }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imagePath}
        alt="Panel Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-500/40"></div>
    </div>
  );
};

export default Index;
