import React from "react";
import { Ship, Truck, ShieldCheck, PackageSearch, FileCheck, Globe2, Bike, Phone, MessageSquare } from "lucide-react";
import { EMS } from "./contactInfo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Ship, Truck, ShieldCheck, PackageSearch, FileCheck, Globe2];

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  const services = s.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background">
      <div className="container-tactical mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-safety-orange"></div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-safety-orange">{s.label}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <h2 className="font-heading font-700 text-raw-steel text-4xl md:text-6xl leading-[0.95]">
            {s.titleBefore} <span className="text-safety-orange">{s.titleHighlight}</span> {s.titleAfter}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {s.intro}
          </p>
        </div>
      </div>

      <div className="container-tactical">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500 border border-border/50 relative"
            >
              <div className="font-mono text-xs text-muted-foreground/50 mb-6">
                0{i + 1} / 0{services.length}
              </div>

              <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-safety-orange group-hover:bg-safety-orange/10 transition-all duration-500 mb-6">
                <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-safety-orange transition-colors duration-500" />
              </div>

              <h3 className="font-heading font-600 text-raw-steel text-xl md:text-2xl mb-4 group-hover:text-safety-orange transition-colors duration-500">
                {service.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-safety-orange transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div id="ems" className="container-tactical mt-16 md:mt-24">
        <div className="border border-border bg-card overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] gap-0">
            <div className="flex flex-col items-center justify-center gap-4 bg-safety-orange text-obsidian p-10 md:p-12 md:min-w-[220px]">
              <div className="w-16 h-16 border-2 border-obsidian flex items-center justify-center font-heading font-700 text-3xl leading-none">
                M
              </div>
              <Bike className="w-10 h-10" />
              <div className="text-center">
                <div className="font-heading font-700 text-xl tracking-wide">MERRCY EMS</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1 opacity-80">Speedster</div>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-safety-orange"></div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-safety-orange">
                  {s.emsLabel}
                </span>
              </div>
              <h3 className="font-heading font-700 text-raw-steel text-2xl md:text-4xl leading-tight mb-3">
                {s.emsTitle}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2 max-w-2xl">
                {s.emsDescBefore}{" "}
                <span className="text-raw-steel font-600">MERRCY EMS</span> {s.emsDescAfter}
              </p>
              <p className="font-heading font-600 text-safety-orange text-xl md:text-2xl mb-8 tracking-wide">
                {s.emsSlogan}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${EMS.phoneTel}`}
                  className="inline-flex items-center justify-center gap-3 bg-safety-orange text-obsidian font-heading font-600 uppercase text-sm tracking-wider px-6 py-4 min-h-[48px] hover:brightness-110 transition-all focus-visible-ring"
                >
                  <Phone className="w-5 h-5" />
                  Tel: {EMS.phoneDisplay}
                </a>
                <a
                  href={EMS.whatsappPrefill}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-safety-orange text-safety-orange font-heading font-600 uppercase text-sm tracking-wider px-6 py-4 min-h-[48px] hover:bg-safety-orange hover:text-obsidian transition-all focus-visible-ring"
                >
                  <MessageSquare className="w-5 h-5" />
                  {s.emsWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
