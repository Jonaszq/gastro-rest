"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageAnimations() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      const targetElement = document.getElementById(hash.slice(1));

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(targetElement, {
        offset: -24,
        duration: 1,
        immediate: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });

      window.history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleAnchorClick);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        document.removeEventListener("click", handleAnchorClick);
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
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

    });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      context.revert();
    };
  }, []);

  return null;
}