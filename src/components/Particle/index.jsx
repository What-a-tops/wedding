import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import White from "../../assets/img/white.png";
import White1 from "../../assets/img/white1.png";
import Leaf from "../../assets/img/leaf.png";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } }, // More elements for a fuller effect
      shape: {
        type: "image",
        image: [
          // { src: White, width: 100, height: 100 }, // White flower
          { src: White1, width: 80, height: 80 }, // Green leaf
          { src: Leaf, width: 80, height: 80 }, // Green leaf
        ],
      },
      size: { value: { min: 10, max: 25 }, random: true },
      opacity: { value: 1 }, // No transparency
      rotate: { animation: { enable: true, speed: 5 } }, // Slight rotation
      move: {
        enable: true,
        speed: 1.2,
        direction: "bottom",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        bubble: { size: 25, distance: 100 },
        push: { quantity: 2 },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 w-full h-full z-0 mt-12"
    />
  );
};

export default ParticlesBackground;
