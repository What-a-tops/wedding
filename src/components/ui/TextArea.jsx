import React from "react";

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`border border-lime-700 rounded-md p-2 w-full ${className}`}
    {...props}
  />
);

export default Textarea;
