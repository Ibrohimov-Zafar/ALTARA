import { useState } from "react";
import { Leaf, ShieldCheck, Award, ArrowRight, ChevronDown } from "lucide-react";
import bottle15 from "@/assets/bottle.png";
import bottle1 from "@/assets/bottle-1l.png";
import bottle05 from "@/assets/bottle-05l.png";
import bottle033 from "@/assets/bottle-033l.png";
import { Navbar } from "./Navbar";
import { SizeSelector } from "./SizeSelector";

const sizeBottles: { size: string; image: string }[] = [
  { size: "0.33L", image: bottle033 },
  { size: "0.5L", image: bottle05 },
  { size: "1.0L", image: bottle1 },
  { size: "1.5L", image: bottle15 },
];
const sizes = sizeBottles.map((s) => s.size);

const highlights = [
  { icon: Leaf, label: "100% Tabiiy" },
  { icon: ShieldCheck, label: "Halal Sertifikatlangan" },
  { icon: Award, label: "Premium Sifat" },
];

export function Hero() {
  const [activeSize, setActiveSize] = useState("0.5L");
  const activeBottle = sizeBottles.find((s) => s.size === activeSize)?.image ?? bottle05;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/img/z.png"
        alt="Chotqol tog'lari va billur ko'l manzarasi"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-white/80 via-white/45 to-transparent sm:w-[58%] lg:w-[52%]" />
      <div className="absolute bottom-0 left-0 h-36 w-[62%] bg-gradient-to-t from-white/30 to-transparent sm:w-[58%] lg:w-[52%]" />

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-32">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Left */}
          <div className="animate-fade-up flex flex-col">
            <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-altara-gold sm:text-base">
              Premium Mineral Water
            </span>

            <h1 className="mt-4 font-display text-[clamp(4.25rem,12vw,8.5rem)] font-black leading-[0.88] tracking-tight text-altara-primary">
              ALTARA
            </h1>

            <p className="mt-5 font-body text-base font-bold uppercase tracking-[0.14em] text-altara-secondary sm:text-lg lg:text-xl">
              Tozalik. Tabiat. Sog&apos;lom hayot.
            </p>

            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-altara-primary/80 sm:text-xl lg:text-[1.35rem]">
              Chotqol tog&apos;larining eng sof buloqlaridan olingan tabiiy mineral suv. Har bir
              tomchida tabiatning ta&apos;mi va sog&apos;liq uchun foyda.
            </p>

           

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="group inline-flex items-center justify-center gap-2 rounded-md bg-altara-primary px-5 py-2.5 font-body text-base font-semibold text-white shadow-glow transition-all hover:bg-altara-secondary active:scale-[0.98]">
                Buyurtma Berish
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-altara-primary/25 bg-white/50 px-5 py-2.5 font-body text-base font-semibold text-altara-primary backdrop-blur-sm transition-all hover:border-altara-primary/50 hover:bg-white/80 active:scale-[0.98]"
              >
                Mahsulotlar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            
          </div>

          {/* Right — bottle + badges */}
          <div className="relative flex items-end justify-center gap-3 sm:gap-5 lg:justify-end lg:gap-6">
            <div className="animate-float relative translate-x-3 sm:translate-x-5 lg:translate-x-8">
              <img
                key={activeSize}
                src={activeBottle}
                alt={`ALTARA premium shisha mineral suv idishi ${activeSize}`}
                className="animate-bottle-in h-[min(52vh,420px)] w-auto object-contain drop-shadow-2xl sm:h-[min(58vh,480px)] lg:h-[min(68vh,600px)] xl:h-[min(72vh,680px)]"
              />
            </div>

            <img
              src="/img/sertificat.png"
              alt="Premium Quality, Halal Certified va Natural 100% sertifikatlari"
              className="mb-6 h-[min(32vh,280px)] w-auto translate-x-2 object-contain mix-blend-lighten drop-shadow-lg sm:mb-10 sm:h-[min(36vh,320px)] sm:translate-x-3 lg:mb-16 lg:h-[min(42vh,380px)] lg:translate-x-5 xl:h-[min(46vh,420px)]"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#quality"
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 rounded-2xl   px-4 py-3 shadow-card backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
        aria-label="Pastga scroll qilish"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-altara-primary pt-2">
          <span className="h-2 w-1.5 animate-bounce rounded-full bg-altara-primary" />
        </div>
        <ChevronDown className="h-5 w-5 text-altara-primary" strokeWidth={2.5} />
      </a>
    </section>
  );
}
