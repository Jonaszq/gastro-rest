"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { results } from "../site-data";

export function ResultsSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".grid > *"), {
        scale: 0.9,
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "back.out(1.2)",
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="wyniki" data-section-reveal className="border-t border-white/10 py-14">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-7 sm:p-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">Wyniki, które mówią same za siebie</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">Mierzymy efekt, nie wrażenie.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {results.map((result) => (
            <div key={result.label} className="rounded-[1.5rem] border border-white/10 bg-black/35 p-7 text-center">
              <div className="text-4xl font-semibold tracking-[-0.05em] text-white">{result.value}</div>
              <p className="mx-auto mt-3 max-w-40 text-sm leading-6 text-white/62">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
