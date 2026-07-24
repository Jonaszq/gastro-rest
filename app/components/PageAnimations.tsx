"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-header-reveal]", {
        opacity: 0,
        y: -14,
        duration: 0.8,
        ease: "power3.out",
      });

      const heroTimeline = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });

      heroTimeline
        .from("[data-hero-badge]", { opacity: 0, y: 14 })
        .from("[data-hero-title]", { opacity: 0, y: 22 }, "-=0.55")
        .from("[data-hero-copy]", { opacity: 0, y: 18 }, "-=0.55")
        .from("[data-hero-actions]", { opacity: 0, y: 18 }, "-=0.5")
        .from("[data-hero-highlights] > *", { opacity: 0, y: 12, stagger: 0.08 }, "-=0.5")
        .from("[data-hero-panel]", { opacity: 0, y: 28, scale: 0.985 }, "-=0.9");

      gsap.utils.toArray<HTMLElement>("[data-section-reveal]").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}