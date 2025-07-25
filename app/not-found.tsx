"use client";

import React, { useEffect, useRef } from "react";
import { FiAlertTriangle, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import Link from "next/link";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full";
      particle.style.setProperty("--size", `${Math.random() * 6 + 2}px`);
      particle.style.setProperty("--x", `${Math.random() * 100}%`);
      particle.style.setProperty("--y", `${Math.random() * 100}%`);
      particle.style.setProperty(
        "--color",
        `hsl(${Math.random() * 60 + 200}, 80%, 60%)`
      );
      particle.style.animation = `float${Math.floor(Math.random() * 3) + 1} ${
        Math.random() * 10 + 10
      }s infinite ease-in-out`;
      particlesRef.current?.appendChild(particle);
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
      .fromTo(
        iconRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.3"
      );
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-neutral-950 text-white overflow-hidden p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>

        <div ref={particlesRef} className="absolute inset-0" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center"
      >
        <div
          ref={iconRef}
          className="mb-8 p-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-lg"
        >
          <FiAlertTriangle className="text-blue-400" size={80} />
        </div>

        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-6"
        >
          404 - Quantum Disruption
        </h1>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-md"
        >
          The digital dimension you&apos;re seeking has collapsed into a quantum
          state. Let&apos;s navigate back to stable reality.
        </p>

        <Link
          href="/"
          ref={btnRef}
          className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
        >
          <span className="mr-3">Return to Homebase</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, -15px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-10px, -10px) rotate(-3deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(5px, -20px) rotate(2deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        [class*="absolute"] {
          width: var(--size);
          height: var(--size);
          background-color: var(--color);
          top: var(--y);
          left: var(--x);
          opacity: 0.7;
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
}
