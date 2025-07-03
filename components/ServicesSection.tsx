"use client";

import React, { useRef, useLayoutEffect } from "react";
import styles from "../styles/components/services.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/constants/constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const cards = cardsRef.current;

      ScrollTrigger.create({
        trigger: section,
        start: "top 100%",
        once: true,
        onEnter: () => {
          // Initial card states
          cards.forEach((card, i) => {
            gsap.set(card, {
              yPercent: i === 0 ? 0 : 150,
              y: 0,
              opacity: 1,
              scale: 1,
              zIndex: cards.length + i,
            });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${cards.length * 120}%`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          });

          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;

            tl.to(card, {
              scale: 0.94,
              opacity: 0.5,
              y: -50,
            });

            tl.to(
              next,
              {
                yPercent: 0,
                opacity: 1,
                scale: 1,
                y: 0,
              },
              "<"
            );

            const behind = cards[i - 1];
            if (behind) {
              tl.to(
                behind,
                {
                  opacity: 0,
                },
                "<"
              );
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.scrollSection} ref={sectionRef}>
      <div className={styles.wrapper}>
        <div className={styles.cardsList}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={styles.card}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
              >
                <div className={styles.innerCard}>
                  <div
                    className={
                      isEven ? styles.cardInfoLeft : styles.cardInfoRight
                    }
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardIndex}>0{idx + 1}</span>
                      <Icon size={24} className={styles.serviceIcon} />
                    </div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.desc}</p>
                    <ul className={styles.featureList}>
                      <li>Scalable Architecture</li>
                      <li>High Aesthetic UI</li>
                      <li>Performance Optimized</li>
                    </ul>
                  </div>

                  <div
                    className={
                      isEven ? styles.cardMediaRight : styles.cardMediaLeft
                    }
                  >
                    <Image
                      src={`/assets/headline/headline2.jpg`}
                      alt={service.title}
                      width={400}
                      height={300}
                      className={styles.serviceImg}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.bottomSpacer} />
      </div>
    </section>
  );
}
