"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ab = t.about;

  return (
    <section
      id="about"
      className="py-28 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {ab.label}
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-8 leading-tight whitespace-pre-line">
              {ab.heading}
            </h2>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">
              <p>{ab.p1}</p>
              <p>{ab.p2}</p>
              <p>{ab.p3}</p>
            </div>
          </div>

          <div className="space-y-2">
            {ab.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-5 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800/70 bg-zinc-50 dark:bg-zinc-900/40"
              >
                <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider pt-0.5 w-28 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
