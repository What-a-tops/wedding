import { useRef } from "react";
import Section from "../Section";
import Intro from "@/assets/img/intro.mp4";
import { Maximize, Minimize } from "lucide-react";
import ParticlesBackground from "../Particle";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <Section id="home" color="bg-lime-500/5">
      <ParticlesBackground />
      <div className="w-full flex flex-col items-center justify-center flex-1">
        <div className="w-full relative overflow-hidden border-0">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-full object-cover transition-transform duration-300 outline-none border-0"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </Section>
  );
};

export default VideoPlayer;
