import React from "react";

const Title = ({ title, className = "" }) => {
  const [firstLine, secondLine] = title.split("\n");

  return (
    <h1
      className={`text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-lime-900/80 text-center flex flex-col drop-shadow-md ${className}`}
      style={{ fontFamily: "Coneria" }}
    >
      <span>{firstLine}</span>
      <span className="block text-3xl sm:text-2xl md:text-3xl mt-1">
        {secondLine}
      </span>
    </h1>
  );
};

export default Title;
