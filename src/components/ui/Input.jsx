import React from "react";

const Input = ({ type = "text", className = "", ...props }) => (
  <input
    type={type}
    className={`border border-lime-600 focus:border-lime-900 focus:outline-none 
    focus:ring-2 focus:ring-lime-500/70 rounded-md p-2 w-full 
    text-lime-900 placeholder-lime-700/70 bg-white/70 shadow-sm 
    transition-all duration-300 ${className}`}
    {...props}
  />
);

export default Input;
