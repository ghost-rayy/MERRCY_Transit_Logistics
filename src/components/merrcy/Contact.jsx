import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { TRANSIT, EMS, GHANA } from "./contactInfo";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const subjects = c.subjects;
  const defaultSubject = subjects[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: defaultSubject,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      subject: defaultSubject,
    }));
  }, [defaultSubject]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await base44.entities.ContactSubmission.create(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: defaultSubject, message: "" });
    } catch (err) {
      setError(c.error);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: c.hqLabel,
      lines: c.hqLines,
    },
    {
      icon: Phone,
      label: c.phoneLabel,
      lines: [TRANSIT.phoneDisplay, GHANA.phoneDisplay, `EMS: ${EMS.phoneDisplay}`],
      links: [`tel:${TRANSIT.phoneTel}`, `tel:${GHANA.phoneTel}`, `tel:${EMS.phoneTel}`],
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["contact@merrcytransit.com"],
      links: ["mailto:contact@merrcytransit.com"],
    },
    {
      icon: Clock,
      label: c.hoursLabel,
      lines: c.hours,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      <div className="relative container-tactical">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-safety-orange"></div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-safety-orange">{c.label}</span>
        </div>
        <h2 className="font-heading font-700 text-raw-steel text-4xl md:text-6xl leading-[0.95] mb-6 max-w-3xl">
          {c.titleBefore} <span className="text-safety-orange">{c.titleHighlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16 md:mb-24">
          {c.intro}
        </p>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          <div className="bg-card p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-widest text-safety-orange mb-8">{c.coords}</div>
            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-border">
                    <info.icon className="w-5 h-5 text-safety-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{info.label}</div>
                    <div className="space-y-1">
                      {info.lines.map((line, j) =>
                        info.links && info.links[j] ? (
                          <a key={j} href={info.links[j]} className="block text-base text-raw-steel hover:text-safety-orange transition-colors focus-visible-ring">
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-base text-raw-steel leading-relaxed">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <a
                href={TRANSIT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-card border border-safety-orange text-safety-orange font-heading font-600 uppercase text-sm tracking-wider px-6 py-4 hover:bg-safety-orange hover:text-obsidian transition-all duration-300 min-h-[48px] focus-visible-ring"
              >
                <MessageSquare className="w-5 h-5" />
                Transit
              </a>
              <a
                href={EMS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-card border border-safety-orange text-safety-orange font-heading font-600 uppercase text-sm tracking-wider px-6 py-4 hover:bg-safety-orange hover:text-obsidian transition-all duration-300 min-h-[48px] focus-visible-ring"
              >
                <MessageSquare className="w-5 h-5" />
                EMS
              </a>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{c.location}</div>
              <div className="relative w-full h-64 border border-border overflow-hidden">
                <iframe
                  title="MERRCY TRANSIT — Conakry, Guinée"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-13.75%2C9.45%2C-13.55%2C9.60&layer=mapnik&marker=9.50,-13.70"
                  className="w-full h-full grayscale invert contrast-125"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-widest text-safety-orange mb-2">{c.formLabel}</div>
            <h3 className="font-heading font-600 text-2xl text-raw-steel mb-8">{c.formTitle}</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 border border-safety-orange/30 bg-safety-orange/5">
                <CheckCircle2 className="w-16 h-16 text-safety-orange mb-6" />
                <h4 className="font-heading font-600 text-xl text-raw-steel mb-2">{c.successTitle}</h4>
                <p className="text-muted-foreground max-w-sm">
                  {c.successMsg}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs uppercase tracking-widest text-safety-orange hover:text-raw-steel transition-colors focus-visible-ring"
                >
                  {c.newRequest}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {c.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-raw-steel px-4 py-3 min-h-[48px] focus:outline-none focus:border-safety-orange transition-colors"
                    placeholder={c.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {c.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-raw-steel px-4 py-3 min-h-[48px] focus:outline-none focus:border-safety-orange transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {c.phoneFieldLabel}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-raw-steel px-4 py-3 min-h-[48px] focus:outline-none focus:border-safety-orange transition-colors"
                    placeholder="+224 ..."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {c.subjectLabel}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-raw-steel px-4 py-3 min-h-[48px] focus:outline-none focus:border-safety-orange transition-colors"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-card text-raw-steel">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {c.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-raw-steel px-4 py-3 min-h-[48px] focus:outline-none focus:border-safety-orange transition-colors resize-y"
                    placeholder={c.messagePlaceholder}
                  />
                </div>

                {error && (
                  <div className="border border-destructive/50 bg-destructive/10 text-destructive px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-safety-orange text-obsidian font-heading font-600 uppercase text-base tracking-wider px-8 py-4 hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 min-h-[48px] focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin"></div>
                      {c.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {c.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
