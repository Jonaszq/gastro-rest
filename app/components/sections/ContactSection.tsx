"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ContactSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll("p, h2, a"), {
        y: 38,
        scale: 0.92,
        opacity: 0,
        stagger: 0.1,
        duration: 0.95,
        ease: "back.out(1.1)",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="kontakt" data-section-reveal className="border-t border-white/10 py-14">
      <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">Gotowy na zmianę?</p>
          <h2 className="mt-3 text-4xl tracking-[-0.05em] text-white sm:text-5xl">Umów bezpłatną rozmowę i sprawdź, co możemy zrobić dla Twojego lokalu.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">Bez zobowiązań, bez szumu. Po prostu konkretna ocena, co warto poprawić najpierw.</p>
        </div>

        <a
          href="mailto:kontakt@gastro-rest.pl"
          className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200"
        >
          Umów audyt
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
