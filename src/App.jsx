import React from "react";
import { motion } from "framer-motion";
import "./App.css";

import Groom from "./assets/img/groom.webp";
import Bride from "./assets//img/bride.webp";

import Home from "./components/WeddingPage/index.jsx";
import Panels from "./components/Panels/index.jsx";

import BackgroundAudio from "./components/Audio/index.jsx";
function App() {
  return (
    <div className="min-h-screen grid grid-cols-4 bg-lime-500/10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-lime-500/10"
      >
        <Panels imagePath={Groom} />
      </motion.div>

      <motion.div
        className="col-span-2 flex flex-col items-center justify-center bg-lime-500/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <Home />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        className="bg-lime-500/10"
      >
        <Panels imagePath={Bride} />
      </motion.div>

      <BackgroundAudio />
    </div>
  );
}

export default App;
