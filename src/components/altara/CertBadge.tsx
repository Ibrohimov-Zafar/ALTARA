import type { LucideIcon } from "lucide-react";

interface CertBadgeProps {
  icon?: LucideIcon;
  label: string;
  sublabel?: string;
  halal?: boolean;
}

export function CertBadge({ icon: Icon, label, sublabel, halal }: CertBadgeProps) {
  return (
    <div className="glass-light flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full text-center shadow-card sm:h-20 sm:w-20">
      {halal ? (
        <>
          <span className="font-display text-[0.5rem] font-bold leading-tight text-altara-primary sm:text-[0.55rem]">
            حلال
          </span>
          <span className="mt-0.5 font-body text-[0.45rem] font-semibold uppercase tracking-wide text-altara-primary/80 sm:text-[0.5rem]">
            {label}
          </span>
        </>
      ) : (
        <>
          {Icon && <Icon className="h-5 w-5 text-altara-gold sm:h-6 sm:w-6" strokeWidth={1.6} />}
          <span className="mt-1 font-body text-[0.45rem] font-bold uppercase leading-tight text-altara-primary sm:text-[0.5rem]">
            {label}
          </span>
          {sublabel && (
            <span className="font-body text-[0.4rem] uppercase text-altara-primary/65">{sublabel}</span>
          )}
        </>
      )}
    </div>
  );
}
