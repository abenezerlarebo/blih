"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "../styles/components/projects.module.css";
import {
  FiArrowRight,
  FiCalendar,
  FiExternalLink,
  FiGithub,
  FiRefreshCw,
  FiUsers,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/constants/projects-1";

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowIcon}
  >
    <path
      d="M6 26 L24 8"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8 L24 8 L24 14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const endTriggerRef = useRef<HTMLDivElement>(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(4);
  const ctaRef = useRef<HTMLDivElement>(null);

  const loadMoreProjects = () => {
    setDisplayedProjects((prev) => Math.min(prev + 4, projects.length));
  };

  // Animation setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sun glow animation
      gsap.to(`.${styles.sunGlow}`, {
        scale: 1.05,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Water ripple effect for project cards
      projectsRef.current.forEach((project) => {
        if (!project) return;

        project.addEventListener("mouseenter", () => {
          const ripple = document.createElement("div");
          ripple.className = styles.waterRipple;
          project.appendChild(ripple);

          gsap.fromTo(
            ripple,
            { scale: 0, opacity: 0.5 },
            {
              scale: 1,
              opacity: 0,
              duration: 1,
              onComplete: () => ripple.remove(),
            }
          );
        });
      });

      // Main container animation
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Title animation
      if (titleRef.current) {
        const chars = titleRef.current.textContent?.split("") || [];
        titleRef.current.textContent = "";

        chars.forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          titleRef.current?.appendChild(span);

          gsap.from(span, {
            y: "100%",
            opacity: 0,
            duration: 0.8,
            delay: i * 0.05,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          });
        });
      }

      // Projects animation
      projectsRef.current.forEach((project, i) => {
        if (!project) return;
        gsap.set(project, { opacity: 0, y: 100 });

        ScrollTrigger.create({
          trigger: project,
          start: "top 80%",
          onEnter: () => {
            gsap.to(project, {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: i * 0.1,
              ease: "power3.out",
            });
          },
        });

        project.addEventListener("mouseenter", () => {
          gsap.to(project.querySelector(`.${styles.projectImage}`), {
            scale: 1.05,
            duration: 0.5,
          });
          gsap.to(project.querySelector(`.${styles.arrowIcon}`), {
            x: 5,
            duration: 0.3,
          });
        });

        project.addEventListener("mouseleave", () => {
          gsap.to(project.querySelector(`.${styles.projectImage}`), {
            scale: 1,
            duration: 0.5,
          });
          gsap.to(project.querySelector(`.${styles.arrowIcon}`), {
            x: 0,
            duration: 0.3,
          });
        });
      });

      // CTA section animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Modal scroll navigation effect
  useEffect(() => {
    if (!selectedProject || !modalContentRef.current || !endTriggerRef.current)
      return;

    const modalContent = modalContentRef.current;
    const endTrigger = endTriggerRef.current;
    let isHandlingScroll = false;
    let hasReachedEnd = false;
    let startScrollPosition = 0;
    let maxScrollableDistance = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollPrompt(entry.isIntersecting);
        if (entry.isIntersecting) {
          hasReachedEnd = true;
          startScrollPosition = modalContent.scrollTop;
          maxScrollableDistance =
            modalContent.scrollHeight -
            modalContent.clientHeight -
            startScrollPosition;
        } else {
          hasReachedEnd = false;
          if (progressRef.current) {
            gsap.to(progressRef.current, {
              width: "0%",
              duration: 0.2,
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(endTrigger);

    const handleScroll = () => {
      if (!hasReachedEnd || isHandlingScroll) return;

      const currentScroll = modalContent.scrollTop;
      const scrolledDistance = currentScroll - startScrollPosition;
      const scrollPercentage = Math.min(
        scrolledDistance / maxScrollableDistance,
        1
      );

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: `${scrollPercentage * 100}%`,
          duration: 0.1,
          ease: "none",
        });
      }

      if (scrollPercentage >= 0.99) {
        isHandlingScroll = true;
        const currentIndex = projects.findIndex(
          (p) => p.id === selectedProject.id
        );

        setTimeout(() => {
          if (currentIndex < projects.length - 1) {
            navigateToProject(projects[currentIndex + 1].id);
          } else {
            closeModal();
          }
          isHandlingScroll = false;
        }, 300);
      }
    };

    modalContent.addEventListener("scroll", handleScroll);

    return () => {
      modalContent.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [selectedProject, showScrollPrompt]);

  useEffect(() => {
    if (!selectedProject || !modalContentRef.current) return;

    const scrollElements =
      modalContentRef.current.querySelectorAll("[data-scroll]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, [selectedProject]);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";

    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedProject(null);
          document.body.style.overflow = "auto";
        },
      });
    } else {
      setSelectedProject(null);
      document.body.style.overflow = "auto";
    }
  };

  const navigateToProject = (id: number) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      // Reset progress bar before transition
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: "0%",
          duration: 0.1,
        });
      }

      gsap.to(modalRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          setSelectedProject(project);
          setShowScrollPrompt(false);
          if (modalContentRef.current) {
            modalContentRef.current.scrollTop = 0;
          }
          gsap.fromTo(
            modalRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.sunGlow}></div>
      <div className={styles.glow}></div>

      <div className={styles.header}>
        <h1 ref={titleRef} className={styles.mainTitle}>
          PROJECTS
        </h1>
      </div>

      <div className={styles.categories}>
        <span className={styles.category}>ALL</span>
        <span className={styles.category}>DEVELOPMENT</span>
        <span className={styles.category}>MOBILE</span>
        <span className={styles.category}>DESIGN</span>
        <span className={styles.category}>BRANDING</span>
      </div>

      <div className={styles.projectsGrid}>
        {projects.slice(0, displayedProjects).map((project, index) => (
          <div
            key={project.id}
            className={styles.projectCard}
            ref={(el) => {
              projectsRef.current[index] = el;
            }}
            onClick={() => openProject(project)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className={styles.projectImage}
                priority
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.tagsRow}>
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                    {i < Math.min(1, project.tags.length - 1) && " / "}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className={styles.moreTags}>
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
              <h3 className={styles.projectTitle}>
                {project.title}
                <ArrowIcon />
              </h3>
            </div>
          </div>
        ))}
      </div>

      {displayedProjects < projects.length && (
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton} onClick={loadMoreProjects}>
            Show More
          </button>
        </div>
      )}

      <div className={styles.ctaSection} ref={ctaRef}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Turn Your Vision Into an Experience That Lasts
          </h2>
          <p className={styles.ctaText}>
            You have a story worth sharing — we help you tell it in a way
            that&apos;s impossible to ignore.
          </p>
          <Link href="/contact-us" className={styles.ctaButton}>
            Let&apos;s Talk <FiArrowRight />
          </Link>
        </div>
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <FiX size={24} />
            </button>

            <div className={styles.modalContent} ref={modalContentRef}>
              <div className={styles.modalHero}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className={styles.heroImage}
                    quality={100}
                  />
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                  <h2 data-scroll data-scroll-speed="0.1">
                    {selectedProject.title}
                  </h2>
                  <p
                    className={styles.heroSubtitle}
                    data-scroll
                    data-scroll-speed="0.05"
                  >
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.projectHeader}>
                  <div className={styles.metaInfo}>
                    <span className={styles.year}>
                      <FiCalendar size={20} className={styles.metaIcon} />{" "}
                      {selectedProject.year}
                    </span>
                    <span className={styles.status}>
                      <FiRefreshCw size={20} className={styles.metaIcon} />{" "}
                      {selectedProject.status}
                    </span>
                    <span className={styles.team}>
                      <FiUsers size={20} className={styles.metaIcon} />{" "}
                      {selectedProject.team}
                    </span>
                  </div>

                  <div className={styles.projectLinks}>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <FiExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <FiGithub size={18} /> View Code
                      </a>
                    )}
                  </div>
                </div>

                <div className={styles.projectDescription}>
                  <h3 className={styles.sectionTitle} data-scroll>
                    Project Overview
                  </h3>
                  {selectedProject.longDescription.map((paragraph, index) => (
                    <p key={index} data-scroll data-scroll-speed={0.05}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {selectedProject.features &&
                  selectedProject.features.length > 0 && (
                    <div className={styles.projectFeatures}>
                      <h3 className={styles.sectionTitle} data-scroll>
                        Key Features
                      </h3>
                      <ul className={styles.featuresList}>
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className={styles.featureItem}
                            data-scroll
                            data-scroll-speed={0.03 * index}
                          >
                            <div className={styles.featureIcon}>✦</div>
                            <div className={styles.featureContent}>
                              <h4>{feature.title}</h4>
                              <p>{feature.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {selectedProject.chanllenges &&
                  selectedProject.chanllenges.length > 0 && (
                    <div className={styles.projectChallenges}>
                      <h3 className={styles.sectionTitle} data-scroll>
                        Challenges & Solutions
                      </h3>
                      <div className={styles.challengesGrid}>
                        {selectedProject.chanllenges.map((challenge, index) => (
                          <div
                            key={index}
                            className={styles.challengeCard}
                            data-scroll
                            data-scroll-speed={0.05 * index}
                          >
                            <h4>{challenge.title}</h4>
                            <p>{challenge.description}</p>
                            {challenge.solution && (
                              <>
                                <div className={styles.solutionLabel}>
                                  Solution:
                                </div>
                                <p>{challenge.solution}</p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 && (
                    <div className={styles.projectGallery}>
                      <h3 className={styles.sectionTitle} data-scroll>
                        Gallery
                      </h3>
                      <div className={styles.galleryGrid}>
                        {selectedProject.gallery.map((image, index) => (
                          <div
                            key={index}
                            className={styles.galleryItem}
                            data-scroll
                            data-scroll-speed={
                              0.05 * (index % 2 === 0 ? 1 : 0.5)
                            }
                          >
                            <div className={styles.galleryImageWrapper}>
                              <Image
                                src={image.url}
                                alt={
                                  image.alt ||
                                  `${selectedProject.title} screenshot ${
                                    index + 1
                                  }`
                                }
                                fill
                                className={styles.galleryImage}
                                quality={100}
                              />
                            </div>
                            {image.alt && (
                              <div className={styles.galleryCaption}>
                                {image.alt}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div className={styles.techStack}>
                  <h3 className={styles.sectionTitle} data-scroll>
                    Tech Stack
                  </h3>
                  <div className={styles.tagsContainer}>
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={styles.techTag}
                        data-scroll
                        data-scroll-speed={0.03 * index}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div ref={endTriggerRef} className={styles.endTrigger}></div>

                {showScrollPrompt && (
                  <div className={styles.nextProjectPrompt}>
                    <div className={styles.scrollProgress}>
                      <div
                        className={styles.scrollProgressBar}
                        ref={progressRef}
                      ></div>
                    </div>
                    <div className={styles.scrollIndicator}>
                      <div className={styles.chevron}></div>
                      <div className={styles.chevron}></div>
                      <div className={styles.chevron}></div>
                    </div>
                    <p>Continue scrolling to explore the next project</p>
                    <div className={styles.nextProjectInfo}>
                      {projects[
                        projects.findIndex((p) => p.id === selectedProject.id) +
                          1
                      ]?.title || "Return to portfolio"}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;
