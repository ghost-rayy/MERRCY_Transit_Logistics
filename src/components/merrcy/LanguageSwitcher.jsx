import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSwitcher({ className = "" }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center border border-border font-mono text-[10px] uppercase tracking-widest ${className}`}
      role="group"
      aria-label={t.lang.aria}
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`px-2.5 py-1.5 min-h-[36px] transition-colors focus-visible-ring ${
          locale === "fr"
            ? "bg-safety-orange text-obsidian"
            : "text-muted-foreground hover:text-safety-orange"
        }`}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1.5 min-h-[36px] transition-colors focus-visible-ring ${
          locale === "en"
            ? "bg-safety-orange text-obsidian"
            : "text-muted-foreground hover:text-safety-orange"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
