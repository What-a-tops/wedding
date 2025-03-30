import React from "react";

const italicTitle = ({ value, className }) => {
  return (
    <p className={`italic text-lime-900 text-xs w-full mb-2 ${className} `}>
      {value}
    </p>
  );
};

export default italicTitle;
