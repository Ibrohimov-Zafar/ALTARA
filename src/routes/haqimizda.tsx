import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/altara/PageLayout";
import { SectionLabel } from "@/components/altara/SectionLabel";
import { Droplets, Target, Eye, Heart, Leaf, Shield } from "lucide-react";

export const Route = createFileRoute("/haqimizda")({
  head: () => ({
    meta: [
      { title: "Biz haqimizda — ALTARA Premium Mineral Suv" },
      {
        name: "description",
        content:
          "ALTARA kompaniyasi asoschilar jamoasi, missiya va qadriyatlar. Chotqol togʻlaridan olingan premium tabiiy mineral suv ishlab chiqaruvchi O'zbekiston kompaniyasi.",
      },
      { name: "keywords", content: "ALTARA, mineral suv, O'zbekiston, premium suv, asoschillar, Chotqol" },
      { property: "og:title", content: "Biz haqimizda — ALTARA" },
      {
        property: "og:description",
        content: "ALTARA asoschilari va jamoasi haqida to'liq ma'lumot.",
      },
    ],
  }),
  component: HaqimizdaPage,
});

const founders = [
  {
    name: "Jasur Mirzayev",
    role: "Bosh direktor & Asoschisi",
    bio: "15 yillik oziq-ovqat sanoatidagi tajriba. Toshkent davlat iqtisodiyot universiteti va London Business School bitiruvchisi. ALTARA g'oyasini 2019 yilda Chotqol tadqiqot safari chog'ida ilgari surdi.",
    initials: "JM",
  },
  {
    name: "Nilufar Yusupova",
    role: "Moliya direktori & Hamasoschi",
    bio: "ADB va Jahon banki loyihalarida 10 yillik moliyaviy boshqaruv tajribasi. O'zbekiston Moliya universitetida o'qituvchi sifatida ham faoliyat ko'rsatadi.",
    initials: "NY",
  },
  {
    name: "Bobur Raximov",
    role: "Ishlab chiqarish direktori",
    bio: "Kimyo texnologiyasi bo'yicha fanlar doktori. Germaniyada Nestlé va Gerolsteiner kompaniyalarida staj o'tagan. Suvni tozalash va mineralizatsiya bo'yicha patent egasi.",
    initials: "BR",
  },
  {
    name: "Malika Toshmatova",
    role: "Marketing direktori",
    bio: "O'rta Osiyo premium brend bozorida 8 yillik tajriba. Coca-Cola va PepsiCo kompaniyalarida katta menejer lavozimida ishlagan. ALTARA brendini noldan yaratgan.",
    initials: "MT",
  },
];

const values = [
  { icon: Droplets, title: "Soflik", desc: "Har bir shishada faqat tog' buloqlarining tabiiy tozaligi. Hech qanday sun'iy qo'shimcha yo'q." },
  { icon: Leaf, title: "Ekologiya", desc: "Qayta ishlash mumkin bo'lgan qadoqlash, karbon izini kamaytirish va tabiatga zarar bermagan holda ishlab chiqarish." },
  { icon: Shield, title: "Sifat", desc: "ISO 22000, Halal sertifikati va O'zstandart talablaridan yuqori darajada nazorat." },
  { icon: Heart, title: "Sog'lik", desc: "Optimal mineral tarkib — magniy, kalsiy, natriy balansi sog'lom hayot uchun to'g'ri nisbatda." },
  { icon: Target, title: "Ishonch", desc: "Har bir partiyada laboratoriya tekshiruvi natijasi mahsulot bilan birga chiqariladi." },
  { icon: Eye, title: "Shaffoflik", desc: "Suv qayerdan olinganidan qadoqlash jarayonigacha — barchasini ommaga ochiq ko'rsatamiz." },
];

export default function HaqimizdaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="glass-card rounded-3xl px-8 py-14 text-center sm:px-14 lg:py-20">
          <SectionLabel>BIZ HAQIMIZDA</SectionLabel>
          <h1 className="mt-6 font-display text-4xl font-bold text-altara-primary sm:text-5xl lg:text-6xl">
            Tabiatdan sizga —<br className="hidden lg:block" /> mehr bilan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-altara-primary/75 sm:text-lg">
            ALTARA — bu shunchaki suv emas. Bu Chotqol togʻlarining ming yillik sof me'rosi,
            zamonaviy texnologiya va sog'lom hayot e'tiqodining uyg'unligi.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <Target className="h-7 w-7 text-altara-secondary" strokeWidth={1.8} />
            <h2 className="mt-4 font-display text-2xl font-bold text-altara-primary">Missiyamiz</h2>
            <p className="mt-3 font-body text-base leading-relaxed text-altara-primary/75">
              O'zbekistonning har bir oilasiga Chotqol tog'larining sof, foydali va sertifikatlangan
              mineral suvini qulay va hamyonbop narxda yetkazib berish. Har bir tomchida tabiatning
              in'omini his ettirish.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <Eye className="h-7 w-7 text-altara-secondary" strokeWidth={1.8} />
            <h2 className="mt-4 font-display text-2xl font-bold text-altara-primary">Vizionimiz</h2>
            <p className="mt-3 font-body text-base leading-relaxed text-altara-primary/75">
              2030 yilga kelib Markaziy Osiyoning eng ishonchli va ekologik toza mineral suv brendiga
              aylanish. Mintaqadagi har uchinchi inson ALTARA orqali tog' suvidan bahramand bo'lsin.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <SectionLabel>JAMOA</SectionLabel>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-altara-primary sm:text-4xl">
          Asoschilar jamoasi
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-sm leading-relaxed text-altara-primary/65 sm:text-base">
          ALTARA ortida — oziq-ovqat sanoati, moliya va texnologiya sohasidagi tajribali mutaxassislar turibdi.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f) => (
            <div key={f.name} className="glass-card flex flex-col items-center rounded-2xl p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-altara-primary/12 ring-2 ring-altara-primary/15">
                <span className="font-display text-xl font-bold text-altara-primary">{f.initials}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-altara-primary">{f.name}</h3>
              <span className="mt-1 rounded-full bg-altara-secondary/12 px-3 py-0.5 font-body text-xs font-semibold text-altara-secondary">
                {f.role}
              </span>
              <p className="mt-3 font-body text-xs leading-relaxed text-altara-primary/65">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <SectionLabel>QADRIYATLAR</SectionLabel>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-altara-primary sm:text-4xl">
          Nima uchun ALTARA?
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card flex gap-4 rounded-2xl p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-altara-secondary/12">
                <Icon className="h-5 w-5 text-altara-secondary" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-altara-primary">{title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-altara-primary/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company story */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16">
          <SectionLabel>HIKOYAMIZ</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold text-altara-primary sm:text-4xl">
            Tog'dagi kashfiyot
          </h2>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-altara-primary/75 sm:text-lg">
            <p>
              Hammasi 2019 yilgi bir ilmiy safardan boshlandi. Chotqol tog'larida geologik tadqiqot
              o'tkazayotgan Bobur Raximov bir sokin buloq suvini sinadi va uning minerallar tarkibining
              noyobligini ko'rdi. O'sha paytda ALTARA g'oyasining urug'i ekildi.
            </p>
            <p>
              Keyingi ikki yil davomida jamoa suvni chuqur o'rganish, ishlab chiqarish texnologiyasini
              loyihalash va birinchi investitsiyani jalb qilish bilan band bo'ldi. 2021 yilda
              kompaniya rasman tashkil etildi.
            </p>
            <p>
              Bugun ALTARA O'zbekistonning 7 viloyatida, qo'shni Qozog'iston va Qirg'izistonda
              mavjud. Har yili 5 milliondan ortiq shisha ishlab chiqariladi — va bu raqam o'sib
              bormoqda. Ammo asosiy narsa o'zgarmagan: har bir shishadagi suv hamon o'sha tog'
              bulog'idan — sof, foydali, tabiiy.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
