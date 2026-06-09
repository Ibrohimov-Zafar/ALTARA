import { Droplets, Mountain, ShieldCheck, Recycle } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  { icon: Droplets, title: "Tabiiy Mineral", description: "Sof va tabiiy mineral tarkib" },
  { icon: Mountain, title: "Chotqol Manbasi", description: "Chotqol tog'larining chuqur buloqlaridan" },
  { icon: ShieldCheck, title: "Halal Certified", description: "Halal sertifikatlangan ishonchli sifat" },
  { icon: Recycle, title: "Ekologik Qadoqlash", description: "Tabiatni asraydigan qadoqlash yechimlari" },
];

export function FeaturesSection() {
  return (
    <section id="quality" className="relative overflow-hidden py-10 lg:py-14">
      <img
        src="/img/bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-altara-light/40 to-white/60" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:px-12">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={80 + i * 80}
          />
        ))}
      </div>
    </section>
  );
}
