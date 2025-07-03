"use client";

import React, { useRef, useEffect } from "react";
import styles from "../styles/components/footer.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered fade in animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        },
      }
    );

    // Marquee scroll animation
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <footer ref={sectionRef} className={styles.footer}>
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoArea}>
          <Image
            alt="footer-logo"
            className={styles.logoIcon}
            src="/assets/icon-white.png"
            width={90}
            height={50}
          />
          <h2>Blih Technologies</h2>
        </div>

        {/* Navigation */}
        <div className={styles.columns}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a style={{ textDecoration: "none" }} href="/about">
                  About
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/careers">
                  Careers
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/team">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul style={{ textDecoration: "none" }}>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/services/web-design"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href="/services/app-development"
                >
                  App Development
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/services/branding">
                  Branding
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul style={{ textDecoration: "none" }}>
              <li>
                <a style={{ textDecoration: "none" }} href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/support">
                  Support
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/privacy-policy">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h4>Social</h4>
            <div className={styles.icons} style={{ textDecoration: "none" }}>
              <a style={{ textDecoration: "none" }} href="#">
                <FaFacebookF />
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <FaTwitter />
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <FiInstagram />
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack} ref={marqueeRef}>
            <span>
              BLIH — CREATING IMPACT — BLIH — CREATING IMPACT — BLIH — CREATING
              IMPACT — BLIH — CREATING IMPACT — BLIH — CREATING IMPACT — BLIH —
              CREATING IMPACT — BLIH — CREATING IMPACT — BLIH — CREATING IMPACT
              — BLIH — CREATING IMPACT — BLIH — CREATING IMPACT — BLIH —
              CREATING IMPACT — BLIH — CREATING IMPACT —
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottomNote}>
          <p>
            &copy; {new Date().getFullYear()} Blih Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
