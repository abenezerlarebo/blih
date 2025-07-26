"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { testimonials } from "@/constants/testimonials";
import { BiSolidArrowToLeft, BiSolidArrowToRight } from "react-icons/bi";
import posthog from "posthog-js";

gsap.registerPlugin(ScrollTrigger);

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
    const offset =
      (carouselRef.current!.offsetWidth - cardWidth) / 2 - newIndex * cardWidth;

    gsap.to(carouselRef.current, {
      x: offset,
      duration: 0.3,
      ease: "power3.out",
      onComplete: () => setIsAnimating(false),
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(i - newIndex);
      const isActive = i === newIndex;

      gsap.to(card, {
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 10,
        zIndex: testimonials.length - distance,
        filter: `blur(${isActive ? 0 : 2}px)`,
        duration: 0.3,
        ease: "back.out(1.2)",
      });

      // Animate tech tags
      const techTags = card.querySelectorAll(".tech-tag");
      gsap.to(techTags, {
        opacity: isActive ? 1 : 0.5,
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
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-stone-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)"
                  : i % 2 === 0
                  ? "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(239,68,68,0.6) 0%, transparent 70%)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float${Math.floor(Math.random() * 3) + 1} ${
                Math.random() * 10 + 10
              }s infinite ease-in-out`,
            }}
          />
        ))}

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-md mb-6">
            <IoMdRocket className="text-blue-400 text-lg" />
            <span className="text-xs font-medium tracking-wider text-blue-100">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-4 leading-tight">
            Trusted by Innovators
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            What industry leaders say about our development expertise
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[500px] md:h-[550px] overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out absolute top-0 left-0 right-0 h-full items-center"
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  onClick={() =>
                    posthog.capture("Testimonial clicked", {
                      testimonial: t.name,
                    })
                  }
                  className={`w-[280px] md:w-[400px] flex-shrink-0 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl mx-2 md:mx-5 cursor-pointer border border-gray-800/50 shadow-lg transition-all duration-500 hover:border-blue-400/50`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                      {t.icon}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 ml-1 text-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 italic mb-6 leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-tag px-2 py-1 rounded-full text-xs font-mono bg-gray-800/50 border border-gray-700 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">{t.name}</h4>
                      <span className="block text-xs text-gray-500">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-2 mr-8">
            <button
              onClick={() => goToIndex(activeIndex - 1)}
              disabled={activeIndex === 0 || isAnimating}
              className="p-3 rounded-full bg-gray-900/80 border border-gray-800 text-blue-400 hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <BiSolidArrowToLeft className="text-xl" />
            </button>
            <button
              onClick={() => goToIndex(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1 || isAnimating}
              className="p-3 rounded-full bg-gray-900/80 border border-gray-800 text-blue-400 hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <BiSolidArrowToRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
