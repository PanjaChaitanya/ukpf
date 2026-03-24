import Reveal from "@/components/ui/Reveal";

export default function FooterSection({ name }) {
  return (
    <footer className="section-shell border-t border-border/70 pb-10 pt-7 text-sm text-muted">
      <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {name}. Crafted with precision and clarity.</p>
      </Reveal>
    </footer>
  );
}
