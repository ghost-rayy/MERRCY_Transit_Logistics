import React from "react";
import { ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const aboutImage = "https://media.base44.com/images/public/6a515904ebc504448d8a93f4/b8429c049_generated_image.png";
const portImage = "https://media.base44.com/images/public/6a515904ebc504448d8a93f4/6f904880b_generated_14ec078c.png";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      <div className="relative container-tactical">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-safety-orange"></div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-safety-orange">{a.label}</span>
        </div>
        <h2 className="font-heading font-700 text-raw-steel text-4xl md:text-6xl leading-[0.95] mb-8 max-w-4xl">
          {a.titleBefore} <span className="text-safety-orange">{a.titleHighlight}</span> {a.titleAfter}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-raw-steel font-600">MERRCY LOGISTICS SARL</span>{a.intro1Before}{" "}
            <span className="text-safety-orange font-600">MERRCY TRANSIT</span>{a.intro1After}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {a.intro2Before}{" "}
            <span className="text-raw-steel font-600">{a.intro2Highlight}</span>{a.intro2After}
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-safety-orange"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{a.forceLabel}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-10 md:p-12 relative group">
              <Truck className="w-10 h-10 text-muted-foreground mb-6" />
              <h3 className="font-heading font-600 text-2xl text-raw-steel mb-3">{a.movementTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.movementDesc}</p>
            </div>

            <div className="bg-card p-10 md:p-12 relative group">
              <ShieldCheck className="w-10 h-10 text-safety-orange mb-6" />
              <h3 className="font-heading font-600 text-2xl text-safety-orange mb-3">{a.protectionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.protectionDesc}</p>
            </div>
          </div>

          <div className="bg-safety-orange text-obsidian py-6 px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-heading font-600 text-lg md:text-xl uppercase tracking-wide">
              {a.fusionMain}
            </p>
            <p className="font-mono text-sm uppercase tracking-wider">
              {a.fusionSub}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border mb-16 md:mb-24">
          <div className="bg-background p-10 md:p-12">
            <div className="font-mono text-xs uppercase tracking-widest text-safety-orange mb-4">{a.visionLabel}</div>
            <h3 className="font-heading font-600 text-2xl md:text-3xl text-raw-steel mb-4 leading-tight">
              {a.visionTitle}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{a.visionDesc}</p>
          </div>

          <div className="bg-background p-10 md:p-12">
            <div className="font-mono text-xs uppercase tracking-widest text-safety-orange mb-4">{a.missionLabel}</div>
            <h3 className="font-heading font-600 text-2xl md:text-3xl text-raw-steel mb-4 leading-tight">
              {a.missionTitle}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{a.missionDesc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border mb-16 md:mb-24">
          {a.values.map((value, i) => (
            <div key={i} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500">
              <div className="font-heading font-700 text-5xl text-safety-orange/20 group-hover:text-safety-orange/40 transition-colors mb-4">
                {value.num}
              </div>
              <h4 className="font-heading font-600 text-xl text-raw-steel mb-3">{value.title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-border bg-background p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">{a.partnersLabel}</div>
              <p className="font-heading font-600 text-xl text-raw-steel">
                {a.partnersTitle}
              </p>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="font-heading font-700 text-3xl text-raw-steel tracking-wide">NSIA</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{a.insurance}</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="font-heading font-700 text-3xl text-raw-steel tracking-wide">SUNU</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{a.insurance}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border mt-16">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img src={aboutImage} alt="MERRCY TRANSIT logistics coordinator in high-vis safety gear at industrial site" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 font-mono text-xs uppercase tracking-widest text-raw-steel">{a.fieldLabel}</div>
          </div>
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img src={portImage} alt="MERRCY TRANSIT cargo operations at Conakry Port container terminal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 font-mono text-xs uppercase tracking-widest text-raw-steel">{a.portLabel}</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-heading font-600 text-2xl md:text-4xl text-raw-steel leading-tight">
            MERRCY TRANSIT: <span className="text-safety-orange">{a.tagline1}</span><br />
            {a.tagline2}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-8 font-heading font-600 uppercase text-sm tracking-wider text-safety-orange hover:text-raw-steel transition-colors min-h-[48px] focus-visible-ring group"
          >
            {a.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
