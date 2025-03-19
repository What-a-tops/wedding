import React, { useRef } from "react";
import { motion } from "framer-motion";
import Title from "../Title/index.jsx";

const index = () => {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      id="story"
      data-section="story"
      className="relative w-full flex flex-col justify-center items-center text-justify p-10 gap-4 h-[100vh] shadow-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col justify-center items-center p-8 rounded-2xl w-full text-center gap-6 border-4 border-lime-600/50 border-opacity-20 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Title title="Our Story" />

        <motion.div
          className="flex flex-col justify-center items-center italic w-[90%] max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed mt-2 mb-2">
            Our journey began with a simple message — a text that led to hours
            of heartfelt chats. What started as casual conversations in a church
            group blossomed into something extraordinary. Despite the miles
            between us, our connection only grew stronger. Through every video
            call, prayer, and shared moment, our love deepened.
          </p>

          <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed mt-2 mb-2">
            On April 28, 2025, we stand together, ready to celebrate this
            beautiful journey with you. We can't wait to share this special day
            with our cherished family and friends!
          </p>

          <motion.div
            className="text-center text-lime-900/80 italic text-md font-serif mt-4 text-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          >
            <p>
              “And over all these virtues put on love, which binds them all
              together in perfect unity.”
            </p>
            <p className="text-md font-bold">~ Colossians 3:14 ~</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default index;
