const navLinks = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Mahsulot", href: "#product" },
  { label: "Sifat", href: "#quality" },
  { label: "Manba", href: "#source" },
  { label: "Kontakt", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5 lg:px-12">
        <a href="#" className="flex items-center" aria-label="ALTARA bosh sahifa">
          <img src="/img/logo.png" alt="ALTARA Natural Mineral Water" className="h-12 w-auto drop-shadow-sm" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm font-medium tracking-wide text-altara-primary/90 transition-colors hover:text-altara-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="glass-light flex items-center gap-1.5 rounded-full px-3.5 py-2 font-body text-sm font-semibold text-altara-primary transition-shadow hover:shadow-card">
            <span className="text-base">🌐</span> UZ
          </button>
          <button className="hidden rounded-full bg-altara-primary px-6 py-2.5 font-body text-sm font-semibold text-white shadow-card transition-all hover:bg-altara-secondary hover:shadow-glow sm:inline-flex">
            Buyurtma Berish
          </button>
        </div>
      </nav>
    </header>
  );
}
