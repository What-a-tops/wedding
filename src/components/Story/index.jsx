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
        className="flex flex-col justify-center items-center p-4 md:p-8 rounded-2xl w-full text-center gap-6 border-0 border-lime-600/50 border-opacity-20 overflow-hidden max-w-[95%] bg-white/80 backdrop-blur-sm shadow-lg"
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
          <>
            <h4 className="text-lime-900/90 text-lg md:text-xl font-semibold mb-4 text-center">
              A Journey of Faith, Friendship, and Forever
            </h4>
            <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
              Our love story is one written by faith—a gentle journey that began
              with quiet smiles and unexpected conversations in the heart of our
              church. What started as chance encounters soon blossomed into a
              deep and genuine friendship, nurtured by shared prayers, laughter,
              and meaningful moments spent serving together.
            </p>

            <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
              As we grew closer through church activities, our bond deepened—not
              only between us but with the dear friends who walked alongside us.
              Through it all, we were guided by our trust in God's perfect plan,
              choosing to wait patiently for His timing, with hearts full of
              hope. Though time and distance stretched our journey, they never
              weakened our love. Prayer became our anchor, faith our foundation,
              and patience our quiet strength. And in every season, God was
              faithful.
            </p>

            <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
              Now, with overflowing joy and gratitude, we look forward to a day
              we’ve long prayed for—the day we say “yes” to forever. On{" "}
              <strong>April 28, 2025</strong>, we will celebrate the union of
              our hearts and the love that has brought us to this beautiful
              moment.
            </p>

            <p className="text-justify text-lime-900/80 text-opacity-90 leading-relaxed text-sm md:text-base mt-2 mb-2">
              We can’t wait to share this joyous chapter with our cherished
              family and friends—each of you a part of our journey, each of you
              a blessing in our story.
            </p>
          </>

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
