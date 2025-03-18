import React from "react";

const Index = ({ imagePath }) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imagePath}
        alt="Panel Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-lime-500/15"></div>
    </div>
  );
};

export default Index;
