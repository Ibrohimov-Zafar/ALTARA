import { useState } from "react";
import { Leaf, ShieldCheck, Award, Mountain, Droplets, Recycle, ArrowRight } from "lucide-react";
import bottle15 from "@/assets/bottle.png";
import bottle1 from "@/assets/bottle-1l.png";
import bottle05 from "@/assets/bottle-05l.png";
import bottle033 from "@/assets/bottle-033l.png";
import { Navbar } from "./Navbar";
import { FeatureCard } from "./FeatureCard";
import { SizeSelector } from "./SizeSelector";

const sizeBottles: { size: string; image: string }[] = [
  { size: "0.33L", image: bottle033 },
  { size: "0.5L", image: bottle05 },
  { size: "1.0L", image: bottle1 },
  { size: "1.5L", image: bottle15 },
];
const sizes = sizeBottles.map((s) => s.size);

const leftBadges = [
  { icon: Leaf, label: "100% Tabiiy" },
  { icon: ShieldCheck, label: "Halal Sertifikatlangan" },
  { icon: Award, label: "Premium Sifat" },
];

const features = [
  { icon: Droplets, title: "Tabiiy Mineral", description: "Sof va tabiiy mineral tarkib" },
  { icon: Mountain, title: "Chotqol Manbasi", description: "Chotqol tog'larining chuqur buloqlaridan" },
  { icon: ShieldCheck, title: "Halal Certified", description: "Halal sertifikatlangan ishonchli sifat" },
  { icon: Recycle, title: "Ekologik Qadoqlash", description: "Tabiatni asraydigan qadoqlash yechimlari" },
];

export function Hero() {
  const [activeSize, setActiveSize] = useState("0.5L");
  const activeBottle = sizeBottles.find((s) => s.size === activeSize)?.image ?? bottle05;
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src="/img/bg.png"
        alt="Chotqol tog'lari va billur tog' suvi manzarasi"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-altara-light/85 via-altara-light/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />

      <Navbar />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-8 px-8 pb-12 pt-28 lg:grid-cols-12 lg:px-12">
        {/* Left */}
        <div className="animate-fade-up lg:col-span-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-altara-gold/15 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-altara-gold">
            Premium Mineral Water
          </span>

          <h1 className="mt-5 font-display text-7xl font-black leading-none tracking-tight text-altara-primary lg:text-8xl">
            ALTARA
          </h1>
          <p className="mt-3 font-body text-base font-semibold uppercase tracking-[0.18em] text-altara-secondary">
            Tabiatning eng sof manbai
          </p>
          <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-altara-primary/75">
            Chotqol tog'laridan olingan premium tabiiy mineral suv
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {leftBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-light flex items-center gap-2 rounded-full px-4 py-2 shadow-card"
              >
                <Icon className="h-4 w-4 text-altara-secondary" strokeWidth={2} />
                <span className="font-body text-sm font-medium text-altara-primary">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-altara-primary px-8 py-3.5 font-body text-base font-semibold text-white shadow-glow transition-all hover:bg-altara-secondary">
              Buyurtma Berish
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-altara-primary/30 bg-white/50 px-8 py-3.5 font-body text-base font-semibold text-altara-primary backdrop-blur-sm transition-all hover:border-altara-primary hover:bg-white/80">
              Mahsulotlar
            </button>
          </div>
        </div>

        {/* Center bottle */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-4">
          <div className="animate-float relative">
            {/* glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-altara-secondary/30 blur-3xl" />
            <img
              key={activeSize}
              src={activeBottle}
              alt={`ALTARA premium shisha mineral suv idishi ${activeSize}`}
              className="animate-bottle-in h-[68vh] max-h-[760px] w-auto drop-shadow-2xl"
            />
            {/* soft shadow */}
            <div className="absolute -bottom-2 left-1/2 h-6 w-1/2 -translate-x-1/2 rounded-[50%] bg-altara-primary/25 blur-xl" />
          </div>

          <div className="mt-6">
            <SizeSelector sizes={sizes} active={activeSize} onChange={setActiveSize} />
          </div>
        </div>

        {/* Right feature cards */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={150 + i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
