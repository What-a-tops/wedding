import React from "react";
import { motion } from "framer-motion";
import Form from "./form";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Attire from "../../assets/img/attire.png";
import Color from "../../assets/img/color.png";
import Title from "../Title";
import Bouquet from "../../assets/img/bouquet.jpg";
import QrCode from "../QRCode/image";

import GCash1 from "../../assets/qrcode/gcash1.png";
import BPI from "../../assets/qrcode/bpi.png";
import GCash from "../../assets/qrcode/gcash.png";
import Card from "../Card";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
      className="relative w-full flex flex-col justify-center items-center text-justify p-6 md:p-10 gap-6 min-h-[100vh] bg-lime-500/5 shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Bouquet})` }}
      variants={staggerContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={fadeInUp}>
        <Title title="RSVP" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-4xl">
        <motion.div
          className="overflow-hidden flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm h-full shadow"
          variants={slideInLeft}
        >
          <Form />
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 h-full"
          variants={slideInRight}
        >
          <Card>
            <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold text-lime-700/80 tracking-wider mb-2">
              ATTIRE: <span className="text-lime-900/80">SMART CASUAL</span>
            </h2>

            <div className="flex flex-col items-center text-center p-2 gap-4 w-full">
              <img
                src={Attire}
                alt="Attire"
                className="w-full max-w-[20rem] max-h-32 object-contain rounded-lg"
              />
              <p className="text-sm text-lime-700/80 italic">
                We kindly request that you dress in smart casual attire for the
                ceremony and reception.
              </p>
            </div>
          </Card>

          <Card>
            <h5 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-lime-700/80 tracking-wider mb-2">
              RECOMMENDED COLORS:
            </h5>

            <div className="flex flex-col items-center text-center p-2 gap-4 w-full">
              <img
                src={Color}
                alt="color coding"
                className="w-full max-h-12 object-contain rounded-lg"
              />
              <p className="text-sm text-lime-700/80 italic">
                We would love to see you in these colors.
              </p>
            </div>
          </Card>

          <Card>
            <h5 className="text-lg md:text-xl font-bold text-lime-700/80 tracking-wide uppercase text-center">
              A Note on Gifts
            </h5>

            <p className="text-xs xs:text-base text-lime-700/80 italic text-center mt-2 px-4">
              Your presence and prayers are the greatest gifts we could ask for.
              Should you wish to bless us further, we kindly suggest a monetary
              gift, which can be given using the QR codes below. Thank you for
              celebrating with us!
            </p>

            <div className="flex justify-center gap-2 mt-4">
              <QrCode img={GCash1} alt="GCash QR Code" title="GCash" />
              <QrCode img={BPI} alt="BPI QR Code" title="BPI" />
              <QrCode img={GCash} alt="GCash QR Code" title="GCash" />
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default index;
