import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { ProductCard } from "./ProductCard";
import { ProductModal, type ModalItem } from "./ProductModal";

const products: {
  name: string;
  useCase: string;
  image: string;
  modalItems: ModalItem[];
}[] = [
  {
    name: "Shisha",
    useCase: "Shisha idish seriyasi",
    image: "/glass/combo_glass.png",
    modalItems: [
      { size: "0.33L", useCase: "Mini format", image: "/glass/0.33.png" },
      { size: "0.5L",  useCase: "Kundalik",    image: "/glass/0.5.png"  },
      { size: "1.0L",  useCase: "Oilaviy",     image: "/glass/1.0.png"  },
      { size: "1.5L",  useCase: "Maksimal",    image: "/glass/1.5.png"  },
    ],
  },
  {
    name: "Plastik",
    useCase: "Plastik idish seriyasi",
    image: "/bottle/combo_bottle.png",
    modalItems: [
      { size: "0.5L", useCase: "Kundalik",      image: "/bottle/0.5.png" },
      { size: "1.0L", useCase: "Oilaviy",       image: "/bottle/1.0.png" },
      { size: "1.5L", useCase: "Katta format",  image: "/bottle/1.5.png" },
      { size: "5.0L", useCase: "Gallon",        image: "/bottle/5.png"   },
    ],
  },
  {
    name: "Banka",
    useCase: "Alyuminiy banka seriyasi",
    image: "/banich/combo_banich.png",
    modalItems: [
      { size: "150ml", useCase: "Mini",    image: "/banich/150.png" },
      { size: "250ml", useCase: "Kichik",  image: "/banich/250.png" },
      { size: "330ml", useCase: "O'rta",   image: "/banich/330.png" },
      { size: "550ml", useCase: "Katta",   image: "/banich/550.png" },
    ],
  },
];

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="product" className="relative overflow-hidden py-24 lg:py-32">
      <img
        src="/img/bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-altara-light/35 to-white/65" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="absolute left-[8%] top-[12%] h-3 w-3 rounded-full bg-altara-secondary/20 blur-[1px]" />
        <span className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-altara-secondary/25" />
        <span className="absolute bottom-[22%] left-[15%] h-2.5 w-2.5 rounded-full bg-altara-secondary/15 blur-[0.5px]" />
        <span className="absolute bottom-[30%] right-[20%] h-4 w-4 rounded-full bg-altara-secondary/20 blur-[1px]" />
        <span className="absolute left-[45%] top-[8%] h-2 w-2 rounded-full bg-altara-secondary/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mx-auto max-w-3xl text-center">
          <SectionLabel>MAHSULOTLARIMIZ</SectionLabel>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-altara-primary sm:text-5xl lg:text-[3.25rem]">
            Har bir ehtiyoj uchun mukammal hajm
          </h2>

          <p className="mt-5 font-body text-base leading-relaxed text-altara-primary/75 sm:text-lg">
            ALTARA tabiiy mineral suvi turli hajmlarda siz uchun. Soflik, sifat va tabiat in&apos;omi
            &mdash; har tomchida.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3 lg:gap-5">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
              size={product.name}
              image={product.image}
              useCase={product.useCase}
              delay={100 + i * 100}
              onView={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-altara-primary px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-glow transition-all hover:bg-altara-secondary active:scale-[0.98]">
            Barcha mahsulotlarni ko&apos;rish
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          activeSize={selectedProduct.name}
          modalItems={selectedProduct.modalItems}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
