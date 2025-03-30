import React from "react";
import Spinner from "../../assets/img/tube-spinner.svg";

const index = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white/30 backdrop-blur-sm absolute top-0 left-0 z-50">
      <div className="text-lime-700 text-xl font-semibold flex items-center">
        <img
          src={Spinner}
          alt="Loading..."
          className="w-12 h-12 mr-2 animate-spin"
        />
        Loading...
      </div>
    </div>
  );
};

export default index;
