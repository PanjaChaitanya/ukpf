"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection({ data }) {
  const heroRef = useRef(null);
  const insightCardRef = useRef(null);
  const auraRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !heroRef.current || !auraRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.to(auraRef.current, {
        y: -18,
        x: 12,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    if (!insightCardRef.current) {
      return () => ctx.revert();
    }

    const card = insightCardRef.current;

    const handleMove = (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 7,
        transformPerspective: 700,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const resetCard = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", resetCard);

    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", resetCard);
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative section-shell min-h-[100svh] pt-28 sm:pt-32"
    >
      <div
        ref={auraRef}
        className="pointer-events-none absolute right-[6%] top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(28,201,169,0.35)_0%,rgba(28,201,169,0)_66%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Clinical Data Programming Excellence
            </span>
          </Reveal>

          <motion.h1
            className="mt-6 font-display text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {data.name}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg font-medium text-primary sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {data.title}
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          >
            {data.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Contact Rajini
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel"
            >
              Explore Experience
            </a>
          </motion.div>
        </div>

        <Reveal className="relative lg:justify-self-end" delay={0.18}>
          <article
            ref={insightCardRef}
            className="glass-card max-w-md origin-center rounded-3xl p-6 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Snapshot
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
              Driving regulated trial programs with validated SDTM and ADaM datasets,
              reproducible macro systems, and audit-ready statistical reporting.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {data.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/70 bg-panel/70 px-4 py-3"
                >
                  <p className="font-display text-xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
