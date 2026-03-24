"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function EducationSection({ education }) {
  return (
    <section id="education" className="section-shell pt-8 sm:pt-10">
      <SectionHeading
        eyebrow="Education"
        title="Academic Foundation"
        description="Formal training that anchors Rajini's analytical and scientific approach to programming in clinical research."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry, index) => (
          <Reveal key={entry.degree} delay={index * 0.08}>
            <article className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Degree
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                {entry.degree}
              </h3>
              <p className="mt-2 text-sm text-muted">{entry.institution}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
