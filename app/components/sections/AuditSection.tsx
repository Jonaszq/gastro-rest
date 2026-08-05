"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AuditSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const underline = underlineRef.current;
    const subtitle = subtitleRef.current;
    const background = backgroundRef.current;

    if (
      !section ||
      !title ||
      !underline ||
      !subtitle ||
      !background
    )
      return;

    const ctx = gsap.context(() => {
      gsap.set([title, underline, subtitle, background], {
        force3D: true,
        willChange: "transform",
      });

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(subtitle, {
        opacity: 0,
        y: 30,
      });

      gsap.set(background, {
        y: -120,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${title.scrollWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        title,
        {
          x: () => -(title.scrollWidth - window.innerWidth + 150),
          scale: 1.08,
        },
        0
      )
        .to(
          underline,
          {
            scaleX: 1,
          },
          0
        )
        .to(
          subtitle,
          {
            opacity: 1,
            y: 0,
          },
          0.15
        )
        .to(
          background,
          {
            y: 120,
            scale: 1.1,
          },
          0
        );

      gsap.from(title, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[520vh] overflow-hidden bg-black"
      style={{
        marginLeft: "calc(50% - 50vw)",
        width: "100vw",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          ref={backgroundRef}
          className="
            whitespace-nowrap
            text-[30vw]
            font-black
            uppercase
            tracking-[-0.08em]
            text-white/[0.03]
            select-none
          "
        >
          GASTRO
        </span>
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative z-10 flex w-max flex-col">
          <h1
            ref={titleRef}
            className="
              whitespace-nowrap
              font-black
              uppercase
              leading-none
              tracking-[-0.08em]
              text-[clamp(6rem,15vw,17rem)]
              select-none
              transform-gpu
            "
            style={{
              background:
                "linear-gradient(90deg,#ffffff 0%,#d7d7d7 50%,#ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,.08)",
              transform: "translate3d(0,0,0)",
            }}
          >
            WE BUILD — PROFITABLE RESTAURANTS
          </h1>

          <div className="mt-6 overflow-hidden">
            <div
              ref={underlineRef}
              className="
                h-[3px]
                w-full
                origin-left
                bg-gradient-to-r
                from-white
                via-white/80
                to-transparent
              "
            />
          </div>

          <p
            ref={subtitleRef}
            className="
              mt-8
              ml-2
              text-sm
              uppercase
              tracking-[0.65em]
              text-white/45
              select-none
            "
          >
            AUDIT • STRATEGY • OPTIMIZATION • GROWTH
          </p>
        </div>
      </div>
    </section>
  );
}