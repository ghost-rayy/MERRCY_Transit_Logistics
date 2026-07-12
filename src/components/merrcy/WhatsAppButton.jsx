import React, { useState } from "react";
import { MessageSquare, X, Bike, Truck } from "lucide-react";
import { TRANSIT, EMS } from "./contactInfo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-up">
          <a
            href={TRANSIT.whatsappPrefill}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-safety-orange text-raw-steel px-5 py-3 min-h-[48px] shadow-lg hover:bg-safety-orange hover:text-obsidian transition-all duration-300"
          >
            <Truck className="w-5 h-5 text-safety-orange" />
            <div>
              <div className="font-heading font-600 text-sm uppercase tracking-wide">{t.whatsapp.transit}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">{TRANSIT.phoneDisplay}</div>
            </div>
          </a>
          <a
            href={EMS.whatsappPrefill}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-safety-orange text-raw-steel px-5 py-3 min-h-[48px] shadow-lg hover:bg-safety-orange hover:text-obsidian transition-all duration-300"
          >
            <Bike className="w-5 h-5 text-safety-orange" />
            <div>
              <div className="font-heading font-600 text-sm uppercase tracking-wide">{t.whatsapp.ems}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">{EMS.phoneDisplay}</div>
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-safety-orange text-obsidian flex items-center justify-center pulse-ring hover:scale-105 transition-transform focus-visible-ring"
        aria-label={t.whatsapp.aria}
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
