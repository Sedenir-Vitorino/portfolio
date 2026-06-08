"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Light mode background */}
      <Image
        src="/images/claro.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center dark:hidden"
        priority
      />
      {/* Dark mode background */}
      <Image
        src="/images/escuro.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center hidden dark:block"
        priority
      />

      {/* Light overlay: suaviza a área do texto à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent dark:hidden" />
      {/* Dark overlay: garante legibilidade no fundo escuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/75 via-zinc-950/35 to-zinc-950/5 hidden dark:block" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400/40 dark:border-white/15 text-xs text-zinc-500 dark:text-zinc-400 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
          {t.hero.available}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-zinc-900 dark:text-white mb-4">
          {t.hero.title}
        </h1>
        <p className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-zinc-500 dark:text-zinc-400 mb-8">
          {t.hero.subtitle}
        </p>

        <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors"
          >
            {t.hero.cta1}
            <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-400/50 dark:border-white/25 text-zinc-700 dark:text-zinc-200 text-sm font-medium hover:border-zinc-600 dark:hover:border-white/50 hover:bg-zinc-100/40 dark:hover:bg-white/10 transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
