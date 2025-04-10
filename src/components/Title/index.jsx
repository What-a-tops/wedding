import React from "react";

const Title = ({ title, className = "" }) => {
  const [firstLine, secondLine] = title.split("\n");

  return (
    <h1
      className={`text-lg sm:text-base md:text-lg lg:text-2xl tracking-wide text-lime-900/80 text-center flex flex-col drop-shadow-md ${className}`}
      style={{ fontFamily: "Coneria" }}
    >
      <span>{firstLine}</span>

      <span className="block text-base sm:text-sm md:text-xl lg:text-2xl mt-1">
        {secondLine}
      </span>
    </h1>
  );
};

export default Title;
