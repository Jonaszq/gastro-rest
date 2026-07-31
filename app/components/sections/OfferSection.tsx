"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillars } from "../site-data";

export function OfferSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("h2, .grid > *"), {
        y: 40,
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.15)",
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="oferta" data-section-reveal className="border-t border-white/10 py-14">
      <div className="mb-8 flex items-end justify-between gap-6">
    <div className="flex items-center gap-4">
      <h2 className="text-3xl tracking-[-0.04em] text-white sm:text-4xl">
       Cztery filary lepszej gastronomii
      </h2>

    <div className="h-0.5 w-15 bg-white"></div>
  </div>

  <p className="hidden max-w-sm text-right text-sm leading-6 text-white/56 lg:block">
    Kompleksowe podejście. Jeden cel: wynik.
  </p>
</div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl text-sm uppercase tracking-[0.4em] text-white/70">
              {pillar.icon && <pillar.icon size={30} />}
            </div>
            <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
