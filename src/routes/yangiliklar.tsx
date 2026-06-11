import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/altara/PageLayout";
import { SectionLabel } from "@/components/altara/SectionLabel";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/yangiliklar")({
  head: () => ({
    meta: [
      { title: "Yangiliklar — ALTARA Premium Mineral Suv" },
      {
        name: "description",
        content:
          "ALTARA yangiliklari: yangi suv dizaynlari, hamkorliklar, tadbirlar va kompaniya xabarlari. Sog'lom hayot va premium mineral suv haqida so'nggi ma'lumotlar.",
      },
    ],
  }),
  component: YangilikPage,
});

const news = [
  {
    id: 1,
    category: "Dizayn",
    date: "12 Iyun 2025",
    title: "ALTARA Premium shisha liniyasi: yangi estetika",
    excerpt:
      "Avstriyalik dizaynerlar bilan hamkorlikda yaratilgan yangi premium shisha kolleksiyasi. Ko'k bo'yoqning yangi soyasi, yanada bardoshli qadoqlash va ekologik muhr.",
    color: "bg-altara-secondary/12 text-altara-secondary",
  },
  {
    id: 2,
    category: "Hamkorlik",
    date: "5 May 2025",
    title: "Carrefour O'zbekiston bilan yangi shartnoma",
    excerpt:
      "ALTARA Carrefour supermarketlarining barcha filiallari javonlarini egalladi. Endi 0.33L, 0.5L va 1.5L formatlari har bir do'konda topiladi.",
    color: "bg-altara-gold/15 text-altara-gold",
  },
  {
    id: 3,
    category: "Sog'liq",
    date: "20 Aprel 2025",
    title: "Magniy va kalsiy: ALTARA suvining sog'liqqa foydasi",
    excerpt:
      "Toshkent tibbiyot akademiyasi tadqiqotchilari ALTARA suvining kundalik iste'moli suyak zichligiga ijobiy ta'sir ko'rsatishi isbotlashdi.",
    color: "bg-green-500/15 text-green-700",
  },
  {
    id: 4,
    category: "Tadbirlar",
    date: "8 Mart 2025",
    title: "FoodExpo 2025: ALTARA oltin medal sohibi",
    excerpt:
      "Toshkentda bo'lib o'tgan xalqaro oziq-ovqat ko'rgazmasida ALTARA «Yilning eng yaxshi tabiiy suvi» nominatsiyasida oltin medal bilan taqdirlandi.",
    color: "bg-altara-gold/15 text-altara-gold",
  },
  {
    id: 5,
    category: "Ekologiya",
    date: "14 Fevral 2025",
    title: "ALTARA qadoqlashning 100% qayta ishlanadigan bo'lishi maqsadi",
    excerpt:
      "2026 yilga kelib barcha plastik qadoqlashni rPET materialiga o'tkazish va karbon izini 40% kamaytirish rejasi e'lon qilindi.",
    color: "bg-green-500/15 text-green-700",
  },
  {
    id: 6,
    category: "Kengayish",
    date: "3 Yanvar 2025",
    title: "Qirg'izistonga eksport: yangi manzil",
    excerpt:
      "ALTARA Bishkek va Osh shaharlarining yirik supermarketlarida sotuvga chiqdi. Markaziy Osiyodagi uchinchi eksport mamlakati.",
    color: "bg-altara-secondary/12 text-altara-secondary",
  },
  {
    id: 7,
    category: "Dizayn",
    date: "18 Noyabr 2024",
    title: "Ramazon maxsus nashri: noyob qadoqlash",
    excerpt:
      "Ramziy naqqoshlar va oltin rang bilan bezatilgan maxsus Ramazon kolleksiyasi. Cheklangan miqdorda ishlab chiqarilgan.",
    color: "bg-altara-secondary/12 text-altara-secondary",
  },
  {
    id: 8,
    category: "Yangi mahsulot",
    date: "2 Oktyabr 2024",
    title: "0.33L shisha format: yoʻlga hamroh",
    excerpt:
      "Sayohat va sport uchun mo'ljallangan kichik format rasman sotuvga chiqdi. Ingichka, yengil, sumkaga bemalol sig'adigan dizayn.",
    color: "bg-altara-gold/15 text-altara-gold",
  },
];

export default function YangilikPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="glass-card rounded-3xl px-8 py-14 text-center sm:px-14 lg:py-20">
          <SectionLabel>YANGILIKLAR</SectionLabel>
          <h1 className="mt-6 font-display text-4xl font-bold text-altara-primary sm:text-5xl lg:text-6xl">
            So'nggi xabarlar
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-altara-primary/75 sm:text-lg">
            Yangi dizaynlar, hamkorliklar, sog'liq maslahatlar va kompaniya hayotidan barcha yangiliklar.
          </p>
        </div>
      </section>

      {/* Featured news */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6 lg:px-12">
        <div className="glass-card flex flex-col gap-6 rounded-3xl p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
          <div className="flex h-56 w-full shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-altara-primary/10 to-altara-secondary/15 lg:h-72 lg:w-80">
            <img src="/img/d.png" alt="Featured news" className="h-full w-auto object-contain p-6 drop-shadow-xl" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-altara-secondary/12 px-3 py-1 font-body text-xs font-semibold text-altara-secondary">
                Dizayn
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-altara-primary/50">
                <Calendar className="h-3.5 w-3.5" />
                12 Iyun 2025
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-altara-primary sm:text-3xl">
              ALTARA Premium shisha liniyasi: yangi estetika
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-altara-primary/70">
              Avstriyalik dizaynerlar bilan hamkorlikda yaratilgan yangi premium shisha kolleksiyasi
              rasmiy taqdimotda ko'rsatildi. Yangi ko'k bo'yoqning soyasi, bardoshli qadoqlash va
              ekologik muhr — hammasi bitta shishada.
            </p>
            <button className="group mt-6 inline-flex items-center gap-2 rounded-full bg-altara-primary px-6 py-2.5 font-body text-sm font-semibold text-white transition-all hover:bg-altara-secondary">
              Batafsil
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {news.slice(1).map((item) => (
            <article
              key={item.id}
              className="glass-card group flex cursor-pointer flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/28 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-0.5 font-body text-xs font-semibold ${item.color}`}>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-altara-primary/45">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-4 font-display text-base font-bold leading-snug text-altara-primary">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-altara-primary/65 line-clamp-3">
                {item.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-1 font-body text-xs font-semibold text-altara-secondary transition-transform group-hover:translate-x-0.5">
                O'qish
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
