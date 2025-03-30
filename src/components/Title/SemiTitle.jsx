import React from "react";

const SemiTitle = ({ value, className }) => {
  return (
    <h3
      className={`text-sm,md:text-md font-semibold font-script text-lime-700 ${className}`}
      style={{ fontFamily: "DancingScript" }}
    >
      {value}
    </h3>
  );
};

export default SemiTitle;
