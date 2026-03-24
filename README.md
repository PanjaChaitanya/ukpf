# Rajini Jonna Portfolio

Premium single-page portfolio built with Next.js App Router, Tailwind CSS, Framer Motion, and GSAP.

## Stack

- Next.js 16 (App Router, JavaScript)
- Tailwind CSS 4
- Framer Motion
- GSAP + ScrollTrigger
- Lucide React icons

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
app/
  globals.css
  layout.js
  page.js
components/
  PortfolioPage.js
  layout/
    BackgroundDecor.js
    TopNav.js
  sections/
    AboutSection.js
    ContactSection.js
    EducationSection.js
    ExperienceSection.js
    FooterSection.js
    HeroSection.js
    HighlightsSection.js
    SkillsSection.js
  ui/
    CursorAura.js
    Reveal.js
    ScrollProgress.js
    SectionHeading.js
    ThemeToggle.js
data/
  portfolioData.js
```

## Notes

- Resume content is mapped in `data/portfolioData.js`.
- Framer Motion drives entrance and transition animations.
- GSAP powers micro-interactions and timeline scroll progression.
- Dark mode and scroll progress indicator are included.
- Contact form is frontend-only (demo interaction).
