import React from "react";

const index = ({ id, color, children, style, className }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`w-full min-h-screen flex items-center justify-center ${color} shadow-md ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default index;
