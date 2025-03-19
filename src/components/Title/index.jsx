import React from "react";

const index = ({ title, className = "" }) => {
  return (
    <div className={`text-dark text-center p-4 ${className}`}>
      <h1 className="text-3xl font-extrabold text-lime-700/80 uppercase">
        {title}
      </h1>
    </div>
  );
};

export default index;
