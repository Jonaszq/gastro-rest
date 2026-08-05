type BrandLogoProps = {
  variant?: "stacked" | "horizontal";
  className?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BrandLogo({ variant = "horizontal", className = "" }: BrandLogoProps) {
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`.trim()}>
        <LogoMark className="h-12 w-25 text-white" />
        <div className="mt-4 text-sm tracking-[0.52em] text-white/95 sm:text-base">GASTRO - REST</div>
        <div className="mt-3 h-px w-16 bg-white/30" />
        <div className="mt-3 text-[11px] uppercase tracking-[0.55em] text-white/55 sm:text-[12px]">Reset. Focus. Serve.</div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <LogoMark className="h-14 w-25 text-white" />
      <div>
        <div className="text-sm tracking-[0.42em] text-white/95">GASTRO REST</div>
        <div className="text-[11px] uppercase tracking-[0.5em] text-white/45">Reset. Focus. Serve.</div>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  // Use a static image from /public as the logo mark so it's easy to swap
  // the graphic without changing SVG paths. The file `public/file.svg`
  // is used by default — replace it with your preferred logo.
  return <img src={`${basePath}/file.png`} alt="GASTRO REST" className={className} />;
}
