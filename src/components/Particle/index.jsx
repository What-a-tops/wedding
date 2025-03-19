import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ Use 'loadSlim' instead of 'loadFull'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false }, // Optional, keeps particles within section
    particles: {
      number: { value: 80 },
      size: { value: 1 },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      opacity: { value: 0.7 },
      color: { value: "#84cc16" },
      links: {
        enable: true,
        color: "#84cc16",
        distance: 150,
        width: 0.5,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Particles scatter away on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Adds new particles on click
        },
      },
      modes: {
        repulse: { distance: 70 },
        push: { quantity: 1 },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
