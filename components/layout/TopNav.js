"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav({ data }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-border/70 bg-surface/90 px-3 py-2 shadow-soft backdrop-blur-xl">
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/75 px-2 py-1 pr-3 text-foreground transition-colors hover:border-primary/35"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-primary/25">
            <Image
              src={data.profileImage}
              alt="Rajini Jonna profile"
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
          <span className="hidden font-display text-xs font-semibold tracking-wide sm:block">
            Rajini
          </span>
        </a>

        <nav className="no-scrollbar flex items-center gap-1 overflow-x-auto px-2 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-muted transition-colors hover:bg-panel hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel/70 text-muted transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={data.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel/70 text-muted transition-colors hover:border-accent/40 hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
