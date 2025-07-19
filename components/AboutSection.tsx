"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCode,
  FaUsers,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import {
  IoGlobeOutline,
  IoRocketOutline,
  IoHardwareChipOutline,
} from "react-icons/io5";
import { MdDesignServices, MdCloud } from "react-icons/md";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("mission");

  const aboutImage =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
  const teamImage =
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80";
  const techImage =
    "https://images.unsplash.com/photo-1687603921109-46401b201195?auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating element animation
      gsap.to(".floating-element", {
        y: 15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Content reveal animation
      gsap.from(".content-block", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Grid line animation
      gsap.from(".grid-line", {
        scaleX: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[linear-gradient(135deg,#0a0a0a_0%,#111_50%,#0a0a0a_100%)] text-white py-20 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Floating elements */}
        <div className="floating-element absolute top-1/4 left-1/5 w-12 h-12 border border-blue-400/30 rounded-lg rotate-3"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 border border-teal-400/30 rounded-lg rotate-6"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-10 h-10 border border-purple-400/30 rounded-lg rotate-2"></div>

        {/* Grid lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent grid-line origin-left"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent grid-line origin-left"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent grid-line origin-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent grid-line origin-left"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-teal-500/10 blur-[100px] animate-pulse-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="content-block mb-12 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-teal-900/30 border border-white/10 backdrop-blur-md mb-4 md:mb-6">
            <IoGlobeOutline className="text-blue-400 text-lg" />
            <span className="text-xs font-medium tracking-wider text-blue-100">
              GLOBAL DEVELOPMENT TEAM
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-teal-200 mb-4 md:mb-6">
            Digital Innovation Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            BLIH Technologies crafts exceptional web and mobile experiences that
            drive business growth.
          </p>
        </div>

        {/* Main content */}
        <div
          ref={containerRef}
          className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          {/* Left column - Content tabs */}
          <div className="content-block">
            <div className="flex overflow-x-auto pb-2 border-b border-white/10 mb-6 md:mb-8 scrollbar-hide">
              {[
                {
                  id: "mission",
                  label: "Our Mission",
                  icon: <IoRocketOutline className="mr-2" />,
                },
                {
                  id: "approach",
                  label: "Our Approach",
                  icon: <FaUsers className="mr-2" />,
                },
                {
                  id: "tech",
                  label: "Our Stack",
                  icon: <IoHardwareChipOutline className="mr-2" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center px-4 py-3 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-6 md:space-y-8">
              {activeTab === "mission" && (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Building Digital Foundations
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We don&apos;t just write code—we architect scalable digital
                    solutions that form the backbone of modern businesses. Our
                    full-stack expertise ensures seamless experiences from
                    frontend to infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl">
                      <FaChartLine className="text-2xl md:text-3xl text-blue-400 mb-2 md:mb-4" />
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                        3-5x ROI
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400">
                        For our clients
                      </p>
                    </div>
                    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl">
                      <FaShieldAlt className="text-2xl md:text-3xl text-teal-400 mb-2 md:mb-4" />
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                        99.9% Uptime
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400">
                        Production systems
                      </p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "approach" && (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Client-Centric Development
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our agile methodology combines user research with iterative
                    development to deliver products that users love and
                    businesses rely on.
                  </p>
                  <ul className="space-y-4 md:space-y-6 mt-4 md:mt-6">
                    {[
                      {
                        title: "User-Centered Design",
                        desc: "Intuitive interfaces that drive engagement",
                      },
                      {
                        title: "Agile Development",
                        desc: "Iterative sprints with continuous feedback",
                      },
                      {
                        title: "Performance Optimization",
                        desc: "Lightning-fast experiences that convert",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4">
                        <div className="relative mt-1">
                          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[4px] opacity-40"></div>
                          <div className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500"></div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "tech" && (
                <>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Modern Tech Stack
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We leverage cutting-edge technologies to build fast,
                    scalable, and secure applications.
                  </p>
                  <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {[
                      "React/Next.js",
                      "Node.js/NestJS",
                      "React Native",
                      "TypeScript",
                      "AWS/GCP",
                      "Docker/K8s",
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="p-2 md:p-3 bg-gray-900/50 border border-gray-800 rounded-lg text-center"
                      >
                        <span className="text-xs md:text-sm font-mono text-blue-300">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <button className="mt-8 md:mt-10 group relative overflow-hidden flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 md:py-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.5)]">
                <span>Explore Our Work</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          <div className="content-block relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl md:shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20 z-10"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-20"></div>

              <Image
                src={
                  activeTab === "mission"
                    ? aboutImage
                    : activeTab === "approach"
                    ? teamImage
                    : techImage
                }
                alt="About BLIH"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-700 w-full"
                priority
              />
            </div>

            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4 flex-wrap justify-center">
              {[
                {
                  text: "WEB",
                  icon: <FaCode className="mr-1" />,
                  color: "from-blue-500 to-blue-700",
                },
                {
                  text: "MOBILE",
                  icon: <FaMobileAlt className="mr-1" />,
                  color: "from-teal-500 to-teal-700",
                },
                {
                  text: "CLOUD",
                  icon: <MdCloud className="mr-1" />,
                  color: "from-purple-500 to-purple-700",
                },
                {
                  text: "UI/UX",
                  icon: <MdDesignServices className="mr-1" />,
                  color: "from-indigo-500 to-indigo-700",
                },
              ].map((badge, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${badge.color} text-white text-xs font-medium px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg flex items-center`}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global presence */}
        <div className="content-block mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-800/50">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            Our <span className="text-blue-400">Global</span> Presence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                city: "San Francisco",
                country: "USA",
                services: "Cloud Infrastructure",
                color: "border-blue-400",
                icon: <FaCode className="text-blue-400" />,
              },
              {
                city: "London",
                country: "UK",
                services: "Enterprise Solutions",
                color: "border-teal-400",
                icon: <FaServer className="text-teal-400" />,
              },
              {
                city: "Addis Ababa",
                country: "Ethiopia",
                services: "Web & Mobile Development",
                color: "border-purple-400",
                icon: <MdCloud className="text-purple-400" />,
              },
              {
                city: "Sydney",
                country: "Australia",
                services: "UI/UX Design",
                color: "border-indigo-400",
                icon: <MdDesignServices className="text-indigo-400" />,
              },
            ].map((location, i) => (
              <div
                key={i}
                className={`p-4 md:p-6 border-l-4 ${location.color} bg-gray-900/30 rounded-r-lg hover:bg-gray-900/50 transition-colors duration-300`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {location.icon}
                  <h4 className="text-lg md:text-xl font-bold">
                    {location.city}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm md:text-base mb-1">
                  {location.country}
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  {location.services}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutSection;
