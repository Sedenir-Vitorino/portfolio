"use client";
import {
  Globe,
  BarChart3,
  HardHat,
  LayoutDashboard,
  Wrench,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons: LucideIcon[] = [
  Globe,
  BarChart3,
  HardHat,
  LayoutDashboard,
  Wrench,
  Code2,
];

export default function Services() {
  const { t } = useLanguage();
  const sv = t.services;

  return (
    <section
      id="services"
      className="py-28 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {sv.label}
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-sm">
            {sv.heading}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            {sv.subtext}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 dark:bg-zinc-800/60 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800/60">
          {sv.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-zinc-950 p-7 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  <Icon size={17} className="text-zinc-500 dark:text-zinc-400" />
                </div>
                <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
