import React from "react";
import Form from "./form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Attire from "../../assets/attire.png";
import Color from "../../assets/color.png";

function index() {
  return (
    <section
      id="rsvp"
      className="relative w-full flex flex-col justify-center items-center text-justify p-10 gap-4 min-h-[100vh] shadow-md"
    >
      <div className="text-dark text-center p-4">
        <h1 className="text-3xl font-extrabold text-emerald-600 uppercase">
          RSVP
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-2 items-center w-full max-w-4xl h-full">
        <div className="col-span-1 overflow-hidden flex flex-col h-full flex-1 border-4 rounded-lg border-emerald-200">
          <Form />
        </div>

        <div className="col-span-1 h-full flex flex-col gap-2 flex-1">
          <div className="flex-1 flex flex-col items-center border-4 border-emerald-200 p-6 rounded-lg shadow-md w-full h-full">
            <h2 className="text-lg font-bold text-emerald-600 tracking-wider mb-2">
              ATTIRE: <span className="text-emerald-700">SMART CASUAL</span>
            </h2>

            <div className="flex flex-col items-center text-center p-6 text-gray-400 gap-4 flex-grow">
              <img
                src={Attire}
                alt="Attire"
                className="w-64 h-auto max-h-24 object-contain rounded-lg"
              />
              <p className="text-sm text-green-700">
                We kindly request that you dress in smart casual attire for the
                ceremony and reception.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center border-4 border-emerald-200 p-6 rounded-lg shadow-md w-full h-full">
            <h5 className="text-lg font-bold text-emerald-600 tracking-wider mb-2">
              RECOMMENDED COLORS:
            </h5>

            <div className="flex flex-col items-center text-center p-6 text-gray-400 gap-4 flex-grow">
              <img
                src={Color}
                alt="color coding"
                className="w-64 h-auto max-h-24 object-contain rounded-lg"
              />
              <p className="text-sm text-green-700">
                We would love to see you in these colors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
