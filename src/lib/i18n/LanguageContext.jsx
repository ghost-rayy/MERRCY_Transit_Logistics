import React, { createContext, useContext, useEffect, useState } from "react";
import { LOCALES, translations } from "./translations";

const STORAGE_KEY = "merrcy-lang";

const LanguageContext = createContext(null);

function getInitialLocale() {
  if (typeof window === "undefined") return "fr";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (LOCALES.includes(saved)) return saved;
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("en")) return "en";
  return "fr";
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next) => {
    if (LOCALES.includes(next)) setLocaleState(next);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = translations[locale] || translations.fr;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
