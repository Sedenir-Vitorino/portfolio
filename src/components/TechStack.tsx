"use client";
import { useLanguage } from "@/context/LanguageContext";

const stack = [
  { category: { pt: "Frontend", en: "Frontend" }, items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: { pt: "Backend", en: "Backend" }, items: ["Node.js", "NestJS"] },
  { category: { pt: "Banco de Dados", en: "Database" }, items: ["PostgreSQL", "MySQL"] },
  { category: { pt: "Infraestrutura", en: "Infrastructure" }, items: ["Docker", "Linux", "Nginx"] },
];

export default function TechStack() {
  const { t, language } = useLanguage();
  const ts = t.techStack;

  return (
    <section className="py-28 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {ts.label}
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-sm">
            {ts.heading}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            {ts.subtext}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stack.map((group) => (
            <div key={group.category.en}>
              <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
                {group.category[language]}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
