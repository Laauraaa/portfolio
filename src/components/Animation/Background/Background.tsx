import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function AnimatedBackground() {
  const particlesInit = useCallback(async (engine:any) => {
    await loadFull(engine);
  }, []);

  return (
<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#000000" },
    particles: {
      number: { value: 150 },
      color: { value: ["#D13E4A", "#EDB1A3", "#F9E9D1", "#DB606A"] },
      shape: { type: "circle" },
      size: {
        value: { min: 0.5, max: 3 },
        animation: {
          enable: true,
          speed: 20,
          minimumValue: 0.5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        outModes: { default: "bounce" },
      },
      opacity: {
        value: 3.0,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 1.0,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05, // menor frequência para brilho sutil
          opacity: 1, // mais forte
        },
      },
      shadow: {
        enable: true,
        color: "#F9E9D1",
        blur: 15, // brilho mais forte
        offset: {
          x: 0,
          y: 0,
        },
      },
      // Gradiente dinâmico para simular luz refletindo
      gradient: {
        enable: true,
        type: "linear",
        angle: 45,
        stops: [
          { offset: 0, color: "#ffffff", opacity: 0.6 },
          { offset: 1, color: "#ff69b4", opacity: 0.3 },
        ],
      },
    },
  }}
/>
  
  );
}
