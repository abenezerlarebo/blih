"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

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
      {/* Menu Button */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="z-50 fixed top-6 right-6 p-3 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)]"
      >
        {menuOpen ? (
          <IoMdClose className="text-2xl text-white" />
        ) : (
          <RiMenu4Fill className="text-2xl text-white" />
        )}
      </button>

      {/* Navigation Overlay */}
      <nav
        ref={overlayRef}
        className="fixed inset-0 bg-[linear-gradient(135deg,#0a0a0a_0%,#111_50%,#0a0a0a_100%)] text-white flex flex-col justify-center items-center z-40 opacity-0 pointer-events-none"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
          </div>

          {/* Glow effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto px-6">
          {/* Logo */}
          <div ref={logoRef} className="opacity-0">
            <Image
              src="/assets/white-full-01.png"
              width={160}
              height={160}
              alt="BLIH Technologies logo"
              className="mx-auto hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Menu Items */}
          <ul
            ref={menuItemsRef}
            className="flex flex-col gap-6 text-3xl font-medium tracking-tight"
          >
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Projects", href: "/projects" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }) => (
              <li key={name} className="overflow-hidden">
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block relative group hover:text-cyan-400 transition-colors duration-300"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div
            ref={socialsRef}
            className="flex justify-center gap-6 text-2xl mt-12"
          >
            {[
              {
                icon: <FaTwitter />,
                href: "https://twitter.com/blihtech",
                label: "Twitter",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://linkedin.com/company/blihtech",
                label: "LinkedIn",
              },
              {
                icon: <FaGithub />,
                href: "https://github.com/blihtech",
                label: "GitHub",
              },
              {
                icon: <FaInstagram />,
                href: "https://instagram.com/blihtech",
                label: "Instagram",
              },
              {
                icon: <FaDiscord />,
                href: "https://discord.gg/blihtech",
                label: "Discord",
              },
            ].map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="p-3 rounded-full bg-gray-900/50 border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,200,255,0.2)] transition-all duration-300"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  );
}
