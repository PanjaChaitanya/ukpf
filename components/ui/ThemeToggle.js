"use client";

import { useEffect } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

const THEME_KEY = "rajini-portfolio-theme";

function applyTheme(theme) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  useEffect(() => {
    applyTheme(getPreferredTheme());
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/90 text-muted shadow-soft transition-colors hover:text-foreground"
      aria-label="Toggle theme"
    >
      <SunMedium className="hidden h-4 w-4 dark:block" />
      <MoonStar className="h-4 w-4 dark:hidden" />
    </motion.button>
  );
}
