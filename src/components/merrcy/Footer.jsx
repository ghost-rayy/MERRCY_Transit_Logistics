import React from "react";
import { ArrowUp, Bike, Phone } from "lucide-react";
import { TRANSIT, EMS, GHANA } from "./contactInfo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const navLinks = [
    { label: f.home, href: "#hero" },
    { label: f.services, href: "#services" },
    { label: f.emsExpress, href: "#ems" },
    { label: f.about, href: "#about" },
    { label: f.contact, href: "#contact" },
  ];

  return (
    <footer className="relative bg-obsidian border-t border-border pt-16 pb-8">
      <div className="container-tactical">
        <a
          href="#ems"
          className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-border bg-card p-6 md:p-8 hover:border-safety-orange transition-colors focus-visible-ring group"
        >
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 shrink-0 bg-safety-orange text-obsidian flex flex-col items-center justify-center">
              <span className="font-heading font-700 text-lg leading-none">M</span>
              <Bike className="w-4 h-4 mt-0.5" />
            </div>
            <div>
              <p className="font-heading font-600 text-raw-steel text-lg md:text-xl leading-snug group-hover:text-safety-orange transition-colors">
                {f.emsTitle}
              </p>
              <p className="text-muted-foreground mt-1">
                {f.emsDescBefore} <span className="text-raw-steel font-600">MERRCY EMS</span> {f.emsDescAfter}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-safety-orange shrink-0">
            <Phone className="w-3.5 h-3.5" />
            {EMS.phoneDisplay}
          </div>
        </a>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-safety-orange flex items-center justify-center font-heading font-700 text-obsidian text-xl leading-none">
                M
              </div>
              <div className="leading-none">
                <div className="font-heading font-600 text-raw-steel text-lg tracking-wide">MERRCY TRANSIT</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Logistics SARL</div>
              </div>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-6">
              {f.brandDesc}
            </p>
            <div className="flex gap-4">
              <a
                href={TRANSIT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-safety-orange transition-colors focus-visible-ring"
              >
                WhatsApp
              </a>
              <a
                href="http://www.merrcytransit.com"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-safety-orange transition-colors focus-visible-ring"
              >
                www.merrcytransit.com
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety-orange mb-4">{f.navigation}</div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-base text-muted-foreground hover:text-safety-orange transition-colors focus-visible-ring">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety-orange mb-4">{f.contact}</div>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>{f.address1}</li>
              <li>{f.address2}</li>
              <li>
                <a href={`tel:${TRANSIT.phoneTel}`} className="hover:text-safety-orange transition-colors focus-visible-ring">
                  {TRANSIT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${GHANA.phoneTel}`} className="hover:text-safety-orange transition-colors focus-visible-ring">
                  {GHANA.phoneDisplay}
                </a>
              </li>
              <li className="pt-2 border-t border-border/50">
                <span className="font-mono text-[10px] uppercase tracking-widest text-safety-orange block mb-1">{f.emsExpress}</span>
                <a href={`tel:${EMS.phoneTel}`} className="hover:text-safety-orange transition-colors focus-visible-ring">
                  {EMS.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-border">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{f.partners}</span>
            <span className="font-heading font-700 text-lg text-muted-foreground/60">NSIA</span>
            <span className="font-heading font-700 text-lg text-muted-foreground/60">SUNU</span>
          </div>
          <a
            href="#hero"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-safety-orange transition-colors focus-visible-ring"
          >
            <ArrowUp className="w-4 h-4" />
            {f.backTop}
          </a>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} MERRCY LOGISTICS SARL — {f.rights}
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            {f.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
