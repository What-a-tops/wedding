import React from "react";

const Input = ({ type = "text", className = "", ...props }) => (
  <input
    type={type}
    className={`border border-lime-500 focus:border-lime-600 focus:outline-none 
    focus:ring-2 focus:ring-lime-400/70 rounded-md p-2 w-full 
    text-lime-900 placeholder-lime-700/70 bg-lime-50 
    transition-all duration-300 ${className}`}
    {...props}
  />
);

export default Input;
