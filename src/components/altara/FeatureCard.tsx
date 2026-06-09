import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className="glass-light animate-fade-up group flex items-start gap-4 rounded-2xl p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-altara-secondary/40 text-altara-primary transition-colors group-hover:border-altara-secondary">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-altara-primary">{title}</h3>
        <p className="mt-1 font-body text-sm leading-snug text-altara-primary/70">{description}</p>
      </div>
    </div>
  );
}
