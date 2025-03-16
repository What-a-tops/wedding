import React from "react";
import Navbar from "../Navbar/index.jsx";
import VideoPlayer from "../VideoPlayer/index.jsx";
import Story from "../Story/index.jsx";
import Location from "../Location/index.jsx";
import RSVP from "../Rsvp/index.jsx";

const Index = () => {
  return (
    <div className="col-span-2 bg-white shadow-md relative h-screen scroll-container overflow-y-auto">
      <Navbar />
      <VideoPlayer />
      <Story />
      <Location />
      <RSVP />
    </div>
  );
};

export default Index;
