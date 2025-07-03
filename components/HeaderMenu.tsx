"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../styles/components/headerMenu.module.css";
import Image from "next/image";
import Link from "next/link";

function HamburgerIcon({ open, color }: { open: boolean; color: string }) {
  return (
    <div className={`${styles.hamburger} ${open ? styles.open : ""}`}>
      <span style={{ backgroundColor: color }}></span>
      <span style={{ backgroundColor: color }}></span>
      <span style={{ backgroundColor: color }}></span>
    </div>
  );
}

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconColor = "#fff";

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      tl.current?.kill();

      gsap.set(overlayRef.current, {
        y: "-100%",
        scale: 0.8,
        rotationY: 15,
        skewY: 5,
        transformOrigin: "top center",
        autoAlpha: 1,
        pointerEvents: "auto",
      });
      gsap.set(menuItemsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        scale: 0.9,
      });
      gsap.set(socialsRef.current, { y: 30, opacity: 0, scale: 0.8 });

      tl.current = gsap.timeline();
      tl.current
        .to(overlayRef.current, {
          duration: 0.7,
          y: "0%",
          scale: 1,
          rotationY: 0,
          skewY: 0,
          ease: "power4.out",
          transformOrigin: "top center",
        })
        .to(
          menuItemsRef.current?.children || [],
          {
            duration: 0.5,
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          socialsRef.current,
          {
            duration: 0.5,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    } else {
      tl.current?.kill();

      tl.current = gsap.timeline({
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, {
              autoAlpha: 0,
              pointerEvents: "none",
            });
          }
        },
      });

      tl.current
        .to(socialsRef.current, {
          duration: 0.3,
          y: 30,
          opacity: 0,
          scale: 0.8,
          ease: "power3.in",
        })
        .to(
          menuItemsRef.current?.children || [],
          {
            duration: 0.3,
            y: 30,
            opacity: 0,
            scale: 0.9,
            stagger: 0.1,
            ease: "power3.in",
          },
          "-=0.2"
        )
        .to(
          overlayRef.current,
          {
            duration: 0.6,
            y: "-100%",
            scale: 0.8,
            rotationY: 15,
            skewY: 5,
            ease: "power4.in",
            transformOrigin: "top center",
            pointerEvents: "none",
          },
          "-=0.4"
        );
    }
  }, [menuOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className={styles.menuButton}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <HamburgerIcon open={menuOpen} color={iconColor} />
      </button>

      <nav
        ref={overlayRef}
        className={styles.menuOverlay}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={styles.menuContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.logo}>
            <Image
              src="/assets/white-full-01.png"
              width={120}
              height={120}
              alt="Blih Technologies logo"
              priority
            />
          </div>

          <ul className={styles.menuList} ref={menuItemsRef}>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="services" onClick={() => setMenuOpen(false)}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="projects" onClick={() => setMenuOpen(false)}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="contact" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>

          <div
            className={styles.socials}
            ref={socialsRef}
            aria-label="Social Media Links"
          >
            <Link
              href="https://twitter.com/blihtech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com/company/blihtech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://github.com/blihtech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://instagram.com/blihtech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
