"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-zinc-900 dark:text-white">
          Sedenir
          <span className="text-zinc-400 dark:text-zinc-500">.dev</span>
        </span>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 order-last sm:order-none">
          © {new Date().getFullYear()} Sedenir Vitorino. {t.footer.rights}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:sedenirvitorino@gmail.com"
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://instagram.com/sedenir.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
