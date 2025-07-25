"use client";

import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ProjectsSection from "./ProjectSection";

export default function HomeScreen() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <ProjectsSection />

      <TestimonialsSection />

      <FooterSection />
    </div>
  );
}
