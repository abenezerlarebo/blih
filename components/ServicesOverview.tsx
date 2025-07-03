"use client";

import React, { useEffect, useRef } from "react";
import styles from "../styles/components/services.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Web Development",
    description: "Modern, scalable web solutions tailored for your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces with a focus on user experience.",
    image:
      "https://images.unsplash.com/photo-1559027615-5b6d90f30c4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Platforms",
    description: "Secure and fast shopping experiences that convert.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable infrastructure to launch, monitor and scale.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const exitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    // Pin entire section
    gsap.to(panels, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${panels.length * 100}vh`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        snap: 1 / (panels.length - 1),
        onUpdate: (self) => {
          const bar = document.querySelector(
            `.${styles.progressBar}`
          ) as HTMLElement;
          if (bar) bar.style.width = `${self.progress * 100}%`;

          if (bgRef.current) {
            bgRef.current.style.transform = `translateY(${
              self.progress * -100
            }px)`;
          }
        },
      },
    });

    panels.forEach((panel: any) => {
      gsap.fromTo(
        panel,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    // Exit transition
    if (exitRef.current) {
      gsap.fromTo(
        exitRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: exitRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}></div>
        </div>
      </div>

      {/* Background parallax layer */}
      <div ref={bgRef} className={styles.parallaxBackground}></div>

      {/* Stacked Service Cards */}
      <div className={styles.container}>
        {services.map((service, i) => (
          <div key={i} className={`panel ${styles.panel}`}>
            <div className={styles.contentBox}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className={styles.textBox}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Exit Section */}
      <div ref={exitRef} className={styles.exitSection}>
        <div>Welcome to the Next Section 🚀</div>
      </div>
    </section>
  );
}
