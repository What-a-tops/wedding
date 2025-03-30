import React, { useRef } from "react";
import { motion } from "framer-motion";
import Title from "../Title/index.jsx";
import StoryBg from "../../assets/img/story.jpg";
import Ring from "../../assets/img/wedring.svg";

const Index = () => {
  const ref = useRef(null);

  return (
    <motion.section
      ref={ref}
      id="story"
      data-section="story"
      className="relative w-full flex flex-col justify-center items-center text-justify p-4 md:p-10 gap-4 min-h-[100vh] shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${StoryBg})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col justify-center items-center p-4 md:p-8 rounded-2xl w-full text-center gap-6 border-0 border-lime-600/50 border-opacity-20 overflow-hidden max-w-[95%] md:max-w-xl bg-white/80 backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-1">
          <Title title="Our Story" />
          <motion.img
            src={Ring}
            alt="Wedding Ring"
            className="w-8 h-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{
              filter:
                "invert(32%) sepia(91%) saturate(248%) hue-rotate(65deg) brightness(98%) contrast(94%)",
            }}
          />
        </div>

        <motion.div
          className="flex flex-col justify-center items-center italic w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
            Our journey began with a simple message — a text that led to hours
            of heartfelt chats. What started as casual conversations in a church
            group blossomed into something extraordinary. Despite the miles
            between us, our connection only grew stronger. Through every video
            call, prayer, and shared moment, our love deepened.
          </p>

          <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
            On April 28, 2025, we stand together, ready to celebrate this
            beautiful journey with you. We can't wait to share this special day
            with our cherished family and friends!
          </p>

          <motion.div
            className="text-center text-lime-900/80 italic text-sm md:text-md font-serif mt-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          >
            <p>
              “And over all these virtues put on love, which binds them all
              together in perfect unity.”
            </p>
            <p className="text-sm md:text-md font-bold">~ Colossians 3:14 ~</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Index;
