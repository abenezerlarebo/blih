"use client";

import React, { useEffect, useRef } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import gsap from "gsap";
import styles from "../styles/components/NotFound.module.css";

export default function NotFound() {
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      iconRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        btnRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "bounce.out" }
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon} ref={iconRef}>
        <FiAlertTriangle size={80} />
      </div>
      <h1 className={styles.title} ref={titleRef}>
        404 - Page Not Found
      </h1>
      <p className={styles.description} ref={descRef}>
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a href="/" className={styles.homeButton} ref={btnRef}>
        Go Back Home
      </a>
    </div>
  );
}
