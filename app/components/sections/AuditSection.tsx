"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { auditBenefits } from "../site-data";

const slides = [
  {
    eyebrow: "01 / Fakty",
    title: "Co naprawdę blokuje wynik",
    text: "Zamiast ogólników pokazujemy ruchy, straty, braki w danych i miejsca, w których zespół traci czas każdego dnia.",
    accent: "Fakty bez filtra",
  },
  {
    eyebrow: "02 / Diagnoza",
    title: "Porządek w chaosie operacyjnym",
    text: "Układamy obserwacje w czytelną mapę: gdzie uciekają minuty, gdzie przepala się budżet i co najbardziej spowalnia zmianę.",
    accent: "Priorytety zamiast szumu",
  },
  {
    eyebrow: "03 / Plan",
    title: "Krótkie kroki, które da się wdrożyć",
    text: "Dostajesz plan zmian z kolejnością działań, tak żeby poprawa była szybka, realna i możliwa do utrzymania przez zespół.",
    accent: "Szybka implementacja",
  },
  {
    eyebrow: "04 / Efekt",
    title: "Rozwiązania, które zostają na dłużej",
    text: "Nie kończymy na raporcie. Zostawiamy prosty system pracy, który da się rozwijać bez powrotu do chaosu.",
    accent: "Stała poprawa",
  },
  {
    eyebrow: "05 / Wsparcie",
    title: "Jesteśmy obok do zamknięcia zmian",
    text: "Prowadzimy wdrożenie, doprecyzowujemy standardy i pomagamy zespołowi przejść od decyzji do praktyki.",
    accent: "Od decyzji do działania",
  },
];

export function AuditSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    const track = el.querySelector<HTMLElement>("[data-audit-track]");
    const firstReveal = el.querySelector<HTMLElement>("[data-audit-first-reveal]");

    const ctx = gsap.context(() => {
      if (firstReveal) {
        gsap.from(firstReveal.querySelectorAll("[data-audit-reveal]"), {
          y: 28,
          opacity: 0,
          stagger: 0.08,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: firstReveal, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      if (!track) return;

      const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 1.75, getScrollDistance() + window.innerHeight * 1.25)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: slides.length > 1 ? 1 / (slides.length - 1) : 1,
        },
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="audyt"
      className="relative min-h-[600vh] overflow-hidden border-t border-white/10 py-16 sm:py-20 lg:min-h-[600vh] lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_16%,rgba(255,214,160,0.12),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative px-0">
        <div data-audit-first-reveal className="mb-8 max-w-3xl px-0">
          <p data-audit-reveal className="text-[10px] uppercase tracking-[0.55em] text-white/45">Audyt prowadzący do działania</p>
          <h2 data-audit-reveal className="mt-4 text-4xl tracking-[-0.08em] text-white sm:text-5xl lg:text-[4.25rem]">
            Zaczynamy od faktów.
            <span className="mt-3 block font-semibold text-white/96">Kończymy na rozwiązaniach.</span>
          </h2>
          <p data-audit-reveal className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
            Ta sekcja jedzie w bok. Każdy kolejny panel pokazuje następny etap audytu, więc użytkownik dostaje większą, bardziej kinową prezentację zamiast statycznej ściany tekstu.
          </p>
        </div>

        <div className="relative h-[82vh] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.32)] lg:h-[86vh]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_90%_15%,rgba(255,214,160,0.14),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

          <div data-audit-track className="relative flex h-full w-max items-stretch gap-5 px-5 py-5 sm:px-6 sm:py-6">
            {slides.map((slide, index) => {
              const isFinalSlide = index === slides.length - 1;
              const isFactsSlide = index === 0;
              const isDiagnosisSlide = index === 1;
              const isPlanSlide = index === 2;
              const isEffectSlide = index === 3;

              return (
                <article
                  key={slide.eyebrow}
                  className={`audit-reveal flex h-full w-[84vw] max-w-[980px] flex-col justify-between rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-8 ${
                    isFactsSlide
                      ? "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-white backdrop-blur-md lg:w-[52vw]"
                      : isDiagnosisSlide
                        ? "border-black/10 bg-[#f5ead9] text-black lg:w-[58vw]"
                        : isPlanSlide
                          ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-white backdrop-blur-md lg:w-[58vw]"
                          : isEffectSlide
                            ? "border-white/10 bg-[#111111] text-white lg:w-[58vw]"
                            : "border-white/10 bg-white text-black lg:w-[52vw]"
                  }`}
                >
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.55em] ${isDiagnosisSlide || isFinalSlide ? "text-black/45" : "text-white/45"}`}>
                      {slide.eyebrow}
                    </p>
                    <h3 className={`mt-4 max-w-xl text-3xl tracking-[-0.06em] sm:text-5xl ${isDiagnosisSlide || isFinalSlide ? "" : "text-white"}`}>
                      {slide.title}
                    </h3>
                  </div>

                  {isFactsSlide && (
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      {auditBenefits.map((item) => (
                        <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {isDiagnosisSlide && (
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {[
                        { title: "Ruch", text: "gdzie zespół traci czas" },
                        { title: "Koszt", text: "co przepala marżę" },
                        { title: "Dane", text: "czego brakuje do decyzji" },
                      ].map((card) => (
                        <div key={card.title} className="rounded-[1.4rem] border border-black/10 bg-white/70 p-5 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                          <div className="text-[10px] uppercase tracking-[0.4em] text-black/45">{card.title}</div>
                          <div className="mt-3 text-lg font-semibold tracking-[-0.03em]">{card.text}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {isPlanSlide && (
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {[
                        "kolejność działań",
                        "szybkie zwycięstwa",
                        "jasna odpowiedzialność",
                        "wdrożenie bez przeciążenia",
                      ].map((item) => (
                        <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {isEffectSlide && (
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {[
                        "mniej chaosu",
                        "lepsze tempo pracy",
                        "czytelniejsze KPI",
                        "system, który zostaje",
                      ].map((item) => (
                        <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/78">
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {isFinalSlide && (
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-3 rounded-full border border-black/12 bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-zinc-800"
                      >
                        Umów audyt
                        <span aria-hidden="true">→</span>
                      </a>
                      <div className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-black/70">
                        przewijanie w bok
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}