"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Founder, FutureTech",
    text: "Their development team transformed our platform beyond conventional limits. Their technical architecture reduced latency by 92% while increasing throughput 4x.",
    rating: 5,
    icon: <IoMdRocket className="text-cyan-400" />,
    companyLogo: "/assets/logos/futuretech.png",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    name: "Daniel Cruz",
    role: "CTO, SynthLabs",
    text: "The team implemented our web infrastructure with precision. Their solutions maintain 99.999% uptime even under heavy traffic loads.",
    rating: 5,
    icon: <MdOutlinePrecisionManufacturing className="text-purple-400" />,
    companyLogo: "/assets/logos/synthlabs.png",
    tech: ["Next.js", "GraphQL", "Docker"],
  },
  {
    name: "Amina Yusuf",
    role: "Lead Developer, NexaAI",
    text: "Working with them was like accessing technology from the future. Their UI framework increased our engagement metrics by 450% in Q1.",
    rating: 5,
    icon: <RiDoubleQuotesL className="text-white" />,
    companyLogo: "/assets/logos/nexaai.png",
    tech: ["TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Marcus Zhang",
    role: "Director, QuantumCore",
    text: "Their security protocols are rock solid. They implemented protections that our own security team couldn't penetrate.",
    rating: 5,
    icon: <RiDoubleQuotesR className="text-red-400" />,
    companyLogo: "/assets/logos/quantumcore.png",
    tech: ["OAuth", "JWT", "Security Headers"],
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToIndex = (index: number): void => {
    if (isAnimating) return;
    const newIndex = Math.max(0, Math.min(index, testimonials.length - 1));
    setActiveIndex(newIndex);
    setIsAnimating(true);

    const cardWidth = cardsRef.current[0]?.offsetWidth || 0;
    const gap = window.innerWidth < 768 ? 20 : 60;
    const offset =
      (carouselRef.current!.offsetWidth - cardWidth) / 2 -
      newIndex * (cardWidth + gap);

    gsap.to(carouselRef.current, {
      x: offset,
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => setIsAnimating(false),
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(i - newIndex);
      const isActive = i === newIndex;
      const scale =
        window.innerWidth < 768
          ? isActive
            ? 1
            : 0.85 - distance * 0.05
          : isActive
          ? 1
          : 0.9 - distance * 0.05;

      gsap.to(card, {
        scale,
        opacity: isActive ? 1 : 0.8 - distance * 0.2,
        y: isActive ? 0 : 10 + distance * 5,
        zIndex: testimonials.length - distance,
        filter: `blur(${isActive ? 0 : 1 + distance * 1}px)`,
        duration: 0.6,
        delay: isActive ? 0 : distance * 0.1,
        ease: "back.out(1.7)",
      });

      // Animate tech tags
      const techTags = card.querySelectorAll(".tech-tag");
      gsap.to(techTags, {
        opacity: isActive ? 1 : 0.3,
        y: isActive ? 0 : 5,
        duration: 0.4,
        stagger: 0.05,
      });
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background elements
      gsap.from(".bg-grid", {
        scaleY: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Title animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Initial setup
      goToIndex(activeIndex);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(0,200,255,0.8) 0%, transparent 70%)"
                  : i % 2 === 0
                  ? "radial-gradient(circle, rgba(150,0,255,0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(255,50,50,0.6) 0%, transparent 70%)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float${Math.floor(Math.random() * 3) + 1} ${
                Math.random() * 10 + 10
              }s infinite ease-in-out`,
            }}
          />
        ))}

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-cyan-500/5 blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-500/5 blur-[80px] md:blur-[120px] animate-pulse-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-12 md:mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-white/10 backdrop-blur-md mb-6">
            <IoMdRocket className="text-cyan-400 text-lg" />
            <span className="text-xs font-medium tracking-wider text-cyan-100">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-300 mb-4 md:mb-6 leading-tight">
            Trusted by Innovators
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            What industry leaders say about our development expertise
          </p>
        </div>

        {/* Holographic Carousel */}
        <div className="relative h-[500px] md:h-[600px] px-4">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out absolute top-0 left-0 h-full items-center"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onClick={() => goToIndex(index)}
                className={`w-[300px] md:w-[420px] lg:w-[480px] flex-shrink-0 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl mx-2 md:mx-5 cursor-pointer border border-gray-800/50 shadow-xl hover:shadow-[0_0_40px_rgba(0,200,255,0.3)] transition-all duration-500 hover:border-cyan-400/50`}
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg">
                    {t.icon}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-400 ml-1 text-sm md:text-lg"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-300 italic mb-6 md:mb-8 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {t.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-mono bg-gray-800/50 border border-gray-700 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold">
                      {t.name}
                    </h4>
                    <span className="block text-xs md:text-sm text-gray-500">
                      {t.role}
                    </span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src={t.companyLogo}
                      alt={t.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 md:mt-16 flex items-center justify-center gap-4 md:gap-8">
          <button
            onClick={() => goToIndex(activeIndex - 1)}
            disabled={activeIndex === 0 || isAnimating}
            className="p-3 md:p-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition disabled:opacity-30"
          >
            <FaChevronLeft className="text-lg md:text-xl" />
          </button>

          <div className="flex gap-2 md:gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-cyan-400 scale-150 shadow-[0_0_10px_rgba(0,200,255,0.7)]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goToIndex(activeIndex + 1)}
            disabled={activeIndex === testimonials.length - 1 || isAnimating}
            className="p-3 md:p-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,200,255,0.4)] transition disabled:opacity-30"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 md:mt-24 pt-12 md:pt-16 border-t border-gray-800/50">
          <h3 className="text-center text-xl md:text-2xl text-gray-400 mb-8 md:mb-12">
            Trusted by leading{" "}
            <span className="text-cyan-400">tech innovators</span>
          </h3>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap px-4">
            {[
              "/assets/logos/quantumcore.png",
              "/assets/logos/futuretech.png",
              "/assets/logos/synthlabs.png",
              "/assets/logos/nexaai.png",
              "/assets/logos/neurotech.png",
              "/assets/logos/holoinc.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="w-24 h-10 md:w-40 md:h-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={logo}
                    fill
                    alt="Partner logo"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
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
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(2deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.15;
          }
        }
      `}</style>
    </section>
  );
}
