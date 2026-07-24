import { auditBenefits, auditChecklist } from "../site-data";

export function AuditSection() {
  return (
    <section id="audyt" data-section-reveal className="grid gap-8 border-t border-white/10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
        <div className="relative min-h-[360px] rounded-[1.5rem] border border-white/8 bg-[linear-gradient(145deg,#e8dfd2,#c6b7a2)] p-7 text-black shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.45em] text-black/55">Audyt 1.0</div>
              <div className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Lista rzeczy do poprawy</div>
            </div>
            <div className="rounded-full border border-black/15 bg-white/55 px-3 py-1 text-xs uppercase tracking-[0.3em]">01</div>
          </div>

          <div className="mt-8 space-y-3 rounded-[1.2rem] border border-black/10 bg-white/55 p-4 backdrop-blur-sm">
            {auditChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/20 text-[10px]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.4em] text-white/45">Audyt prowadzący do działania</p>
        <h2 className="mt-3 text-4xl tracking-[-0.05em] text-white sm:text-5xl">
          Zaczynamy od faktów.
          <span className="mt-2 block font-semibold">Kończymy na rozwiązaniach.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
          Nie sprzedajemy teorii. Zbieramy dane, obserwujemy operacje i przekładamy je na konkretne zmiany, które zespół może wdrożyć od razu.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {auditBenefits.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/75">
              ✓ {item}
            </div>
          ))}
        </div>

        <a
          href="#kontakt"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-black transition hover:bg-zinc-200"
        >
          Dowiedz się więcej
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
