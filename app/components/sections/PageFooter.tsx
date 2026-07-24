import { BrandLogo } from "../BrandLogo";

export function PageFooter() {
  return (
    <footer data-section-reveal className="border-t border-white/10 pt-8 text-sm text-white/52">
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
