"use client";

import React, { useEffect, useRef } from "react";
import {
  FiMail,
  FiArrowRight,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import gsap from "gsap";
import Link from "next/link";
import { AiFillDiscord } from "react-icons/ai";

export default function ComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particleCount = 16;
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

    gsap.to(rocketRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )
      .fromTo(
        rocketRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      )
      .fromTo(
        formRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
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
          ref={rocketRef}
          className="mb-8 p-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-lg"
        >
          <IoRocketOutline className="text-blue-400" size={80} />
        </div>

        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-6"
        >
          Launching Soon
        </h1>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-md"
        >
          We&apos;re building something extraordinary. Stay tuned for our grand
          reveal!
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-4 mb-10">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl font-bold text-blue-400">14</div>
            <div className="text-xs text-gray-400">DAYS</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl font-bold text-purple-400">23</div>
            <div className="text-xs text-gray-400">HOURS</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl font-bold text-blue-400">45</div>
            <div className="text-xs text-gray-400">MINUTES</div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 min-w-[80px]">
            <div className="text-3xl font-bold text-purple-400">12</div>
            <div className="text-xs text-gray-400">SECONDS</div>
          </div>
        </div>

        <form
          ref={formRef}
          className="w-full max-w-md bg-gray-800/50 border border-gray-700 rounded-xl p-1 backdrop-blur-lg mb-8"
        >
          <div className="flex">
            <div className="flex-1 flex items-center pl-4">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 w-full py-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center"
            >
              <span className="mr-2">Notify Me</span>
              <FiArrowRight />
            </button>
          </div>
        </form>

        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Instagram", "Discord"].map((social) => (
            <Link
              key={social}
              href="#"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              aria-label={social}
            >
              {social === "Twitter" && <FiTwitter />}
              {social === "LinkedIn" && <FiLinkedin />}
              {social === "Instagram" && <FiInstagram />}
              {social === "Discord" && <AiFillDiscord />}
            </Link>
          ))}
        </div>
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
