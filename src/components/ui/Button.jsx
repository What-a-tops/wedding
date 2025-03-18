import React from "react";

const Button = ({ children, onClick, className = "", ...props }) => (
  <button
    className={`px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
