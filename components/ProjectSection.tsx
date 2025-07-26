import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { IoMdRocket, IoMdMedical, IoMdCart, IoMdBoat } from "react-icons/io";
import { FaUmbrellaBeach } from "react-icons/fa";
import posthog from "posthog-js";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        });
      });

      gsap.from(".section-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      floatingShapesRef.current.forEach((shape, i) => {
        gsap.to(shape, {
          y: i % 2 === 0 ? 20 : -20,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "TripBooka",
      category: "Travel SaaS",
      icon: <FaUmbrellaBeach className="text-blue-400" />,
      tagline: "Lead management system for travel agents",
      description:
        "Comprehensive CRM solution automating 85% of manual processes for travel agencies with integrated lead tracking, proposal generation, and commission management.",
      imgUrl: "/projects/tripbooka.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Clerk", "Stripe"],
      status: "Live",
      year: 2025,
      url: "https://staging.tripbooka.com/",
      github: "https://github.com/kecheste/TripBooka",
      metrics: "Reduced booking time by 75%",
    },
    {
      id: 2,
      title: "MLER",
      category: "Maritime Platform",
      icon: <IoMdBoat className="text-blue-400" />,
      tagline: "Maritime equipment rental marketplace",
      description:
        "Specialized platform for renting maritime equipment with dynamic pricing, real-time availability, and integrated insurance options.",
      imgUrl: "/projects/mler.jpg",
      technologies: ["Next.js", "Stripe", "Mapbox", "Tailwind CSS"],
      status: "Live",
      year: 2024,
      url: "https://dev.maritimelendsandequipmentrentals.com/",
      metrics: "300% growth in first year",
    },
    {
      id: 3,
      title: "Fikreselam Hospital",
      category: "Healthcare",
      icon: <IoMdMedical className="text-blue-400" />,
      tagline: "Hospital management system",
      description:
        "End-to-end hospital management solution with patient records, appointment scheduling, inventory management, and telemedicine capabilities.",
      imgUrl: "/projects/hospital.jpg",
      technologies: ["React", "NestJS", "PostgreSQL", "AWS"],
      status: "In Development",
      year: 2024,
      url: "#",
      metrics: "Serving 500+ patients daily",
    },
    {
      id: 4,
      title: "Meli's Fashion",
      category: "E-commerce",
      icon: <IoMdCart className="text-blue-400" />,
      tagline: "Premium fashion boutique",
      description:
        "High-end fashion e-commerce platform with AR try-on features, personalized recommendations, and seamless checkout experience.",
      imgUrl: "/projects/melis-fashion.jpg",
      technologies: ["Shopify", "React", "Three.js", "Stripe"],
      status: "Live",
      year: 2025,
      url: "https://melisfashionboutique.store/",
      metrics: "Increased conversions by 40%",
    },
    {
      id: 5,
      title: "Nuun Academy",
      category: "EdTech",
      tagline: "E-learning for Somali region",
      description:
        "Offline-first learning platform bringing quality education to remote areas with multilingual support and low-bandwidth optimization.",
      imgUrl: "/projects/nuun-academy.jpg",
      technologies: ["React", "Firebase", "Ionic", "Workbox"],
      status: "In Development",
      year: 2025,
      url: "#",
      metrics: "1,000+ students reached",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden"
      id="portfolio"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div
          ref={(el) => {
            floatingShapesRef.current[0] = el!;
          }}
          className="absolute top-1/4 left-[15%] w-32 h-32 rounded-full bg-blue-500/5 blur-[80px]"
        ></div>
        <div
          ref={(el) => {
            floatingShapesRef.current[1] = el!;
          }}
          className="absolute bottom-1/3 right-[20%] w-40 h-40 rounded-full bg-purple-500/5 blur-[90px]"
        ></div>
        <div
          ref={(el) => {
            floatingShapesRef.current[2] = el!;
          }}
          className="absolute top-[40%] right-[10%] w-24 h-24 rotate-45 bg-cyan-500/5 blur-[60px]"
        ></div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scanline"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-title">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-md mb-6">
            <IoMdRocket className="text-blue-400 text-lg" />
            <span className="text-xs font-medium tracking-wider text-blue-100">
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Digital <span className="text-white">Innovations</span> That Deliver
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transforming industries with cutting-edge technology solutions
            tailored to our clients&apos; unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectCardsRef.current[index] = el!;
              }}
              onClick={() =>
                posthog.capture("Project clicked", {
                  projectTitle: project.title,
                })
              }
              className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,182,255,0.1)_0%,transparent_70%)]"></div>
              </div>

              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      project.status === "Live"
                        ? "bg-green-900/30 text-green-400 border border-green-400/20"
                        : project.status === "In Development"
                        ? "bg-yellow-900/30 text-yellow-400 border border-yellow-400/20"
                        : "bg-blue-900/30 text-blue-400 border border-blue-400/20"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-900/50 text-gray-300 text-xs font-medium backdrop-blur-md border border-gray-700">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon && (
                    <div className="p-2 rounded-lg bg-gray-700/50 backdrop-blur-sm border border-gray-700">
                      {project.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm">{project.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                {project.metrics && (
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-1">KEY IMPACT</div>
                    <div className="text-sm text-white font-medium">
                      {project.metrics}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded backdrop-blur-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="w-full">
                    <p className="text-sm text-gray-300 mb-3">
                      {project.tagline}
                    </p>
                    <Link
                      onClick={() =>
                        posthog.capture("Vising project site clicked", {
                          projectTitle: project.title,
                        })
                      }
                      href={project.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 hover:scale-[1.02] transform-gpu"
                    >
                      {project.status === "Live" ? (
                        <>
                          <FiExternalLink /> Visit Live Site
                        </>
                      ) : (
                        "View Case Study"
                      )}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Have a project in mind? Let&apos;s bring it to life.
          </p>
          <Link
            href="https://forms.gle/GcQ6v1j6urY79F2D8"
            target="_blank"
            onClick={() => posthog.capture("Start project clicked")}
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all group hover:scale-[1.02] transform-gpu"
          >
            <span className="relative z-10">Start Your Project</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
