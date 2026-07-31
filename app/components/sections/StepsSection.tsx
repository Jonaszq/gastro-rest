"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "../site-data";

export function StepsSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".grid > *"), {
        y: 30,
        scale: 0.92,
        opacity: 0,
        stagger: 0.08,
        duration: 0.95,
        ease: "back.out(1)",
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-section-reveal className="border-t border-white/10 py-14">
      <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">
        Działamy step by step
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <Icon className="text-3xl text-white" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/62">
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute right-[-12px] top-1/2 hidden h-px w-6 bg-white/20 lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}