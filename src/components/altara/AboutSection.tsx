import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Mountain,
  ShieldCheck,
  FlaskConical,
  Leaf,
  Gem,
  Clock,
  Users,
} from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Droplets, title: "100% Tabiiy", description: "Tabiiy tarkib" },
  { icon: Mountain, title: "Tog' manbai", description: "Chuqur buloqlar" },
  { icon: ShieldCheck, title: "Halol Sertifikat", description: "Ishonchli sifat" },
  { icon: FlaskConical, title: "Sifat nazorati", description: "Laboratoriya tekshiruvi" },
];

const stats: {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Leaf,
    value: "100%",
    title: "Tabiiy Suv",
    description: "Hech qanday qo'shimchalarsiz",
  },
  {
    icon: Gem,
    value: "15+",
    title: "Muhim Minerallar",
    description: "Organizm uchun foydali",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "Sifat nazorati",
    description: "Doimiy laboratoriya tekshiruvi",
  },
  {
    icon: Users,
    value: "5000+",
    title: "Mijozlar ishonchi",
    description: "O'zbekiston bo'ylab",
  },
];

function StatCard({ icon: Icon, value, title, description }: (typeof stats)[number]) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-altara-primary/15 bg-white px-5 py-8 text-center shadow-card transition-all hover:-translate-y-1 hover:border-altara-secondary/35 hover:shadow-glow">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-altara-secondary/25 text-altara-primary ring-1 ring-altara-secondary/30">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>
      <p className="mt-4 font-display text-3xl font-bold text-altara-primary sm:text-4xl">{value}</p>
      <p className="mt-2 font-display text-base font-bold text-altara-primary sm:text-lg">{title}</p>
      <p className="mt-1.5 font-body text-sm text-altara-primary/75">{description}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-20 pb-10 lg:px-12 lg:pt-24 lg:pb-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl bg-white lg:max-w-none">
              <div className="pointer-events-none absolute -inset-8 z-10" aria-hidden>
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
                <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-white to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-white to-transparent" />
              </div>
              <img
                src="/img/ABOUT.png"
                alt="ALTARA idishi va tog' manzarasi"
                className="about-image-mask relative z-0 h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-altara-gold sm:text-sm">
              Biz haqimizda
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-altara-primary sm:text-4xl lg:text-[2.75rem]">
              Tabiatning eng sof manbalaridan
            </h2>

            <div className="mt-4 flex items-center gap-2" aria-hidden>
              <span className="h-px w-12 bg-altara-secondary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-altara-secondary/60" />
              <span className="h-1 w-1 rounded-full bg-altara-secondary/40" />
            </div>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-altara-primary/80 sm:text-[1.0625rem]">
              <p>
                ALTARA — Chotqol tog&apos;larining tabiiy go&apos;zalligi va sof suv manbalarining
                birlashmasi. Har bir tomchi tabiatning eng sof in&apos;omini o&apos;zida mujassam
                etadi.
              </p>
              <p>
                Biz faqat tabiat tomonidan taqdim etilgan mineral suvlarni to&apos;g&apos;ridan-to&apos;g&apos;ri
                manbadan olib, eng yuqori sifat standartlarida ishlab chiqaramiz.
              </p>
              <p>
                Har bir ALTARA idishi — bu tog&apos;lar, buloqlar va sof havo uyg&apos;unligining
                ifodasidir.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <Icon className="h-7 w-7 text-altara-primary" strokeWidth={1.5} />
                  <p className="mt-2 font-display text-sm font-bold text-altara-primary sm:text-base">
                    {title}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-altara-primary/60 sm:text-sm">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-6 lg:px-12 lg:pb-24 lg:pt-10">
        
        <div
          className="pointer-events-none absolute inset-0 -z-10   via-altara-light/50 to-white"
          aria-hidden
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
