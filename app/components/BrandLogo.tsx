type BrandLogoProps = {
  variant?: "stacked" | "horizontal";
  className?: string;
};

export function BrandLogo({ variant = "horizontal", className = "" }: BrandLogoProps) {
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`.trim()}>
        <LogoMark className="h-12 w-12 text-white" />
        <div className="mt-4 text-sm tracking-[0.52em] text-white/95 sm:text-base">GASTRO - REST</div>
        <div className="mt-3 h-px w-16 bg-white/30" />
        <div className="mt-3 text-[11px] uppercase tracking-[0.55em] text-white/55 sm:text-[12px]">Reset. Focus. Serve.</div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <LogoMark className="h-10 w-10 text-white" />
      <div>
        <div className="text-sm tracking-[0.42em] text-white/95">GASTRO REST</div>
        <div className="text-[11px] uppercase tracking-[0.5em] text-white/45">Reset. Focus. Serve.</div>
      </div>
    </div>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <path
        d="M12 16H41.5C49.5 16 54 20.5 54 28.2C54 36 48.9 40.6 41.1 40.6H28.4L50 58"
        stroke="currentColor"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 58L38 40.6"
        stroke="currentColor"
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16H34"
        stroke="currentColor"
        strokeWidth="4.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
