"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaRocket, FaCode, FaServer, FaComments } from "react-icons/fa";
import { IoIosGlobe, IoIosPhonePortrait } from "react-icons/io";
import { MdSecurity, MdCloud } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";

const headlineTexts = [
  "BUILDING NEXT-GEN DIGITAL EXPERIENCES",
  "ENGINEERING SCALABLE WEB & MOBILE APPS",
  "WHERE DESIGN MEETS INNOVATION",
];

const floatingShapes = Array(16).fill(null);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  // Cycle headline text
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % headlineTexts.length;
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Animate headline text on change
  useEffect(() => {
    const el = textRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  return (
    <>
      <Head>
        <title>Software Services in Ethiopia | BLIH Technologies</title>
        <meta
          name="description"
          content="Explore our custom software, web development, and mobile solutions tailored for businesses in Ethiopia"
        />
        <link rel="canonical" href="https://blihtech.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Blih Technologies",
              url: "https://blihtech.com",
              logo: "https://blihtech.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              sameAs: [
                "https://twitter.com/blihtech",
                "https://linkedin.com/company/blihtech",
              ],
            }),
          }}
        />
      </Head>
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black text-white overflow-hidden px-4 sm:px-6"
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        {/* Floating tech elements */}
        {floatingShapes.map((_, i) => {
          const colors = [
            "rgba(0, 200, 255, 0.6)", // Blue
            "rgba(100, 255, 200, 0.5)", // Teal
            "rgba(255, 100, 200, 0.4)", // Pink
            "rgba(255, 200, 100, 0.4)", // Yellow
          ];
          const icons = [
            <FaCode key="code" className="text-xs" />,
            <IoIosGlobe key="globe" className="text-xs" />,
            <IoIosPhonePortrait key="phone" className="text-xs" />,
            <MdSecurity key="security" className="text-xs" />,
          ];

          return (
            <div
              key={i}
              className="absolute z-0 flex items-center justify-center"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                background: `radial-gradient(circle, ${
                  colors[i % colors.length]
                } 0%, transparent 70%)`,
                borderRadius: Math.random() > 0.5 ? "50%" : "4px",
                filter: "blur(1px)",
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float${Math.floor(Math.random() * 3) + 1} ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out`,
              }}
            >
              {Math.random() > 0.7 && (
                <span className="text-white opacity-70">
                  {icons[i % icons.length]}
                </span>
              )}
            </div>
          );
        })}

        {/* Gradient background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,200,255,0.3)_0%,_transparent_60%)] animate-pulse-slow" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(100,255,200,0.2)_0%,_transparent_60%)] animate-pulse-slower" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,100,200,0.2)_0%,_transparent_60%)] animate-pulse-slowest" />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-6xl w-full space-y-8 md:space-y-12 px-4">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-teal-900/30 border border-white/10 backdrop-blur-md">
            <FaServer className="text-blue-400 text-sm" />
            <span className="text-xs font-medium tracking-wider text-blue-100">
              FULL-STACK DEVELOPMENT
            </span>
          </div>

          {/* Headline */}
          <div className="relative h-[80px] sm:h-[100px] md:h-[150px] flex items-center justify-center">
            <h1
              ref={textRef}
              key={activeIndex}
              className="absolute text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-teal-200 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
            >
              {headlineTexts[activeIndex]}
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide font-light">
            At <span className="font-medium text-white">BLIH Technologies</span>
            , we craft high-performance web and mobile applications with
            cutting-edge frameworks. Our team delivers pixel-perfect UIs and
            robust backend systems that scale with your business.
          </p>

          {/* Stats bar - Responsive layout */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 md:mt-8">
            <div className="flex items-center gap-2 sm:gap-3 px-4 py-2">
              <div className="text-blue-400 text-xl sm:text-2xl">
                <FaCode />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  15+
                </div>
                <div className="text-xs text-gray-400 tracking-wider">
                  WEB PROJECTS
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

            <div className="flex items-center gap-2 sm:gap-3 px-4 py-2">
              <div className="text-teal-400 text-xl sm:text-2xl">
                <IoIosPhonePortrait />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  8+
                </div>
                <div className="text-xs text-gray-400 tracking-wider">
                  MOBILE APPS
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

            <div className="flex items-center gap-2 sm:gap-3 px-4 py-2">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-[8px] opacity-60"></div>
                <div className="relative text-purple-400 text-xl sm:text-2xl">
                  <MdCloud />
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  96.5%
                </div>
                <div className="text-xs text-gray-400 tracking-wider">
                  UPTIME
                </div>
              </div>
            </div>
          </div>

          {/* Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 md:mt-12">
            <Link
              href={"https://forms.gle/GcQ6v1j6urY79F2D8"}
              className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.5)] hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPgo8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNiA2WiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAwMDAwMCI+PC9wYXRoPgo8cGF0aCBkPSJNNiAwTDAgNloiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMDAwMDAiPjwvcGF0aD4KPC9zdmc+')] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <FaRocket className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-45" />
              <span className="relative">Start Your Project</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            <Link
              href={"https://forms.gle/GcQ6v1j6urY79F2D8"}
              className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-200 font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,200,0.2)] hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiPgo8cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNiA2WiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAwMDAwMCI+PC9wYXRoPgo8cGF0aCBkPSJNNiAwTDAgNloiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMDAwMDAiPjwvcGF0aD4KPC9zdmc+')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <FaComments className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">Consult Our Team</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>

        {/* Scrolling tech stack - Responsive */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 w-full overflow-hidden z-10">
          <div className="flex items-center whitespace-nowrap animate-scroll-text text-xs sm:text-sm">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    REACT
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    NEXT.JS
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    NODE.JS
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    TYPESCRIPT
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    REACT NATIVE
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    AWS
                  </span>
                  <span className="mx-4 sm:mx-6 font-mono text-gray-400">
                    DOCKER
                  </span>
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes float1 {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(3deg);
            }
          }
          @keyframes float2 {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(-2deg);
            }
          }
          @keyframes float3 {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }
          @keyframes pulse-slower {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.3;
            }
          }
          @keyframes pulse-slowest {
            0%,
            100% {
              opacity: 0.05;
            }
            50% {
              opacity: 0.2;
            }
          }
          @keyframes scroll-text {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </>
  );
}
