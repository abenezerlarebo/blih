"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";
import { IoMdRocket } from "react-icons/io";
import Image from "next/image";
import { FaUpwork } from "react-icons/fa6";
import posthog from "posthog-js";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        },
      });

      // Marquee animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Element animations
      gsap.from([logoRef.current, linksRef.current, socialsRef.current], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative w-full bg-stone-950 text-white px-6 py-20 overflow-hidden border-t border-gray-800/50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div ref={logoRef} className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                alt="Digital Agency"
                src="/assets/white-full-01.png"
                width={140}
                height={40}
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center">
                <IoMdRocket className="text-blue-400 text-lg" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We craft exceptional digital experiences with cutting-edge web and
              mobile technologies that drive business growth.
            </p>
          </div>

          <div
            ref={linksRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8"
          >
            {[
              {
                title: "Company",
                links: [
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#testimonials", label: "Testimonials" },
                ],
              },
              {
                title: "Services",
                links: [
                  { href: "/coming-soon", label: "Web Development" },
                  { href: "/coming-soon", label: "Mobile Apps" },
                  { href: "/coming-soon", label: "UI/UX Design" },
                  { href: "/coming-soon", label: "E-commerce" },
                ],
              },
              {
                title: "Connect",
                links: [
                  {
                    href: "https://forms.gle/GcQ6v1j6urY79F2D8",
                    label: "Contact Us",
                  },
                  { href: "/coming-soon", label: "Support" },
                  { href: "/soming-soon", label: "Privacy Policy" },
                  { href: "/coming-soon", label: "Our Work" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li
                      key={link.label}
                      onClick={() =>
                        posthog.capture("Footer navigation clicked", {
                          clickedLink: link.label,
                        })
                      }
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition duration-300 group"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-500"></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={socialsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-800/50"
        >
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Follow Our Work
            </h4>
            <div className="flex gap-4 text-2xl">
              {[
                {
                  icon: <FaTwitter />,
                  href: "https://x.com/blih_tech",
                  label: "Twitter",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/company/108032023",
                  label: "LinkedIn",
                },
                { icon: <FaGithub />, href: "#", label: "GitHub" },
                {
                  icon: <FaUpwork />,
                  href: "https://www.upwork.com/agencies/1903750003405169476/",
                  label: "Upwork",
                },
              ].map((social, i) => (
                <Link
                  onClick={() =>
                    posthog.capture("Social link clicked in the footer", {
                      socialLink: social.label,
                    })
                  }
                  key={i}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:blihtechnologies@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <RiMailLine className="text-xl" />
                <span>blihtechnologies@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <RiMapPinLine className="text-xl" />
                <span>IT Park, Addis Ababa, ET</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden border-t border-gray-800/50 pt-8">
          <div
            className="whitespace-nowrap text-center text-xl font-mono tracking-widest"
            ref={marqueeRef}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-blue-400">WEB_DEVELOPMENT</span>
                  <span className="mx-8 text-gray-500">{"///"}</span>
                  <span className="text-purple-400">MOBILE_APPS</span>
                  <span className="mx-8 text-gray-500">{"///"}</span>
                  <span className="text-blue-400">UI_UX_DESIGN</span>
                  <span className="mx-8 text-gray-500">{"///"}</span>
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-10 border-t border-gray-800/50">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Digital Agency. All rights
            reserved.
          </p>
          <div className="text-xs text-gray-600 flex items-center justify-center gap-1">
            <p>Crafted with</p> <BiHeart color="red" size={23} />
            <p>by</p>
            <span className="font-bold">Blih Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
