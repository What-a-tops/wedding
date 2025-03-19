import { useEffect, useRef } from "react";
import WeddingSong from "../../assets/playlists/Sezairi - It's You (Official Music Video).mp3";

const BackgroundAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Attempt to play the audio after a short delay for better compatibility
    const playAudio = () => {
      audio.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });
    };

    // Start audio when the user interacts with the page (improves reliability)
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return <audio ref={audioRef} src={WeddingSong} autoPlay loop />;
};

export default BackgroundAudio;
