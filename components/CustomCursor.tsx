"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../styles/components/cursor.module.css";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // Element under cursor
      const elem = document.elementFromPoint(e.clientX, e.clientY);
      if (elem) {
        const style = window.getComputedStyle(elem);
        const bgColor = style.backgroundColor;

        if (
          bgColor.includes("rgb(231, 25, 33)") || // exact red match
          elem.classList.contains("red-hover")
        ) {
          cursor.classList.add(styles["hover-red"]);
        } else {
          cursor.classList.remove(styles["hover-red"]);
        }
      }
    };

    const follow = () => {
      gsap.to(cursor, {
        x: pos.current.x,
        y: pos.current.y,
        ease: "power3.out",
        duration: 0.25,
      });
      requestAnimationFrame(follow);
    };

    requestAnimationFrame(follow);
    document.addEventListener("mousemove", move);

    const addHoverEffect = () => cursor.classList.add(styles.active);
    const removeHoverEffect = () => cursor.classList.remove(styles.active);

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default CustomCursor;
