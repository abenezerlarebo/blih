"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/components/testimonials.module.css";

// Import icons
import {
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Founder, FutureTech",
    text: "Working with BLIH was a game-changer. Their team turned complex ideas into an intuitive and performant platform.",
    rating: 5,
    icon: <IoMdQuote className="quote-icon" />,
  },
  {
    name: "Daniel Cruz",
    role: "CTO, SynthLabs",
    text: "Their design and engineering expertise is unmatched. Collaboration was seamless and effective.",
    rating: 4,
    icon: <RiDoubleQuotesL className="quote-icon" />,
  },
  {
    name: "Amina Yusuf",
    role: "Product Lead, NexaAI",
    text: "The BLIH team helped us move faster and build better. The quality of their delivery is consistently excellent.",
    rating: 5,
    icon: <RiDoubleQuotesR className="quote-icon" />,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle carousel navigation
  const goToIndex = (index: number) => {
    if (isAnimating) return;

    const newIndex = Math.max(0, Math.min(index, testimonials.length - 1));
    setActiveIndex(newIndex);
    setIsAnimating(true);

    if (carouselRef.current) {
      const cardWidth = cardsRef.current[0]?.offsetWidth || 0;
      const gap = 40;
      const offset =
        (carouselRef.current.offsetWidth - cardWidth) / 2 -
        newIndex * (cardWidth + gap);

      gsap.to(carouselRef.current, {
        x: offset,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => setIsAnimating(false),
      });

      // Animate card scales
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const isActive = i === newIndex;
        const scale = isActive ? 1.1 : 0.9;
        const opacity = 1 - Math.abs(i - newIndex) * 0.2;
        const y = isActive ? 0 : 20;
        const delay = isActive ? 0 : Math.abs(i - newIndex) * 0.1;

        gsap.to(card, {
          scale,
          opacity,
          y,
          duration: 0.6,
          delay,
          ease: "back.out(1.7)",
        });

        // Animate the glow effect for active card
        const glow = card.querySelector(`.${styles.cardGlow}`);
        if (glow) {
          gsap.to(glow, {
            opacity: isActive ? 0.8 : 0,
            duration: 0.4,
            delay,
            ease: "power2.out",
          });
        }
      });

      // Animate the dots
      gsap.to(`.${styles.dot}`, {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(`.${styles.dot}:nth-child(${newIndex + 1})`, {
        scale: 1.3,
        backgroundColor: "#e63946",
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
  };

  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Heading animation with staggered letters
      const heading = headingRef.current?.querySelector("h2");
      if (heading) {
        const letters = heading.textContent?.split("") || [];
        heading.textContent = "";
        letters.forEach((letter, i) => {
          const span = document.createElement("span");
          span.textContent = letter;
          span.style.display = "inline-block";
          heading.appendChild(span);

          gsap.from(span, {
            y: 50,
            opacity: 0,
            color: "#999",
            duration: 0.8,
            delay: i * 0.05,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }

      // Subheading animation
      gsap.from(headingRef.current?.querySelector("p"), {
        y: 30,
        opacity: 0,
        filter: "blur(5px)",
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Card animations on enter
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Initial carousel setup
      if (carouselRef.current && cardsRef.current[0]) {
        const cardWidth = cardsRef.current[0].offsetWidth;
        const gap = 40;
        const offset =
          (carouselRef.current.offsetWidth - cardWidth) / 2 -
          activeIndex * (cardWidth + gap);

        gsap.set(carouselRef.current, { x: offset });

        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const scale = i === activeIndex ? 1.1 : 0.9;
          const opacity = 1 - Math.abs(i - activeIndex) * 0.2;
          const y = i === activeIndex ? 0 : 20;

          gsap.set(card, { scale, opacity, y });
        });
      }

      // Floating particles animation
      const particles = sectionRef.current?.querySelectorAll(
        `.${styles.particle}`
      );
      particles?.forEach((particle, i) => {
        const duration = 4 + Math.random() * 3;
        gsap.to(particle, {
          y: (i % 2 === 0 ? -1 : 1) * 20,
          x: (i % 3 === 0 ? -1 : 1) * 15,
          duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToIndex(activeIndex - 1);
      } else if (e.key === "ArrowRight") {
        goToIndex(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isAnimating]);

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      {/* Decorative elements */}
      <div className={`${styles.particle} ${styles.particle1}`}></div>
      <div className={`${styles.particle} ${styles.particle2}`}></div>
      <div className={`${styles.particle} ${styles.particle3}`}></div>
      <div className={`${styles.particle} ${styles.particle4}`}></div>

      <div className={styles.heading} ref={headingRef}>
        <h2>Client Testimonials</h2>
        <p>Hear what industry leaders say about our work</p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel} ref={carouselRef}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                index === activeIndex ? styles.active : ""
              }`}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => goToIndex(index)}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.quoteIcon}>{t.icon}</div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.meta}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) =>
                    i < t.rating ? (
                      <FaStar key={i} style={{ color: "#e63946" }} />
                    ) : (
                      <FaRegStar key={i} className={styles.star} />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={() => goToIndex(activeIndex - 1)}
          disabled={activeIndex === 0 || isAnimating}
          style={{
            backgroundColor: activeIndex === 0 ? "#f0f0f0" : "#e63946",
            color: activeIndex === 0 ? "#999" : "white",
          }}
        >
          <FaChevronLeft />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToIndex(index)}
              style={{
                backgroundColor: index === activeIndex ? "#e63946" : "#ddd",
              }}
            />
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={() => goToIndex(activeIndex + 1)}
          disabled={activeIndex === testimonials.length - 1 || isAnimating}
          style={{
            backgroundColor:
              activeIndex === testimonials.length - 1 ? "#f0f0f0" : "#e63946",
            color: activeIndex === testimonials.length - 1 ? "#999" : "white",
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
