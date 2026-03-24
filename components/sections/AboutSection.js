"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function AboutSection({ summary, about }) {
  const statements = about
    .split(". ")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (line.endsWith(".") ? line : `${line}.`));

  return (
    <section id="about" className="section-shell pt-8 sm:pt-10">
      <SectionHeading
        eyebrow="About"
        title="Precision-oriented programming for high-stakes clinical studies"
        description={summary}
      />

      <div className="rounded-3xl border border-border/80 bg-surface/85 p-6 shadow-soft sm:p-8">
        <div className="space-y-4">
          {statements.map((line, index) => (
            <Reveal key={line} delay={index * 0.06} y={16}>
              <motion.p
                className="text-pretty text-base leading-relaxed text-muted sm:text-lg"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                initial={{ opacity: 0.38 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {line}
              </motion.p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
