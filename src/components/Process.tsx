"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const pr = t.process;

  return (
    <section className="py-28 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {pr.label}
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-sm">
            {pr.heading}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            {pr.subtext}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {pr.steps.map((step) => (
            <div key={step.number}>
              <span className="text-3xl font-semibold text-zinc-200 dark:text-zinc-700/80 block mb-5 tabular-nums">
                {step.number}
              </span>
              <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
