"use client";

import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomeScreen() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <TestimonialsSection />

      <FooterSection />
    </div>
  );
}
