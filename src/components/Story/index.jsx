import React from "react";

function index() {
  return (
    <section
      id="story"
      data-section="story"
      className="relative w-full flex flex-col justify-center items-center text-justify p-10 gap-4 h-[100vh] shadow-md"
    >
      <div className="flex flex-col justify-center items-center p-8 rounded-2xl w-full text-center gap-6 border-4 border-lime-600 border-opacity-20">
        <h1 className="text-3xl font-extrabold text-lime-700 uppercase">
          OUR STORY
        </h1>

        <div className="flex flex-col justify-center items-center italic  w-[90%] max-w-xl">
          <p className="text-justify text-lime-900 text-opacity-90 leading-relaxed mt-2 mb-2">
            Our journey began with a simple message — a text that led to hours
            of heartfelt chats. What started as casual conversations in a church
            group blossomed into something extraordinary. Despite the miles
            between us, our connection only grew stronger. Through every video
            call, prayer, and shared moment, our love deepened.
          </p>

          <p className="text-justify text-lime-900 text-opacity-90 leading-relaxed mt-2 mb-2">
            On April 28, 2025, we stand together, ready to celebrate this
            beautiful journey with you. We can't wait to share this special day
            with our cherished family and friends!
          </p>

          <div className="text-center text-lime-900 italic text-md font-serif mt-4 text-sm">
            <p>
              “And over all these virtues put on love, which binds them all
              together in perfect unity.”
            </p>
            <p className="text-md font-bold">~ Colossians 3:14 ~</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
