import { useEffect, useRef, useState } from "react";

import Song1 from "../../assets/playlists/Touch_the_sky.mp3";
import Song2 from "../../assets/playlists/He_Knows.mp3";
import Song3 from "../../assets/playlists/The_blessing.mp3";
import Song4 from "../../assets/playlists/Sezairi-Its-You.mp3";
import Song5 from "../../assets/playlists/Nothing_Gonna_Change_My_Love_For_You.mp3";
import Song6 from "../../assets/playlists/This_is_the_day.mp3";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [playlist, setPlaylist] = useState([
    Song1,
    Song2,
    Song3,
    Song4,
    Song5,
    Song6,
  ]);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    // Play audio when the user interacts
    const playAudio = () => {
      audio.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const handleSongEnd = () => {
    if (currentTrack < playlist.length - 1) {
      setCurrentTrack((prev) => prev + 1);
    } else {
      // Shuffle and restart playlist when all songs are played
      shufflePlaylist();
    }
  };

  const shufflePlaylist = () => {
    let shuffled = [...playlist].sort(() => Math.random() - 0.5);
    setPlaylist(shuffled);
    setCurrentTrack(0);
  };

  return (
    <audio
      ref={audioRef}
      src={playlist[currentTrack]}
      autoPlay
      loop={false}
      onEnded={handleSongEnd}
    />
  );
};

export default BackgroundAudio;
