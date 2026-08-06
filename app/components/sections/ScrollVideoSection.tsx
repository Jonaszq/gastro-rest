"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 240;

export function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const frameNumber = String(index + 1).padStart(5, "0");
      return `${basePath}/scroll-video-frames/frame-${frameNumber}.jpg`;
    });

    const images = frames.map(() => new Image());
    let currentFrame = 0;
    let frameRequest = 0;
    let start = 0;
    let range = 1;
    let canvasWidth = 0;
    let canvasHeight = 0;

    const drawFrame = (frameIndex: number) => {
      const image = images[frameIndex];

      if (!image || !image.complete || !canvasWidth || !canvasHeight) {
        return;
      }

      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;
      const scale = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvasWidth = rect.width;
      canvasHeight = rect.height;

      canvas.width = Math.round(rect.width * pixelRatio);
      canvas.height = Math.round(rect.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawFrame(currentFrame);
    };

    const measure = () => {
      start = section.offsetTop;
      range = Math.max(1, section.offsetHeight - window.innerHeight);
      resizeCanvas();
    };

    const update = () => {
      frameRequest = 0;

      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / range));
      currentFrame = Math.min(FRAME_COUNT - 1, Math.floor(progress * (FRAME_COUNT - 1)));
      drawFrame(currentFrame);
    };

    const requestUpdate = () => {
      if (frameRequest) {
        return;
      }

      frameRequest = window.requestAnimationFrame(update);
    };

    const handleResize = () => {
      measure();
      requestUpdate();
    };

    const handleFrameLoad = () => {
      drawFrame(currentFrame);
    };

    images.forEach((image, index) => {
      image.decoding = "async";
      image.loading = "eager";
      image.src = frames[index];
      image.addEventListener("load", handleFrameLoad, { once: true });
    });

    measure();
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);

      if (frameRequest) {
        window.cancelAnimationFrame(frameRequest);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[320vh] overflow-hidden bg-black"
      style={{ marginLeft: "calc(50% - 50vw)", width: "100vw" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.3)_100%)]" />
        <div className="pointer-events-none absolute inset-0 border-y border-white/10" />
      </div>
    </section>
  );
}
