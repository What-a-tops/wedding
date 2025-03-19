import React from "react";
import { motion } from "framer-motion";
import Form from "./form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Attire from "../../assets/img/attire.png";
import Color from "../../assets/img/color.png";
import Title from "../Title";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Smooth stagger effect
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function index() {
  return (
    <motion.section
      id="rsvp"
      data-section="rsvp"
      className="relative w-full flex flex-col justify-center items-center text-justify p-10 gap-4 min-h-[100vh] shadow-md"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={fadeInUp}>
        <Title title="RSVP" />
      </motion.div>

      <div className="grid grid-cols-2 gap-2 items-center w-full max-w-4xl h-full overflow-hidden">
        <motion.div
          className="col-span-1 overflow-hidden flex flex-col h-full flex-1 border-2 rounded-lg border-lime-600/50"
          variants={slideInLeft}
        >
          <Form />
        </motion.div>

        <motion.div
          className="col-span-1 h-full flex flex-col gap-2 flex-1"
          variants={slideInRight}
        >
          <div className="flex-1 flex flex-col items-center border-2 border-lime-600/50 p-6 rounded-lg shadow-md w-full h-full">
            <h2 className="text-lg font-bold text-lime-700/80 tracking-wider mb-2">
              ATTIRE: <span className="text-lime-900/80">SMART CASUAL</span>
            </h2>

            <div className="flex flex-col items-center text-center p-6 gap-4 flex-grow">
              <img
                src={Attire}
                alt="Attire"
                className="w-80 h-auto max-h-32 object-contain rounded-lg"
              />
              <p className="text-sm text-lime-700/80 italic">
                We kindly request that you dress in smart casual attire for the
                ceremony and reception.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center border-2 border-lime-600/50 p-6 rounded-lg shadow-md w-full h-full">
            <h5 className="text-lg font-bold text-lime-700/80 tracking-wider mb-2">
              RECOMMENDED COLORS:
            </h5>

            <div className="flex flex-col items-center text-center p-6 text-gray-400 gap-4 flex-grow">
              <img
                src={Color}
                alt="color coding"
                className="w-64 h-auto max-h-24 object-contain rounded-lg"
              />
              <p className="text-sm text-lime-700/80 italic">
                We would love to see you in these colors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default index;
