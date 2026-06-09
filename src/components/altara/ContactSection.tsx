import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactItems: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Phone, label: "Telefon", value: "+998 71 123 45 67" },
  { icon: Mail, label: "Email", value: "info@altara.uz" },
  {
    icon: MapPin,
    label: "Manzil",
    value: "Toshkent viloyati, Chotqol tumani, Tabiat ko'chasi 12",
  },
  { icon: Clock, label: "Ish vaqti", value: "Dushanba — Shanba: 09:00 — 18:00" },
];

const inputClass =
  "w-full rounded-md border border-white/70 bg-white/55 px-4 py-3 font-body text-sm text-altara-primary placeholder:text-altara-primary/45 outline-none backdrop-blur-sm transition-colors focus:border-altara-secondary/50 focus:bg-white/75";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="/img/z.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover  "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/45 to-white/75" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="max-w-2xl">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-altara-gold sm:text-sm">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-altara-primary sm:text-4xl lg:text-5xl">
            Biz bilan bog&apos;laning
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-altara-primary/80 sm:text-lg">
            Savollaringiz yoki takliflaringiz bormi? Biz sizga yordam berishdan mamnunmiz.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-5">
          {/* Aloqa ma'lumotlari */}
          <div className="rounded-2xl border border-white/65 bg-white/75 p-6 shadow-card backdrop-blur-xl lg:col-span-3 lg:self-stretch">
            <h3 className="font-display text-lg font-bold text-altara-primary">Aloqa ma&apos;lumotlari</h3>
            <ul className="mt-6 space-y-5">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-altara-secondary/20 text-altara-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wide text-altara-primary/55">
                      {label}
                    </p>
                    <p className="mt-0.5 font-body text-sm leading-snug text-altara-primary">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Forma */}
          <div className="rounded-2xl border border-white/65 bg-white/75 p-6 shadow-card backdrop-blur-xl lg:col-span-5">
            <h3 className="font-display text-lg font-bold text-altara-primary">Xabar yuboring</h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Ismingiz" className={inputClass} />
                <input type="tel" name="phone" placeholder="Telefon raqamingiz" className={inputClass} />
              </div>
              <input type="email" name="email" placeholder="Email manzilingiz" className={inputClass} />
              <textarea
                name="message"
                rows={5}
                placeholder="Xabaringiz"
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-md bg-altara-primary px-6 py-3 font-body text-sm font-semibold text-white shadow-glow transition-all hover:bg-altara-secondary active:scale-[0.98]"
              >
                Yuborish
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

          {/* Idish */}
          <div className="flex justify-center lg:col-span-4 lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none">
              <img
                src="/img/ABOUT.png"
                alt="ALTARA mineral suv idishi"
                className="about-image-mask h-auto w-full object-contain lg:max-h-[720px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
