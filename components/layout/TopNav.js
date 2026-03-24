"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
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
          className="font-display text-sm font-semibold tracking-wide text-foreground"
        >
          RJ
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
