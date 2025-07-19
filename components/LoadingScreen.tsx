"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Howl } from "howler";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (
      !containerRef.current ||
      !logoRef.current ||
      !progressBarRef.current ||
      !progressTextRef.current ||
      !particlesRef.current
    )
      return;

    // Sound effects
    const sounds = {
      tick: new Howl({
        src: ["/sounds/tick.mp3"],
        volume: 0.1,
        rate: 0.8,
      }),
      complete: new Howl({
        src: ["/sounds/ding.mp3"],
        volume: 0.3,
      }),
    };

    // Create particles
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "loading-particle";
      particle.style.setProperty("--x", `${Math.random() * 100}%`);
      particle.style.setProperty("--y", `${Math.random() * 100}%`);
      particle.style.setProperty("--size", `${Math.random() * 4 + 2}px`);
      particle.style.setProperty("--delay", `${Math.random() * 2}s`);
      particle.style.setProperty(
        "--color",
        `hsl(${Math.random() * 60 + 200}, 80%, 60%)`
      );
      particlesRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    particles.forEach((particle) => {
      gsap.to(particle, {
        y: `${(Math.random() - 0.5) * 100}px`,
        x: `${(Math.random() - 0.5) * 100}px`,
        opacity: Math.random() * 0.5 + 0.5,
        duration: 3 + Math.random() * 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: `-=${Math.random() * 3}`,
      });
    });

    // Logo animation
    const logoPaths = logoRef.current.querySelectorAll("path");
    logoPaths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fillOpacity: 0,
      });
    });

    // Main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    });

    // Background animation
    tl.to(containerRef.current, {
      backgroundPosition: "100% 50%",
      duration: 15,
      ease: "none",
    });

    // Progress elements entrance
    tl.to(
      progressBarRef.current,
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.8,
      },
      0.2
    );

    tl.to(
      progressTextRef.current,
      {
        opacity: 1,
        duration: 0.8,
      },
      0.2
    );

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(
          prev + Math.random() * 3 + (prev > 80 ? 2 : 0),
          100
        );

        // Play tick sound at certain intervals
        if (
          Math.floor(newProgress) % 10 === 0 &&
          Math.floor(newProgress) !== Math.floor(prev)
        ) {
          sounds.tick.play();
        }

        if (newProgress === 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
        }

        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      sounds.tick.unload();
      sounds.complete.unload();
    };
  }, []);

  // Update progress animations
  useEffect(() => {
    if (!logoRef.current || !progressBarRef.current) return;

    // Update logo drawing progress
    const logoPaths = logoRef.current.querySelectorAll("path");
    logoPaths.forEach((path) => {
      const length = path.getTotalLength();
      const drawProgress = length * (1 - progress / 100);

      gsap.to(path, {
        strokeDashoffset: drawProgress,
        duration: 0.5,
        ease: "power2.out",
      });

      // Fill logo when progress reaches certain point
      if (progress > 80) {
        gsap.to(path, {
          fillOpacity: (progress - 80) / 20,
          duration: 0.5,
        });
      }
    });

    // Update progress bar
    gsap.to(progressBarRef.current, {
      scaleX: progress / 100,
      duration: 0.5,
      ease: "power2.out",
    });

    // Update percentage text
    if (progressTextRef.current) {
      progressTextRef.current.textContent = `${Math.floor(progress)}%`;
    }
  }, [progress]);

  // Handle completion
  useEffect(() => {
    if (isComplete && containerRef.current) {
      const completeSound = new Howl({
        src: ["/sounds/ding.mp3"],
        volume: 0.3,
      });
      completeSound.play();

      // Animate out
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
        onComplete: onFinish,
      });

      // Animate particles out
      gsap.to(".loading-particle", {
        opacity: 0,
        y: "+=50",
        duration: 0.6,
        stagger: 0.02,
        ease: "power3.in",
      });
    }
  }, [isComplete, onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-gradient-to-br from-neutral-950 via-stone-900 to-zinc-900 overflow-hidden"
      style={{
        backgroundSize: "200% 200%",
        clipPath: "inset(0% 0% 0% 0%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={particlesRef}
          className="absolute inset-0"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTUwIDBMOTAgMjVWNzVMNTAgMTAwTDEwIDc1VjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slower"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 w-full max-w-[40vmin] aspect-square flex items-center justify-center">
        <svg
          ref={logoRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 1141"
          className="w-full h-full"
        >
          <path
            d="M1528,733L1527,734L1525,734L1524,735L1521,735L1513,743L1513,744L1511,746L1511,747L1510,748L1510,749L1509,750L1509,753L1508,754L1508,814L1509,815L1509,818L1510,819L1510,820L1511,821L1511,822L1512,823L1512,824L1521,833L1522,833L1523,834L1525,834L1526,835L1528,835L1529,836L1592,836L1593,835L1595,835L1596,834L1597,834L1598,833L1599,833L1601,831L1602,831L1608,825L1608,824L1609,823L1609,822L1610,821L1610,819L1611,818L1611,815L1612,814L1612,754L1611,753L1611,750L1610,749L1610,747L1609,746L1609,745L1608,744L1608,743L1602,737L1601,737L1599,735L1597,735L1596,734L1594,734L1593,733ZM628,304L627,305L618,305L617,306L612,306L611,307L607,307L606,308L603,308L602,309L599,309L598,310L594,310L593,311L590,311L589,312L588,312L587,313L585,313L584,314L583,314L582,315L581,315L580,316L578,316L577,317L576,317L574,319L573,319L572,320L571,320L570,321L569,321L568,322L566,322L565,323L564,323L562,325L561,325L559,327L558,327L556,329L555,329L551,333L550,333L549,334L548,334L544,338L543,338L541,340L541,341L537,345L536,345L530,351L530,352L524,358L524,359L521,362L521,363L519,365L519,366L518,367L518,368L516,370L516,371L514,373L514,374L513,375L513,376L512,377L512,378L510,380L510,381L509,382L509,383L508,384L508,385L507,386L507,387L506,388L506,390L505,391L505,393L504,394L504,395L503,396L503,398L502,399L502,401L501,402L501,403L500,404L500,407L499,408L499,410L498,411L498,414L497,415L497,418L496,419L496,424L495,425L495,463L494,464L435,464L435,561L494,561L495,562L495,835L591,835L591,466L592,465L592,457L593,456L593,453L594,452L594,449L595,448L595,447L596,446L596,444L597,443L597,440L598,439L598,438L599,437L599,436L602,433L602,432L604,430L604,429L607,426L607,425L615,417L616,417L621,412L623,412L624,411L625,411L627,409L628,409L629,408L631,408L633,406L634,406L635,405L637,405L638,404L641,404L642,403L644,403L645,402L651,402L652,401L951,401L952,402L952,463L951,464L734,464L733,465L727,465L726,466L723,466L722,467L720,467L719,468L716,468L715,469L714,469L713,470L712,470L711,471L708,471L707,472L705,472L704,473L703,473L701,475L700,475L699,476L698,476L696,478L695,478L693,480L692,480L689,483L688,483L686,485L685,485L679,491L679,492L677,494L676,494L676,495L671,500L671,501L669,503L669,504L667,506L667,507L666,508L666,509L665,510L665,511L664,512L664,513L663,514L663,515L661,517L661,518L660,519L660,521L659,522L659,523L658,524L658,526L657,527L657,530L656,531L656,537L655,538L655,543L654,544L654,835L887,835L887,631L771,631L771,692L802,692L803,693L803,772L802,773L752,773L751,772L751,562L752,561L951,561L952,562L952,835L1049,835L1049,562L1050,561L1104,561L1105,562L1105,835L1455,835L1455,372L1454,371L1454,364L1453,363L1453,359L1452,358L1452,356L1451,355L1451,353L1450,352L1450,350L1449,349L1449,347L1448,346L1448,345L1447,344L1447,342L1445,340L1445,339L1444,338L1444,337L1442,335L1442,334L1437,329L1437,328L1431,322L1430,322L1425,317L1424,317L1422,315L1421,315L1419,313L1418,313L1417,312L1416,312L1415,311L1414,311L1413,310L1410,310L1409,309L1408,309L1407,308L1405,308L1404,307L1402,307L1401,306L1397,306L1396,305L1390,305L1389,304L1358,304L1358,737L1357,738L1204,738L1203,737L1203,464L1050,464L1049,463L1049,304Z"
            fill="white"
            stroke="white"
            strokeWidth="20"
          />
        </svg>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-[5vmin] left-0 right-0 flex flex-col items-center z-[10000] px-[5vmin]">
        <div
          ref={progressBarRef}
          className="w-full h-[0.5vmin] bg-white/20 rounded-full overflow-hidden mb-[1vmin] origin-left opacity-0"
        >
          <div
            className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            style={{ transformOrigin: "left center" }}
          />
        </div>

        <div className="w-full flex justify-end">
          <div
            ref={progressTextRef}
            className="text-white text-[3vmin] font-bold font-sans opacity-0"
          >
            0%
          </div>
        </div>
      </div>

      <style jsx global>{`
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
        .loading-particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background-color: var(--color);
          border-radius: 50%;
          top: var(--y);
          left: var(--x);
          opacity: 0;
          animation: particle-fade-in 1s var(--delay) forwards;
          filter: blur(1px);
        }
        @keyframes particle-fade-in {
          to {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
