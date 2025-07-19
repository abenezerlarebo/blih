"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaMobileAlt, FaServer, FaChartLine } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Web Development",
    desc: "We build high-performance, scalable web applications using modern frameworks like React, Next.js, and Vue.js tailored to your business needs.",
    icon: FaCode,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    features: [
      "Responsive & accessible design",
      "SEO-optimized architecture",
      "Progressive Web Apps",
      "API integration",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    icon: FaMobileAlt,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    features: [
      "React Native development",
      "Flutter applications",
      "App store optimization",
      "Offline functionality",
    ],
  },
  {
    title: "Backend & API Services",
    desc: "Robust server-side solutions with scalable architecture and secure data management.",
    icon: FaServer,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    features: [
      "Node.js & Python backends",
      "GraphQL & REST APIs",
      "Database architecture",
      "Cloud deployment",
    ],
  },
  {
    title: "Data-Driven Solutions",
    desc: "Turn your data into actionable insights with powerful analytics dashboards and reporting tools.",
    icon: FaChartLine,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    features: [
      "Business intelligence",
      "Custom dashboards",
      "Data visualization",
      "Machine learning integration",
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Particle animation
      particleRefs.current.forEach((particle, i) => {
        if (!particle) return;
        gsap.to(particle, {
          x: `${(Math.random() - 0.5) * 100}px`,
          y: `${(Math.random() - 0.5) * 100}px`,
          duration: 5 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });

      const cards = cardsRef.current;
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: 0,
          opacity: i === 0 ? 1 : 0.3,
          scale: i === 0 ? 1 : 0.9,
          zIndex: cards.length - i,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 120}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power3.inOut" },
      });

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;

        tl.to(
          card,
          {
            scale: 0.94,
            opacity: 0,
            y: 50,
            duration: 1,
          },
          ">"
        );

        tl.to(
          next,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "<"
        );

        tl.fromTo(
          card.querySelectorAll(".service-feature"),
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          "-=0.5"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-stone-950 text-white min-h-screen overflow-hidden py-20 px-6 md:px-16 flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-md mb-6">
            <IoMdRocket className="text-blue-400 text-lg" />
            <span className="text-xs font-medium tracking-wider text-blue-100">
              OUR SERVICES
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300 mb-6"
          >
            Digital Solutions That Scale
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive web and mobile development services to power your
            digital transformation
          </p>
        </div>

        <div className="relative h-[600px] md:h-[700px] flex items-center">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto p-6 md:p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/40 rounded-2xl md:rounded-3xl shadow-xl border border-gray-800/50 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-mono tracking-widest text-blue-400">
                        0{idx + 1}
                      </span>
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-[8px] opacity-40"></div>
                        <div className="relative p-3 rounded-full bg-gray-800 border border-gray-700">
                          <Icon className="text-2xl text-blue-400" />
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="service-feature flex items-start gap-3"
                        >
                          <div className="relative mt-1">
                            <div className="absolute inset-0 bg-purple-500 rounded-full blur-[4px] opacity-40"></div>
                            <div className="relative w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                          </div>
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-gray-800/50 shadow-lg h-64 md:h-80 lg:h-full order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-10"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-30"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Indicators */}
        <div className="flex justify-center gap-3 mt-16 flex-wrap">
          {[
            "REACT",
            "NEXT.JS",
            "NODE.JS",
            "TYPESCRIPT",
            "FLUTTER",
            "GRAPHQL",
            "AWS",
            "DOCKER",
          ].map((tech, i) => (
            <div
              key={i}
              className="px-3 py-1.5 rounded-full bg-gray-900/50 border border-gray-800 text-xs font-mono text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
