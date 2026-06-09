import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Mahsulot", href: "#product" },
  { label: "Sifat", href: "#quality" },
  { label: "Manba", href: "#source" },
  { label: "Yangiliklar", href: "#news" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-8 lg:px-10">
      <nav className="glass-light mx-auto flex max-w-[1500px] items-center justify-between rounded-2xl px-4 py-2.5 shadow-card sm:px-6 sm:py-3 lg:px-8">
        <a href="#" className="flex shrink-0 items-center" aria-label="ALTARA bosh sahifa">
          <img src="/img/logo.png" alt="ALTARA Natural Mineral Water" className="h-10 w-auto sm:h-11" />
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-altara-primary/85 transition-colors hover:text-altara-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-1.5 rounded-full border border-altara-primary/10 bg-white/60 px-3 py-1.5 font-body text-sm font-semibold text-altara-primary transition-shadow hover:shadow-card sm:px-3.5 sm:py-2">
            <span className="text-base">🌐</span> UZ
          </button>
          <button className="group hidden items-center gap-1.5 rounded-full bg-altara-primary px-5 py-2 font-body text-sm font-semibold text-white shadow-card transition-all hover:bg-altara-secondary sm:inline-flex">
            Buyurtma Berish
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
