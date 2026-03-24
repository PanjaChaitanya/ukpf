"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-primary via-accent to-secondary"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
