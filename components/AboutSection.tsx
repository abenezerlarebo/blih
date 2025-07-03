"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../styles/components/about.module.css";
import { FaMagic, FaRocket } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  const aboutImage =
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80";
  const hoverImageSrc =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftImg = imageRef.current?.querySelector(`.${styles.leftImage}`);
      const rightImg = imageRef.current?.querySelector(`.${styles.rightImage}`);

      // Enhanced background text animation
      bgTextRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? "0%" : "0%", opacity: 0.8 },
          {
            x: i % 2 === 0 ? "-30%" : "30%",
            rotate: i * 8,
            opacity: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

      // Stagger text with more dramatic effect
      gsap.from(headlineRef.current?.querySelectorAll("span"), {
        yPercent: 120,
        opacity: 0,
        rotateX: 45,
        ease: "back.out(2)",
        duration: 1,
        stagger: { amount: 0.5, from: "random" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Enhanced text content animation
      gsap.from(textRef.current?.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          amount: 0.8,
          from: "start",
        },
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      // Image stack scroll animation with parallax
      ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          if (leftImg && rightImg) {
            gsap.to(leftImg, {
              y: progress * -40,
              rotation: -5 + progress * 5,
              scale: 1 + progress * 0.1,
              ease: "power4.out",
            });
            gsap.to(rightImg, {
              y: progress * -60,
              rotation: 5 - progress * 5,
              scale: 0.9 + progress * 0.15,
              ease: "power4.out",
            });
          }
        },
      });

      // Continuous subtle float animation
      // gsap.to([leftImg, rightImg], {
      //   y: 15,
      //   duration: 3,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "sine.inOut",
      // });

      // Button hover animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    gsap.to(buttonRef.current, { scale: 1.05 }).play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    gsap.to(buttonRef.current, { scale: 1 }).play();
  };

  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      {/* Background text elements */}
      <div
        ref={(el) => (bgTextRefs.current[0] = el)}
        className={`${styles.backgroundText} ${styles.line1}`}
      >
        BLIH BLIH BLIH BLIH BLIH
      </div>
      <div
        ref={(el) => (bgTextRefs.current[1] = el)}
        className={`${styles.backgroundText} ${styles.line2}`}
      >
        BLIH BLIH BLIH BLIH BLIH
      </div>
      <div
        ref={(el) => (bgTextRefs.current[2] = el)}
        className={`${styles.backgroundText} ${styles.line3}`}
      >
        BLIH BLIH BLIH BLIH BLIH
      </div>

      <div className={styles.twoColumn}>
        <div className={styles.textBlock}>
          <div className={styles.headlineWrapper}>
            <h2 ref={headlineRef} className={styles.headline}>
              {"About Blih".split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </h2>
            <div className={styles.headlineUnderline}></div>
          </div>

          <div className={styles.textContent} ref={textRef}>
            <p className={styles.subtext}>
              We're a passionate web agency focused on delivering cutting-edge
              digital solutions and unforgettable experiences to clients
              worldwide.
            </p>
            <p>
              Our mission is to transform bold ideas into impactful digital
              products. Whether you're a startup or enterprise, we tailor
              strategies that scale and impress.
            </p>

            <div className={styles.clientSection}>
              <h3 className={styles.clientTitle}>Our Global Reach</h3>
              <div className={styles.clientGrid}>
                <div className={styles.clientCard}>
                  <div className={styles.clientFlag}>
                    <Image
                      src="/assets/flags/canada.png"
                      alt="canada"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={styles.clientContent}>
                    <h4>Canada</h4>
                    <p>
                      15+ successful projects with Canadian startups and
                      enterprises
                    </p>
                    <div className={styles.clientProgress}></div>
                  </div>
                </div>
                <div className={styles.clientCard}>
                  <div className={styles.clientFlag}>
                    <Image
                      src="/assets/flags/united-kingdom.png"
                      alt="uk"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={styles.clientContent}>
                    <h4>United Kingdom</h4>
                    <p>
                      Partnered with leading UK brands for digital
                      transformation
                    </p>
                    <div className={styles.clientProgress}></div>
                  </div>
                </div>
                <div className={styles.clientCard}>
                  <div className={styles.clientFlag}>
                    <Image
                      src="/assets/flags/ethiopia.png"
                      alt="ethiopia"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={styles.clientContent}>
                    <h4>Ethiopia</h4>
                    <p>
                      Helping Ethiopian businesses establish strong digital
                      presence
                    </p>
                    <div className={styles.clientProgress}></div>
                  </div>
                </div>
              </div>
            </div>

            <ul className={styles.valuesList}>
              <li>
                <span className={styles.bullet}>
                  <FaMagic className={styles.bulletIcon} />
                </span>
                <div className={styles.valueContent}>
                  <h4>Human-centered Design</h4>
                  <p>Creating experiences that resonate with real users</p>
                </div>
              </li>
              <li>
                <span className={styles.bullet}>
                  <FiSettings className={styles.bulletIcon} />
                </span>
                <div className={styles.valueContent}>
                  <h4>Scalable Architecture</h4>
                  <p>Future-proof solutions that grow with your business</p>
                </div>
              </li>
              <li>
                <span className={styles.bullet}>
                  <FaRocket className={styles.bulletIcon} />
                </span>
                <div className={styles.valueContent}>
                  <h4>Performance-First</h4>
                  <p>Lightning-fast experiences that convert</p>
                </div>
              </li>
            </ul>

            <button
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.imageButton}
            >
              <span className={styles.buttonText}>Discover Our Work</span>
              <span className={styles.buttonArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.buttonHover}></span>
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div ref={imageRef} className={styles.imageStack}>
            <img
              src={aboutImage}
              alt="Team collaboration"
              className={`${styles.stackImage} ${styles.leftImage} ${
                isHovering ? styles.imageHover : ""
              }`}
            />
            <img
              src={hoverImageSrc}
              alt="Creative workspace"
              className={`${styles.stackImage} ${styles.rightImage} ${
                isHovering ? styles.imageHover : ""
              }`}
            />
            <div className={styles.imageGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
