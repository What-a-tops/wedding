import React from "react";
import Events from "@/assets/img/events.webp";
import Entourage from "@/assets/img/entourage.png";
import { motion } from "framer-motion";
import Title from "../Title";
import Left from "./Right";
import Right from "./Left";

const Index = () => {
  return (
    <motion.section
      id="entourage"
      data-section="entourage"
      className="relative flex flex-col items-center justify-center text-center min-h-[100vh] p-6 md:p-12 bg-lime-500/5 shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Events})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="bg-white/80 backdrop-blur-sm shadow p-4 rounded-2xl relative">
        <Title
          title={"Bacate - Mendros\nNuptials"}
          className="relative z-10 whitespace-pre-line"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img
              src={Entourage}
              alt="Decorative Background"
              className="w-180 opacity-5 brightness-10"
            />
          </div>
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-lime-800/20 transform -translate-x-1/2"></div>
          <Right />
          <Left />
        </div>
      </div>
    </motion.section>
  );
};

export default Index;
