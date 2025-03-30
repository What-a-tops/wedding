import React from "react";

const image = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt="GCash QR Code"
        className="w-24 h-24 rounded-lg shadow-lg border border-lime-600/50 p-1"
      />
      <p className="text-xs text-lime-700/80 mt-2 font-semibold uppercase">
        {title}
      </p>
    </div>
  );
};

export default image;
