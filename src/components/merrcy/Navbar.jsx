import React, { useState, useEffect } from "react";
import { Menu, X, Anchor, Plane, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { TRANSIT } from "./contactInfo";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-safety-orange text-obsidian overflow-hidden whitespace-nowrap">
        <div className="flex items-center animate-ticker py-1.5 text-xs font-mono font-semibold uppercase tracking-widest">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-6 flex items-center gap-1.5"><Anchor className="w-3 h-3" /> {t.nav.tickerPort}</span>
              <span className="px-6 flex items-center gap-1.5"><Plane className="w-3 h-3" /> {t.nav.tickerAirport}</span>
              <span className="px-6 flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> {t.nav.tickerShield}</span>
              <span className="px-6">{t.nav.tickerBrand}</span>
            </div>
          ))}
        </div>
      </div>

      <nav className={`fixed top-[30px] left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="container-tactical flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-3 focus-visible-ring">
            <div className="w-11 h-11 bg-safety-orange flex items-center justify-center font-heading font-700 text-obsidian text-xl leading-none">
              M
            </div>
            <div className="leading-none">
              <div className="font-heading font-600 text-raw-steel text-lg tracking-wide">MERRCY</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">{t.nav.logoSub}</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-safety-orange transition-colors duration-300 focus-visible-ring"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${TRANSIT.phoneTel}`}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-raw-steel hover:text-safety-orange transition-colors focus-visible-ring min-h-[48px]"
            >
              <Phone className="w-3.5 h-3.5 text-safety-orange shrink-0" />
              <span className="hidden lg:inline">{t.nav.tel}</span> {TRANSIT.phoneDisplay}
            </a>
            <a
              href={TRANSIT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-safety-orange transition-colors focus-visible-ring min-h-[48px]"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <LanguageSwitcher />
            <a
              href="#contact"
              className="bg-safety-orange text-obsidian font-heading font-600 uppercase text-sm tracking-wider px-6 py-3 hover:brightness-110 transition-all duration-300 focus-visible-ring min-h-[48px] flex items-center"
            >
              {t.nav.quote}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-raw-steel focus-visible-ring p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label={t.nav.menu}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container-tactical py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading uppercase text-lg tracking-wide text-raw-steel hover:text-safety-orange transition-colors py-3 border-b border-border/50 focus-visible-ring"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${TRANSIT.phoneTel}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 font-heading uppercase text-lg tracking-wide text-raw-steel hover:text-safety-orange transition-colors py-3 border-b border-border/50 focus-visible-ring"
              >
                <Phone className="w-5 h-5 text-safety-orange" />
                {TRANSIT.phoneDisplay}
              </a>
              <a
                href={TRANSIT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 font-heading uppercase text-lg tracking-wide text-raw-steel hover:text-safety-orange transition-colors py-3 border-b border-border/50 focus-visible-ring"
              >
                <MessageSquare className="w-5 h-5 text-safety-orange" />
                WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-safety-orange text-obsidian font-heading font-600 uppercase text-sm tracking-wider px-6 py-3 mt-4 text-center min-h-[48px] flex items-center justify-center"
              >
                {t.nav.quote}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
