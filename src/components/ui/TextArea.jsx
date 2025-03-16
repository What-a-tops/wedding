import React from "react";

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`border border-green-300 rounded-md p-2 w-full ${className}`}
    {...props}
  />
);

export default Textarea;
