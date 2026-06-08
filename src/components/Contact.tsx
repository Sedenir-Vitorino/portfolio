"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const ct = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow";

  return (
    <section
      id="contact"
      className="py-28 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
          {ct.label}
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-5 leading-tight whitespace-pre-line">
              {ct.heading}
            </h2>
            <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
              {ct.subtext}
            </p>

            <div className="space-y-3">
              <a
                href="mailto:sedenirvitorino@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors shrink-0">
                  <Mail size={15} />
                </div>
                sedenirvitorino@gmail.com
              </a>
              <a
                href="https://instagram.com/sedenirvitorino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors shrink-0">
                  <InstagramIcon />
                </div>
                @sedenirvitorino
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                {ct.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={ct.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                {ct.emailLabel}
              </label>
              <input
                type="email"
                required
                placeholder={ct.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                {ct.messageLabel}
              </label>
              <textarea
                required
                rows={5}
                placeholder={ct.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                status === "error"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100"
              }`}
            >
              {status === "idle" && (
                <>
                  {ct.submit}
                  <Send size={14} />
                </>
              )}
              {status === "sending" && ct.sending}
              {status === "sent" && ct.sent}
              {status === "error" && ct.error}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
