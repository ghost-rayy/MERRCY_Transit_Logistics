import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const OPTIONS = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({ className = "" }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center border border-border font-mono text-[10px] uppercase tracking-widest ${className}`}
      role="group"
      aria-label={t.lang.aria}
    >
      {OPTIONS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`px-2.5 py-1.5 min-h-[36px] transition-colors focus-visible-ring ${
            locale === code
              ? "bg-safety-orange text-obsidian"
              : "text-muted-foreground hover:text-safety-orange"
          }`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
