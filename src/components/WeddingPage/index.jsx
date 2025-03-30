import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "../Navbar/index.jsx";
import VideoPlayer from "../VideoPlayer/index.jsx";
import Entourage from "../Entourage/index.jsx";
import Story from "../Story/index.jsx";
import Location from "../Location/index.jsx";
import RSVP from "../Rsvp/index.jsx";
import ScrollToTop from "../ScrollToTop/index.jsx";
import Footer from "../Footer/index.jsx";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className="col-span-2 bg-white shadow-md relative overflow-x-hidden h-screen scroll-container overflow-y-auto"
    >
      {/* <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-lime-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      /> */}
      <Navbar />
      <VideoPlayer />
      <Story />
      <Entourage />
      <Location />
      <RSVP />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
