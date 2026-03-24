"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function HighlightsSection({ highlights }) {
  return (
    <section id="highlights" className="section-shell pt-8 sm:pt-10">
      <SectionHeading
        eyebrow="Work Highlights"
        title="Key contributions translated into measurable delivery value"
        description="Derived from real program work across regulated clinical study environments."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -5 }}
              className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
              <p className="mt-4 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                Impact: {item.impact}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-panel px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
