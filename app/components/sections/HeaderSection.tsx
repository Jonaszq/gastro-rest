import { navItems } from "../site-data";
import { BrandLogo } from "../BrandLogo";

export function HeaderSection() {
  return (
    <header data-header-reveal className="flex items-center justify-between border-b border-white/10 pb-5 pt-1">
      <div className="flex items-center gap-3">
        <BrandLogo />
      </div>

      <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.35em] text-white/72 lg:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition-colors hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#kontakt"
        className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/6 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.32em] text-white transition hover:border-white/35 hover:bg-white/12"
      >
        Umów audyt
        <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
