import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sedenir Vitorino — Desenvolvedor Full Stack",
  description:
    "Desenvolvo sistemas personalizados, plataformas SaaS, dashboards e aplicações empresariais que ajudam empresas a automatizar processos e escalar operações.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Desenvolvimento de Software",
    "SaaS",
    "Sistemas Web",
    "Full Stack Developer",
    "Software Developer",
  ],
  authors: [{ name: "Sedenir Vitorino" }],
  openGraph: {
    title: "Sedenir Vitorino — Desenvolvedor Full Stack",
    description:
      "Construindo software personalizado que resolve problemas reais de negócio.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedenir Vitorino — Desenvolvedor Full Stack",
    description:
      "Construindo software personalizado que resolve problemas reais de negócio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
