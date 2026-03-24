"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection({ experience }) {
  const sectionRef = useRef(null);
  const [selectedId, setSelectedId] = useState(experience[0]?.id ?? null);
  const [hoveredId, setHoveredId] = useState(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );

      gsap.from(".timeline-item", {
        opacity: 0,
        y: 36,
        duration: 0.82,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 66%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="experience" className="section-shell pt-8 sm:pt-10">
      <SectionHeading
        eyebrow="Experience"
        title="A decade of clinical programming impact"
        description="Scroll through major roles and expand each milestone for key outcomes and responsibilities."
      />

      <div ref={sectionRef} className="relative pl-6 sm:pl-8">
        <div className="absolute bottom-3 left-0 top-3 w-px bg-border" />
        <div className="timeline-progress absolute bottom-3 left-0 top-3 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

        <div className="space-y-5">
          {experience.map((role) => {
            const expanded = selectedId === role.id || hoveredId === role.id;

            return (
              <article
                key={role.id}
                className="timeline-item relative"
                onMouseEnter={() => setHoveredId(role.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className="absolute -left-[1.83rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-primary bg-surface" />

                <div className="rounded-3xl border border-border bg-surface/88 p-5 shadow-soft sm:p-6">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedId((prev) => (prev === role.id ? null : role.id))
                    }
                    className="flex w-full items-start justify-between gap-3 text-left"
                    aria-expanded={expanded}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {role.period}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {role.company} · {role.location}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground/80">
                        Focus: {role.focus}
                      </p>
                    </div>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 flex-none text-muted transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 grid gap-2 border-t border-border/70 pt-4">
                          {role.highlights.map((item) => (
                            <li
                              key={item}
                              className="rounded-xl bg-panel/70 px-4 py-3 text-sm leading-relaxed text-muted"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
