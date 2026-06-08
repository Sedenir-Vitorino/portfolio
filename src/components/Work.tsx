"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Work() {
  const { t } = useLanguage();
  const wk = t.work;

  return (
    <section
      id="work"
      className="py-28 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {wk.label}
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-sm">
            {wk.heading}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            {wk.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {wk.projects.map((project) => (
            <div
              key={project.title}
              className="p-7 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
