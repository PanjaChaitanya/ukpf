"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Home,
  Layers,
  MessageCircle,
  Sparkles,
  UserRound,
  PhoneCall,
} from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import ThemeToggle from "@/components/ui/ThemeToggle";

const SECTION_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Exp", href: "#experience", icon: BriefcaseBusiness },
  { label: "Work", href: "#highlights", icon: Layers },
  { label: "Contact", href: "#contact", icon: PhoneCall },
];

export default function TopNav({ data }) {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = SECTION_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-border/70 bg-surface/90 px-3 py-2 shadow-soft backdrop-blur-xl">
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
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

          <nav className="no-scrollbar hidden items-center gap-1 overflow-x-auto px-2 text-sm sm:flex">
            {SECTION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`rounded-full px-3 py-2 transition-colors ${
                  activeHref === item.href
                    ? "bg-panel text-foreground"
                    : "text-muted hover:bg-panel hover:text-foreground"
                }`}
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

      <nav className="fixed inset-x-3 bottom-3 z-[55] sm:hidden" aria-label="Mobile section navigation">
        <div className="mx-auto max-w-md rounded-2xl border border-border/70 bg-surface/95 p-1 shadow-soft backdrop-blur-xl">
          <ul className="grid grid-cols-6 gap-1">
            {SECTION_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeHref === item.href;

              return (
                <li key={`mobile-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={() => setActiveHref(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex flex-col items-center justify-center rounded-xl px-1 py-1.5 text-[10px] font-medium transition-colors ${
                      isActive
                        ? "bg-panel text-foreground"
                        : "text-muted hover:bg-panel/70 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`mb-0.5 h-4 w-4 ${isActive ? "text-primary" : ""}`} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
