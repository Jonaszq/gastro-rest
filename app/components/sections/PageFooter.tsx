"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandLogo } from "../BrandLogo";

export function PageFooter() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".flex > *"), {
        y: 30,
        scale: 0.92,
        opacity: 0,
        stagger: 0.07,
        duration: 0.95,
        ease: "back.out(1)",
        scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} data-section-reveal className="border-t border-white/10 pt-8 text-sm text-white/52">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <BrandLogo variant="stacked" className="items-start text-left" />
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/54">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-white/35">Oferta</div>
            <div>Finanse i KPI</div>
            <div>Organizacja pracy</div>
            <div>Procesy</div>
            <div>Systemy i narzędzia</div>
          </div>
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-white/35">Kontakt</div>
            <div>kontakt@gastro-rest.pl</div>
            <div>+48 000 000 000</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
