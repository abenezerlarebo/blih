"use client";

import React, { useEffect, useRef } from "react";
import styles from "../styles/components/hero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headlineTexts } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slides = gsap.utils.toArray<HTMLElement>(".headline-slide");
    const totalScroll = window.innerHeight * (slides.length + 1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
        pin: true,
      },
    });

    // Intro fade out and background change
    tl.to(introRef.current, {
      opacity: 0,
      yPercent: -50,
      duration: 1,
      ease: "power2.out",
    }).to(
      heroRef.current,
      {
        backgroundColor: "#B70000",
        duration: 1,
        ease: "none",
      },
      "<"
    );

    // Animate each headline slide with visibility control
    slides.forEach((slide) => {
      const chars = slide.querySelectorAll("span");

      gsap.set(slide, {
        opacity: 0,
        scale: 0.85,
        visibility: "hidden",
        pointerEvents: "none",
      });

      tl.set(slide, { visibility: "visible", pointerEvents: "auto" });

      // Fade in slide and animate chars together
      const charTL = gsap.timeline();
      charTL.fromTo(
        chars,
        { y: 60, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0)",
          stagger: 0.035,
          duration: 1,
          ease: "power3.out",
        }
      );

      tl.to(
        slide,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "expo.out",
        },
        "+=0.3"
      ).add(charTL, "<"); // sync char anim with slide entrance

      tl.to(slide, {
        opacity: 0,
        scale: 0.85,
        yPercent: -10,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(slide, { visibility: "hidden", pointerEvents: "none" });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.intro} ref={introRef}>
        <h2>BLIH Technologies – Code. Design. Impact.</h2>
      </div>

      <div className={styles.headlineWrapper}>
        {headlineTexts.map((text, index) => (
          <h1 key={index} className={`${styles.headline} headline-slide`}>
            {text
              .toUpperCase()
              .split("")
              .map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
          </h1>
        ))}
      </div>
    </section>
  );
}
