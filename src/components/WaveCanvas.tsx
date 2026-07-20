"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Full-viewport canvas that renders subtle, overlapping sine waves.
 * Runs on requestAnimationFrame and cleans up on unmount.
 */
export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let time = 0;

    /** Multiple wave layers with different properties for depth */
    const waves = [
      { amplitude: 20, frequency: 0.008, speed: 0.015, opacity: 0.12, color: "24, 68, 126" },
      { amplitude: 25, frequency: 0.006, speed: 0.01, opacity: 0.08, color: "172, 194, 212" },
      { amplitude: 15, frequency: 0.012, speed: 0.02, opacity: 0.10, color: "24, 68, 126" },
      { amplitude: 30, frequency: 0.004, speed: 0.008, opacity: 0.06, color: "198, 206, 208" },
    ];

    // Capture the narrowed non-null context for the inner render loop
    const context = ctx;

    function drawFrame() {
      context.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        context.beginPath();
        context.moveTo(0, height / 2);

        for (let x = 0; x <= width; x++) {
          const y =
            height / 2 +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) *
              wave.amplitude *
              0.5;
          context.lineTo(x, y);
        }

        context.lineTo(width, height);
        context.lineTo(0, height);
        context.closePath();
        context.fillStyle = `rgba(${wave.color}, ${wave.opacity})`;
        context.fill();
      });

      time++;
    }

    // Always draw one frame so the waves are visible even with reduced motion
    drawFrame();

    let animationId = 0;

    if (!prefersReducedMotion) {
      function animate() {
        drawFrame();
        animationId = requestAnimationFrame(animate);
      }
      animationId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const cleanup = draw();
    const handleResize = () => {
      cleanup?.();
      draw();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-10]"
      aria-hidden="true"
    />
  );
}
