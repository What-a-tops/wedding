import React from "react";

const Textarea = ({ className = "", disabled, ...props }) => (
  <textarea
    disabled={disabled}
    className={`border border-lime-600 focus:border-lime-600 focus:outline-none 
    focus:ring-2 focus:ring-lime-400/70 hover:shadow-md 
    rounded-md p-2 w-full text-lime-900 placeholder-lime-700/70 bg-white/70 shadow-sm
    transition-all duration-300 resize-none ${className}`}
    {...props}
  />
);

export default Textarea;
