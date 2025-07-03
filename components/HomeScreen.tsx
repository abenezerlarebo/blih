"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/components/home.module.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomeScreen() {
  return (
    <div className={styles.page}>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <TestimonialsSection />

      <FooterSection />
    </div>
  );
}
