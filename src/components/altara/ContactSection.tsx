import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Footer } from "./Footer";

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
  "w-full rounded-md border border-altara-primary/15 bg-white/90 px-4 py-2.5 font-body text-sm text-altara-primary placeholder:text-altara-primary/40 outline-none focus:border-altara-primary/40";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src="/img/bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-altara-light/50 to-white/80" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 pt-16 pb-8 lg:px-8 lg:pt-20 lg:pb-10">
        <header className="max-w-xl">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-altara-gold">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-altara-primary sm:text-4xl">
            Biz bilan bog&apos;laning
          </h2>
          <p className="mt-3 font-body text-base text-altara-primary/75">
            Savollaringiz yoki takliflaringiz bormi? Biz sizga yordam berishdan mamnunmiz.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/70 bg-white/85 p-6 shadow-card backdrop-blur-sm">
            <h3 className="font-display text-lg font-bold text-altara-primary">Aloqa ma&apos;lumotlari</h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-altara-secondary" strokeWidth={1.8} />
                  <div>
                    <p className="font-body text-xs font-medium text-altara-primary/55">{label}</p>
                    <p className="mt-0.5 font-body text-sm text-altara-primary">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/70 bg-white/85 p-6 shadow-card backdrop-blur-sm">
            <h3 className="font-display text-lg font-bold text-altara-primary">Xabar yuboring</h3>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Ismingiz" className={inputClass} />
                <input type="tel" name="phone" placeholder="Telefon" className={inputClass} />
              </div>
              <input type="email" name="email" placeholder="Email" className={inputClass} />
              <textarea
                name="message"
                rows={4}
                placeholder="Xabaringiz"
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-md bg-altara-primary px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-altara-secondary"
              >
                Yuborish
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
