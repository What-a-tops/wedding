import React from "react";

function index() {
  return (
    <section
      id="story"
      className="relative w-full flex flex-col justify-center items-center text-justify p-10 gap-4 h-[100vh] shadow-md"
    >
      <div className="flex flex-col justify-center items-center p-8 rounded-2xl w-full text-center gap-6 border-4 border-emerald-200">
        <h1 className="text-3xl font-extrabold text-emerald-500 uppercase">
          OUR STORY
        </h1>

        <div className="flex flex-col justify-center items-center italic  w-[90%] max-w-xl">
          <p className="text-justify text-green-700 text-opacity-90 leading-relaxed">
            Our journey began with a simple message — a text that led to hours
            of heartfelt chats. What started as casual conversations in a church
            group blossomed into something extraordinary. Despite the miles
            between us, our connection only grew stronger. Through every video
            call, prayer, and shared moment, our love deepened. <br />
            On April 28, 2025, we stand together, ready to celebrate this
            beautiful journey with you. We can't wait to share this special day
            with our cherished family and friends!
          </p>

          <div className="text-center text-green-700 italic text-md font-serif mt-4 text-sm">
            <p className="text-lg font-bold">Jeremiah 29:11</p>
            <p>
              "For I know the plans I have for you,” declares the Lord, “plans
              to prosper you and not to harm you, plans to give you hope and a
              future."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
