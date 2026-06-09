interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-altara-gold/60 sm:w-16" aria-hidden />
      <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-altara-gold">
        {children}
      </span>
      <span className="relative flex items-center gap-4" aria-hidden>
        <span className="h-1.5 w-1.5 rotate-45 bg-altara-gold/80" />
        <span className="h-px w-12 bg-altara-gold/60 sm:w-16" />
      </span>
    </div>
  );
}
