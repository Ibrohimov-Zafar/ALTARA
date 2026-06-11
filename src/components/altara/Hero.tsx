import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import bottle15 from "@/assets/bottle.png";
import bottle1 from "@/assets/bottle-1l.png";
import bottle05 from "@/assets/bottle-05l.png";
import bottle033 from "@/assets/bottle-033l.png";
import { Navbar } from "./Navbar";

const sizeBottles: { size: string; image: string }[] = [
  { size: "0.33L", image: bottle033 },
  { size: "0.5L", image: bottle05 },
  { size: "1.0L", image: bottle1 },
  { size: "1.5L", image: bottle15 },
];

export function Hero() {
  const [activeSize] = useState("0.5L");
  const activeBottle = sizeBottles.find((s) => s.size === activeSize)?.image ?? bottle05;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/img/z.png"
        alt="Chotqol tog'lari va billur ko'l manzarasi"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-top blur-[1px]"
      />
      <div className="absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-white/80 via-white/45 to-transparent sm:w-[58%] lg:block lg:w-[52%]" />
      <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/55 via-white/25 to-transparent lg:hidden" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/70 via-white/35 to-transparent lg:hidden" />
      <div className="absolute bottom-0 left-0 hidden h-40 w-full bg-gradient-to-t from-white/60 via-white/25 to-transparent lg:block" />

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-32">
        <div className="grid flex-1 grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Bottle — mobile: top center; desktop: right */}
          <div className="order-1 w-full lg:order-2">
            <div className="flex w-full items-end justify-center gap-3 lg:justify-end lg:gap-6">
              <div className="animate-float relative max-lg:translate-x-4 lg:translate-x-8">
                <img
                  key={activeSize}
                  src={activeBottle}
                  alt={`ALTARA premium shisha mineral suv idishi ${activeSize}`}
                  className="animate-bottle-in mx-auto block h-[min(62vh,520px)] w-auto object-contain object-center drop-shadow-2xl sm:h-[min(58vh,480px)] lg:h-[min(68vh,600px)] xl:h-[min(72vh,680px)]"
                />
              </div>

              <img
                src="/img/sertificat.png"
                alt="Premium Quality, Halal Certified va Natural 100% sertifikatlari"
                className="mb-6 hidden h-[min(36vh,320px)] w-auto translate-x-3 object-contain mix-blend-lighten drop-shadow-lg lg:mb-16 lg:block lg:h-[min(42vh,380px)] lg:translate-x-5 xl:h-[min(46vh,420px)]"
              />
            </div>
          </div>

          {/* Text — mobile: below bottle; desktop: left */}
          <div className="order-2 flex flex-col text-center lg:order-1 lg:text-left">
            <span className="hidden font-body text-sm font-semibold uppercase tracking-[0.3em] text-altara-gold sm:text-base lg:inline">
              Premium Mineral Water
            </span>

            <h1 className="mt-0 font-display text-[clamp(3.5rem,14vw,8.5rem)] font-black leading-[0.9] tracking-tight text-altara-primary lg:mt-4">
              ALTARA
            </h1>

            <p className="mt-3 hidden font-body text-base font-bold uppercase tracking-[0.14em] text-altara-secondary sm:text-lg lg:mt-5 lg:block lg:text-xl">
              Tozalik. Tabiat. Sog&apos;lom hayot.
            </p>

            <p className="mt-6 hidden max-w-xl font-body text-lg leading-relaxed text-altara-primary/80 sm:text-xl lg:block lg:text-[1.35rem]">
              Chotqol tog&apos;larining eng sof buloqlaridan olingan tabiiy mineral suv. Har bir
              tomchida tabiatning ta&apos;mi va sog&apos;liq uchun foyda.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:mt-10 lg:justify-start">
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
        </div>
      </div>

      <a
        href="#quality"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 rounded-2xl bg-white/35 px-4 py-3 backdrop-blur-md transition-transform hover:scale-105 active:scale-95 lg:flex"
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
