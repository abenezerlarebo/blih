"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Howl } from "howler";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fillRef.current || !containerRef.current || !bgRef.current) return;

    const sound = new Howl({
      src: ["/sounds/ding.mp3"],
      volume: 0.3,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        sound.play();

        gsap.to(containerRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "power3.in",
          onComplete: onFinish,
        });
      },
    });

    tl.fromTo(
      fillRef.current,
      { maxWidth: "0%" },
      {
        maxWidth: "100%",
        duration: 3,
      }
    );

    gsap.to(bgRef.current, {
      backgroundPosition: "200% 0%",
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#e71921",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        zIndex: 9999,
        overflow: "hidden",
        clipPath: "inset(0% 0% 0% 0%)",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(270deg, #ff2a2a, #ff8b8b, #ff2a2a, #ff8b8b)",
          backgroundSize: "400% 100%",
          filter: "blur(40px)",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      <h1
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: "10vw",
          fontWeight: 900,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "rgba(255,255,255,0.15)",
          margin: 0,
          cursor: "default",
          width: "min-content",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        <span
          ref={fillRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            whiteSpace: "nowrap",
            color: "#fff",
            overflow: "hidden",
            maxWidth: "0%",
            pointerEvents: "none",
            transition: "none",
          }}
        >
          Blih
        </span>
        Blih
      </h1>
    </div>
  );
}
