import { heroHighlights } from "../site-data";

export function HeroSection() {
  return (
    <section id="o-nas" className="grid gap-10 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:py-10">
      <div className="max-w-3xl pt-2 lg:pt-8">
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

      <div data-hero-panel className="relative pt-2 lg:pt-6">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_24%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] opacity-90 blur-3xl" />
        <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/4 p-4 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="grid gap-4 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(20,20,20,0.98),rgba(10,10,10,0.88))] p-5 sm:grid-cols-[1.2fr_0.8fr] sm:p-6">
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]" />
              <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.34em] text-white/60">
                  <span>Audyt 1.0</span>
                  <span>Kitchen flow</span>
                </div>
                <div>
                  <div className="h-1 w-24 rounded-full bg-white/35" />
                  <div className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Start od faktów.</div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/72 sm:text-base">
                    Analiza 360° pokazuje gdzie tracisz czas, pieniądze i spokój zespołu. Potem przekładamy to na prosty plan naprawy.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["Straty", "-18%"],
                    ["Kolejki", "-24%"],
                    ["Efekt", "+31%"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/8 bg-black/40 p-3 backdrop-blur">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">{label}</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-6">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">Co dostajesz</p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-white/74">
                  <li>• analizę 360° lokalu i procesów</li>
                  <li>• identyfikację strat i wąskich gardeł</li>
                  <li>• rekomendacje z priorytetami wdrożenia</li>
                  <li>• prosty system do monitorowania efektów</li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-white/45">Czas</div>
                  <div className="mt-3 text-3xl font-semibold text-white">7 dni</div>
                  <div className="mt-2 text-sm text-white/64">od diagnozy do planu działań</div>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-6">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-white/45">Wynik</div>
                  <div className="mt-3 text-3xl font-semibold text-white">Jasny</div>
                  <div className="mt-2 text-sm text-white/64">zamiast ogólnych rekomendacji</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
