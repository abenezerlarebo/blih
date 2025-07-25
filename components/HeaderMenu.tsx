"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { FaUpwork } from "react-icons/fa6";

export default function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Animation setup
  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      tl.current?.kill();
      gsap.set(overlayRef.current, { autoAlpha: 0, y: "-100%" });
      gsap.set(menuItemsRef.current?.children || [], { y: 40, opacity: 0 });
      gsap.set(socialsRef.current, { y: 40, opacity: 0 });
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });

      tl.current = gsap.timeline();
      tl.current
        .to(overlayRef.current, {
          autoAlpha: 1,
          y: "0%",
          duration: 0.8,
          ease: "power4.out",
        })
        .to(
          logoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          menuItemsRef.current?.children || [],
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          socialsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    } else {
      tl.current?.kill();
      tl.current = gsap.timeline({
        onComplete: () => {
          gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });
        },
      });
      tl.current
        .to(socialsRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        })
        .to(
          menuItemsRef.current?.children || [],
          {
            y: 40,
            opacity: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power3.in",
          },
          "-=0.2"
        )
        .to(
          logoRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
          },
          "-=0.2"
        )
        .to(
          overlayRef.current,
          {
            y: "-100%",
            duration: 0.6,
            ease: "power4.in",
          },
          "-=0.3"
        );
    }
  }, [menuOpen]);

  return (
    <>
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="z-51 fixed top-6 right-6 p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      >
        {menuOpen ? (
          <IoMdClose className="text-2xl text-white" />
        ) : (
          <RiMenu4Fill className="text-2xl text-white" />
        )}
      </button>

      <nav
        ref={overlayRef}
        className="fixed inset-0 bg-zinc-950 text-white flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <div ref={logoRef} className="opacity-0 mb-12">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/assets/white-full-01.png"
                width={180}
                height={60}
                alt="Company Logo"
                className="hover:scale-105 transition-transform duration-500"
                priority
              />
            </Link>
          </div>

          <ul
            ref={menuItemsRef}
            className="flex flex-col items-center gap-6 text-2xl md:text-3xl font-medium tracking-tight w-full max-w-md"
          >
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "https://forms.gle/GcQ6v1j6urY79F2D8" },
            ].map(({ name, href }) => (
              <li key={name} className="overflow-hidden cursor-pointer">
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-between w-full py-3 px-6 rounded-lg hover:bg-gray-800/50 hover:text-blue-400 transition-all duration-300 group"
                >
                  <span>{name}</span>
                  <FiExternalLink className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          <div
            ref={socialsRef}
            className="flex flex-wrap justify-center gap-4 text-xl mt-12"
          >
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
              {
                icon: <FaGithub />,
                href: "https://github.com",
                label: "GitHub",
              },
              {
                icon: <FaInstagram />,
                href: "https://instagram.com",
                label: "Instagram",
              },
              {
                icon: <FaUpwork />,
                href: "https://www.upwork.com/agencies/1903750003405169476/",
                label: "Upwork",
              },
              {
                icon: <FaYoutube />,
                href: "https://youtube.com",
                label: "YouTube",
              },
            ].map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                {icon}
              </Link>
            ))}
          </div>

          <div className="mt-12 text-gray-400 text-sm md:text-base">
            <p>blihtechnologies@gmail.com</p>
            <p className="mt-2">+251936501702</p>
          </div>
        </div>
      </nav>
    </>
  );
}
