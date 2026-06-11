import { ArrowRight, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";

const footerLinks = [
  { label: "Asosiy", href: "/", isRoute: true },
  { label: "Biz haqimizda", href: "/haqimizda", isRoute: true },
  { label: "Mahsulot", href: "/#product", isRoute: false },
  { label: "Yangiliklar", href: "/yangiliklar", isRoute: true },
  { label: "Tarix", href: "/tarix", isRoute: true },
  { label: "Kontakt", href: "#contact", isRoute: false },
];

export function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px] rounded-2xl border border-white/60 bg-white/75 px-4 py-5 shadow-card backdrop-blur-xl sm:px-6 sm:py-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#" className="flex shrink-0 items-center justify-self-center lg:justify-self-start" aria-label="ALTARA bosh sahifa">
            <img src="/img/logo.png" alt="ALTARA Natural Mineral Water" className="h-10 w-auto sm:h-11" />
          </a>

          <nav aria-label="Footer navigatsiya" className="justify-self-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-7">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="font-body text-sm font-medium text-altara-primary/85 transition-colors hover:text-altara-secondary"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm font-medium text-altara-primary/85 transition-colors hover:text-altara-secondary"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:col-start-3 lg:justify-self-end">
            <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-altara-primary/10 bg-white/60 px-4 font-body text-sm font-semibold leading-none text-altara-primary transition-shadow hover:shadow-card">
              <Globe className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              UZ
            </button>
            <button className="group inline-flex h-9 items-center gap-1.5 rounded-md bg-altara-primary px-4 font-body text-sm font-semibold leading-none text-white shadow-card transition-all hover:bg-altara-secondary">
              Buyurtma Berish
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center gap-1.5 border-t border-altara-primary/10 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-body text-xs text-altara-primary/50">
            &copy; {new Date().getFullYear()} ALTARA. Barcha huquqlar himoyalangan.
          </p>
          <p className="font-body text-xs text-altara-primary/50">info@altara.uz · +998 71 123 45 67</p>
        </div>
      </div>
    </footer>
  );
}
