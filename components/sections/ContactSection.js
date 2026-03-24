"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone, SendHorizontal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection({ contact }) {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 3200);
  };

  return (
    <section id="contact" className="section-shell pb-20 pt-8 sm:pb-24 sm:pt-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let us connect on upcoming clinical programming opportunities"
        description="Reach out directly or leave a short message below."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-7">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Contact Details
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Open to strategic roles in statistical programming, submission delivery,
              and clinical data quality leadership.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
              >
                <Mail className="h-4 w-4 text-primary" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
              >
                <Phone className="h-4 w-4 text-primary" />
                {contact.phone}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30"
              >
                <LinkedInIcon className="h-4 w-4 text-primary" />
                LinkedIn Profile
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-panel px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/40"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-7"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-xl border border-border bg-panel px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 rounded-xl border border-border bg-panel px-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-foreground" htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl border border-border bg-panel px-3 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Share the opportunity or collaboration context"
                />
              </label>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs text-muted">Frontend-only form interaction demo</p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -1 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
              >
                Send Message
                <SendHorizontal className="h-4 w-4" />
              </motion.button>
            </div>

            <AnimatePresence>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 rounded-xl border border-accent/30 bg-accent/15 px-4 py-3 text-sm font-medium text-accent-strong"
                  role="status"
                >
                  Message staged successfully. Rajini will get back to you soon.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
