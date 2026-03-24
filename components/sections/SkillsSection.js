"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell pt-8 sm:pt-10">
      <SectionHeading
        eyebrow="Skillset"
        title="Deep clinical programming capabilities, structured by outcome"
        description="A focused skill matrix across SAS execution, CDISC standards, reporting quality, and regulatory alignment."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <Reveal key={skillGroup.category} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-border bg-surface p-6 shadow-soft transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {skillGroup.category}
                </h3>
                <span className="text-sm font-semibold text-primary">
                  {skillGroup.proficiency}%
                </span>
              </div>

              <div className="mb-5 h-2 rounded-full bg-panel">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skillGroup.proficiency}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <ul className="grid gap-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
