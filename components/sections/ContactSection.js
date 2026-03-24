import { Mail, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="section-shell pb-20 pt-8 sm:pb-24 sm:pt-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let us connect on upcoming clinical programming opportunities"
        description="Reach out directly through the channels below."
      />

      <Reveal>
        <div className="max-w-2xl rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-7">
          <h3 className="font-display text-2xl font-semibold text-foreground">Contact Details</h3>
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
    </section>
  );
}
