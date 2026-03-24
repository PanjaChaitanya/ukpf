import { Mail, MessageCircle } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import Reveal from "@/components/ui/Reveal";

export default function FooterSection({ name, contact }) {
  return (
    <footer className="section-shell border-t border-border/70 pb-10 pt-7 text-sm text-muted">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {name}. Crafted with precision and clarity.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
