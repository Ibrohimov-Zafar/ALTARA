import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";

const navLinks = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Mahsulot", href: "#product" },
  { label: "Sifat", href: "#quality" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 20) {
        setVisible(true);
      } else if (currentY > lastScrollY.current && currentY > 60) {
        setVisible(false);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 px-5 pt-5 transition-transform duration-300 ease-out sm:px-8 lg:px-10 " +
        (visible ? "translate-y-0" : "-translate-y-[calc(100%+1.25rem)]")
      }
    >
      <nav className="mx-auto grid max-w-[1500px] grid-cols-[1fr_auto_1fr] items-center rounded-2xl border border-white/60 bg-white/75 px-4 py-2.5 shadow-card backdrop-blur-xl sm:px-6 sm:py-3 lg:px-8">
        <a href="#" className="flex shrink-0 items-center justify-self-start" aria-label="ALTARA bosh sahifa">
          <img src="/img/logo.png" alt="ALTARA Natural Mineral Water" className="h-10 w-auto sm:h-11" />
        </a>

        <ul className="hidden items-center justify-center gap-7 xl:flex">
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

        <div className="col-start-3 flex items-center justify-self-end gap-2 sm:gap-3">
          <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-altara-primary/10 bg-white/60 px-4 font-body text-sm font-semibold leading-none text-altara-primary transition-shadow hover:shadow-card">
            <Globe className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            UZ
          </button>
          <button className="group hidden h-9 items-center gap-1.5 rounded-md bg-altara-primary px-4 font-body text-sm font-semibold leading-none text-white shadow-card transition-all hover:bg-altara-secondary sm:inline-flex">
            Buyurtma Berish
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
