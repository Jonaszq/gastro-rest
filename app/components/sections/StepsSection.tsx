import { steps } from "../site-data";

export function StepsSection() {
  return (
    <section data-section-reveal className="border-t border-white/10 py-14">
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