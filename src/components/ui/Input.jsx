import React from "react";

const Input = ({ type = "text", className = "", ...props }) => (
  <input
    type={type}
    className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
    {...props}
  />
);

export default Input;
