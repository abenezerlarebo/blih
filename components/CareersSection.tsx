"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/components/careers.module.css";
import {
  FiArrowRight,
  FiClock,
  FiUsers,
  FiGlobe,
  FiAward,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { openPositions } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);

const CareersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const positionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  // Initialize animations with proper persistence
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation (no ScrollTrigger - runs immediately)
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Features animation with persistent state
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          gsap.from(feature, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 80%",
              toggleActions: "play none none none",
              markers: false, // Remove in production
            },
            onComplete: () => {
              // Ensure element stays visible after animation
              gsap.set(feature, { clearProps: "all" });
            },
          });
        }
      });

      // Positions animation with persistent state
      positionsRef.current.forEach((position, index) => {
        if (position) {
          gsap.from(position, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.07,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: position,
              start: "top 85%",
              toggleActions: "play none none none",
              markers: false, // Remove in production
            },
            onComplete: () => {
              // Ensure element stays visible after animation
              gsap.set(position, { clearProps: "all" });
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-run animations when filtered positions change
  useEffect(() => {
    const ctx = gsap.context(() => {
      positionsRef.current.forEach((position, index) => {
        if (position) {
          gsap.from(position, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.07,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: position,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onComplete: () => {
              gsap.set(position, { clearProps: "all" });
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const filteredPositions =
    activeTab === "all"
      ? openPositions
      : openPositions.filter(
          (pos) => pos.department.toLowerCase() === activeTab
        );

  const features = [
    {
      icon: <FiUsers size={24} />,
      title: "Collaborative Culture",
      description:
        "Work with talented teams in an environment that values every voice.",
    },
    {
      icon: <FiClock size={24} />,
      title: "Flexible Hours",
      description:
        "We focus on results, not rigid schedules. Work when you're most productive.",
    },
    {
      icon: <FiGlobe size={24} />,
      title: "Global Team",
      description:
        "Join a diverse team spanning 15+ countries with different perspectives.",
    },
    {
      icon: <FiAward size={24} />,
      title: "Growth Focused",
      description:
        "Quarterly learning budgets and mentorship programs to help you grow.",
    },
  ];

  return (
    <section className={styles.careersSection} ref={sectionRef} id="careers">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.sectionHeader} ref={headerRef}>
          <h2>Career Opportunities</h2>
          <p className={styles.sectionSubtitle}>
            Join our team of innovators and help shape the future of digital
            experiences.
          </p>
        </div>

        {/* Work Environment Features */}
        <div className={styles.workEnvironment}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
                ref={(el) => (featuresRef.current[index] = el)}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className={styles.openPositions}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "all" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Positions
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "engineering" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("engineering")}
            >
              Engineering
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "design" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("design")}
            >
              Design
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "marketing" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("marketing")}
            >
              Marketing
            </button>
          </div>

          <div className={styles.positionCards}>
            {filteredPositions.map((position, index) => (
              <div
                key={position.id}
                className={`${styles.positionCard} ${
                  selectedPosition === position.id
                    ? styles.selectedPosition
                    : ""
                }`}
                ref={(el) => (positionsRef.current[index] = el)}
                onClick={() =>
                  setSelectedPosition(
                    selectedPosition === position.id ? null : position.id
                  )
                }
              >
                <div className={styles.positionHeader}>
                  <div>
                    <h4 className={styles.positionTitle}>{position.title}</h4>
                    <div className={styles.positionMeta}>
                      <span className={styles.positionType}>
                        {position.type}
                      </span>
                      <span className={styles.positionLocation}>
                        {position.location}
                      </span>
                      <span className={styles.positionSalary}>
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <FiArrowRight
                    className={`${styles.arrowIcon} ${
                      selectedPosition === position.id ? styles.rotated : ""
                    }`}
                  />
                </div>

                {selectedPosition === position.id && (
                  <div className={styles.positionDetails}>
                    <p className={styles.positionDescription}>
                      {position.description}
                    </p>

                    <div className={styles.detailsSection}>
                      <h5 className={styles.detailsTitle}>Responsibilities:</h5>
                      <ul className={styles.detailsList}>
                        {position.responsibilities.map((item, i) => (
                          <li key={i} className={styles.detailsItem}>
                            <span className={styles.bullet}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.detailsSection}>
                      <h5 className={styles.detailsTitle}>Requirements:</h5>
                      <ul className={styles.detailsList}>
                        {position.requirements.map((item, i) => (
                          <li key={i} className={styles.detailsItem}>
                            <span className={styles.bullet}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.applyInstructions}>
                      <h5 className={styles.instructionsTitle}>
                        How to Apply:
                      </h5>
                      <p className={styles.instructionsText}>
                        Email your resume and portfolio to{" "}
                        <strong>careers@marcelodesignx.com</strong> with the
                        subject line:
                        <br />
                        <strong>
                          "Application for {position.title} Position - [Your
                          Name]"
                        </strong>
                      </p>
                      <a
                        href={`mailto:careers@marcelodesignx.com?subject=Application for ${position.title} Position`}
                        className={styles.emailButton}
                      >
                        <FiMail className={styles.mailIcon} />
                        Send Application Email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* General Application CTA */}
        <div className={styles.generalApplication}>
          <h3 className={styles.generalTitle}>Don't See Your Perfect Role?</h3>
          <p className={styles.generalText}>
            We're always looking for talented individuals. Send us your resume
            and we'll contact you when a matching position opens up.
          </p>
          <a
            href="mailto:careers@marcelodesignx.com?subject=General Application"
            className={styles.generalButton}
          >
            <FiBriefcase className={styles.briefcaseIcon} />
            Submit General Application
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
