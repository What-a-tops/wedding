import { useRef } from "react";
import Intro from "../../assets/intro.mp4";
import { Maximize, Minimize } from "lucide-react"; // Optional icons for better UX

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <section
      id="home"
      className="relative w-full max-w-4xl mx-auto h-[100vh] flex items-center justify-center bg-lime-500/10 shadow-md"
    >
      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="w-full relative rounded-md overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            className="w-full aspect-video transition-transform duration-300 outline-none border-0"
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
    </section>
  );
};

export default VideoPlayer;
