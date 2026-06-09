import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/altara/Hero";
import { ProductsSection } from "@/components/altara/ProductsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTARA — Premium Tabiiy Mineral Suv | Chotqol Tog'laridan" },
      {
        name: "description",
        content:
          "ALTARA — Chotqol tog'laridan olingan premium tabiiy mineral suv. 100% tabiiy, Halal sertifikatlangan, ekologik qadoqlash. Tabiatning eng sof manbai.",
      },
      { property: "og:title", content: "ALTARA — Premium Tabiiy Mineral Suv" },
      {
        property: "og:description",
        content: "Chotqol tog'laridan olingan premium tabiiy mineral suv. Tabiatning eng sof manbai.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="font-body">
      <Hero />
      <ProductsSection />
    </main>
  );
}
