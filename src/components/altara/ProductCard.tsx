import { Droplets } from "lucide-react";

interface ProductCardProps {
  size: string;
  image: string;
  useCase: string;
  delay?: number;
}

export function ProductCard({ size, image, useCase, delay = 0 }: ProductCardProps) {
  return (
    <article
      className="glass-card group animate-fade-up flex flex-col items-center rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/28 hover:shadow-glow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Droplets className="h-5 w-5 text-altara-secondary" strokeWidth={1.8} aria-hidden />

      <p className="mt-3 font-display text-2xl font-bold text-altara-primary">{size}</p>

      <div className="relative my-3 flex h-72 w-full items-end justify-center sm:h-80 lg:h-96">
        <div className="absolute bottom-6 left-1/2 h-10 w-3/5 -translate-x-1/2 rounded-[50%] bg-altara-primary/10 blur-xl transition-all group-hover:bg-altara-secondary/20" />
        <img
          src={image}
          alt={`ALTARA ${size} shisha idish`}
          className="relative z-10 h-full w-auto max-w-[90%] object-contain object-bottom drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03] sm:max-w-none"
        />
      </div>

      <p className="font-display text-xl font-bold text-altara-primary">{size}</p>
      <p className="mt-1 font-body text-sm text-altara-primary/70">{useCase}</p>

      <span className="mt-4 h-1.5 w-1.5 rotate-45 bg-altara-gold/70" aria-hidden />
    </article>
  );
}
