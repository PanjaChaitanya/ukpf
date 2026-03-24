"use client";

import { motion } from "framer-motion";
import TopNav from "@/components/layout/TopNav";
import BackgroundDecor from "@/components/layout/BackgroundDecor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorAura from "@/components/ui/CursorAura";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function PortfolioPage({ data }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <CursorAura />
      <BackgroundDecor />
      <TopNav data={data} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4"
      >
        <HeroSection data={data} />
        <AboutSection summary={data.summary} about={data.about} />
        <SkillsSection skills={data.skills} />
        <ExperienceSection experience={data.experience} />
        <HighlightsSection highlights={data.highlights} />
        <EducationSection education={data.education} />
        <ContactSection contact={data.contact} />
        <FooterSection name={data.name} contact={data.contact} />
      </motion.main>
    </div>
  );
}
