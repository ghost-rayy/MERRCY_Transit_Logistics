import React from "react";
import { ArrowRight, Anchor, ShieldCheck, Truck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const heroImage = "https://media.base44.com/images/public/6a515904ebc504448d8a93f4/a89a8af62_generated_27fafd5c.png";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const stats = [
    { icon: Truck, label: h.statTransport, value: "7j/7" },
    { icon: ShieldCheck, label: h.statInsurance, value: "NSIA + SUNU" },
    { icon: Anchor, label: h.statTransit, value: h.statTransitValue },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="MERRCY TRANSIT secure logistics hub at Conakry Port at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40"></div>
      </div>

      <div className="absolute inset-0 z-10 grid-lines opacity-30"></div>

      <div className="relative z-20 container-tactical w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-safety-orange"></div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-safety-orange">
              {h.tag}
            </span>
          </div>

          <h1 className="font-heading font-700 text-raw-steel text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            {h.titleBefore} <span className="text-safety-orange text-glow">+</span> {h.titleAfter}
          </h1>
          <p className="font-heading font-400 text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl leading-snug">
            {h.slogan1}<br />
            <span className="text-raw-steel">{h.slogan2}</span>
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
            {h.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-safety-orange text-obsidian font-heading font-600 uppercase text-base tracking-wider px-8 py-4 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 min-h-[48px] focus-visible-ring group"
            >
              {h.ctaQuote}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="border border-border text-raw-steel font-heading font-500 uppercase text-base tracking-wider px-8 py-4 hover:border-safety-orange hover:text-safety-orange transition-all duration-300 flex items-center justify-center min-h-[48px] focus-visible-ring"
            >
              {h.ctaServices}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-12 mt-16 pt-8 border-t border-border/50 max-w-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <stat.icon className="w-6 h-6 text-safety-orange" />
                <div className="font-heading font-600 text-raw-steel text-lg md:text-xl">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
