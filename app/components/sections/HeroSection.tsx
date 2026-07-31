"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LogoMark } from "../BrandLogo";
import { heroHighlights } from "../site-data";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });

      const badge = sectionRef.current!.querySelector('[data-hero-badge]');
      const title = sectionRef.current!.querySelector('[data-hero-title]');
      const copy = sectionRef.current!.querySelector('[data-hero-copy]');
      const actions = sectionRef.current!.querySelectorAll('[data-hero-actions] a');
      const highlights = sectionRef.current!.querySelectorAll('[data-hero-highlights] > *');
      const panel = sectionRef.current!.querySelector('[data-hero-panel]');
      const mark = sectionRef.current!.querySelector(':scope > .hero-watermark, [data-hero-mark]');

      // Watermark/logo: subtle scale and fade
      tl.from(mark, { scale: 0.7, opacity: 0, rotate: 6, duration: 1.4, ease: "back.out(1.4)" }, 0);

      // Badge: pop + fade
      tl.from(badge, { y: 28, scale: 0.85, opacity: 0, transformOrigin: "left center", duration: 0.9, ease: "back.out(1.1)" }, 0.12);

      // Title: split reveal (line by line) - slide up
      tl.from(title, { y: 48, opacity: 0, stagger: 0.1, duration: 1.0, ease: "power4.out" }, 0.2);

      // Copy: fade + slight x shift
      tl.from(copy, { x: -20, opacity: 0, duration: 0.9, ease: "power3.out" }, 0.35);

      // Actions/buttons: pop with stagger and rotation
      tl.from(actions, { scale: 0.86, opacity: 0, rotate: -6, stagger: 0.1, duration: 0.9, ease: "back.out(1.2)" }, 0.45);

      // Highlights: staggered upward reveal
      tl.from(highlights, { y: 28, opacity: 0, stagger: 0.08, ease: "back.out(1.1)", duration: 0.9 }, 0.55);

      // Panel image: slow scale in
      tl.from(panel, { scale: 1.12, opacity: 0, duration: 1.4, ease: "power3.out" }, 0.2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="o-nas" className="relative grid gap-10 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:py-10">
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 hero-watermark" data-hero-mark>
        <LogoMark className="select-none text-white/12 drop-shadow-[0_0_80px_rgba(255,255,255,0.22)] h-[40vh] w-[80vh] min-h-[220px] min-w-[220px] max-h-[640px] max-w-[640px]" />
      </div>

      <div className="relative z-10 max-w-3xl pt-2 lg:pt-8">
        <p data-hero-badge className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Audyt i optymalizacja gastronomii
        </p>

        <h1 data-hero-title className="max-w-2xl text-5xl leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl xl:text-7xl">
          Nie każ pracownikowi pracować szybciej.
          <span className="mt-2 block font-semibold text-white">Zaprojektuj pracę tak, żeby była łatwiejsza.</span>
        </h1>

        <p data-hero-copy className="mt-5 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
          Pomagamy restauracjom działać prościej, rentowniej i przewidywalnie. Bez raportów dla raportów, za to z planem, który da się wdrożyć od razu.
        </p>

        <div data-hero-actions className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:bg-zinc-200"
          >
            Umów audyt
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#wyniki"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-white/10"
          >
            Zobacz efekty
            <span aria-hidden="true">▸</span>
          </a>
        </div>

        <div data-hero-highlights className="mt-8 grid gap-3 sm:grid-cols-3">
          {heroHighlights.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-white/78 backdrop-blur-sm">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/18 text-[10px] text-white/90">
                ✓
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div data-hero-panel className="relative z-10 pt-2 lg:pt-0 lg:self-stretch lg:max-h-[77vh]">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_24%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] opacity-90 blur-3xl" />
        <div className="overflow-hidden lg:max-h-[77vh]">
          <div className="relative min-h-[55vh] overflow-hidden bg-black/40 lg:h-[77vh] lg:max-h-[75vh]">
            <Image
              src="/kobieta.jpg"
              alt="Kobieta"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.95)_10%,rgba(5,5,5,0.85)_20%,rgba(5,5,5,0.58)_40%,rgba(5,5,5,0.2)_66%,rgba(5,5,5,0)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
