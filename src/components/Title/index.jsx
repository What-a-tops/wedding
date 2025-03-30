import React from "react";

const Title = ({ title, className = "" }) => {
  const [firstLine, secondLine] = title.split("\n");

  return (
    <h1
      className={`text-2xl sm:text-xl md:text-2xl lg:text-4xl tracking-wide text-lime-900/80 text-center flex flex-col drop-shadow-md ${className}`}
      style={{ fontFamily: "Coneria" }}
    >
      <span>{firstLine}</span>
      <span className="block text-xl sm:text-sm md:text-3xl lg:text-4xl mt-1">
        {secondLine}
      </span>
    </h1>
  );
};

export default Title;
