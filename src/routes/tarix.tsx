import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/altara/PageLayout";
import { SectionLabel } from "@/components/altara/SectionLabel";
import { TrendingUp, Users, Award, Droplets, Building2, Globe, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/tarix")({
  head: () => ({
    meta: [
      { title: "Kampaniya tarixi — ALTARA Premium Mineral Suv" },
      {
        name: "description",
        content:
          "ALTARA kompaniyasining tarixi: tashkil etilgan yil, hamkorlar, investitsiyalar va asosiy yutuqlar. Chotqol togʻlaridan sof suv yetkazib berish safari.",
      },
    ],
  }),
  component: TarixPage,
});

const milestones = [
  {
    year: "2019",
    title: "G'oyaning tug'ilishi",
    desc: "Chotqol togʻlarida geologik tadqiqotlar natijasida noyob mineral suv manbai topildi. Asoschilar jamosi tarkib topdi.",
  },
  {
    year: "2020",
    title: "Ilmiy tadqiqotlar",
    desc: "Toshkent davlat texnika universiteti va Germaniyaning TÜV SÜD laboratoriyasi bilan hamkorlikda suv tarkibini chuqur o'rganish boshlandi.",
  },
  {
    year: "2021",
    title: "Kompaniya tashkil etildi",
    desc: "ALTARA MChJ rasman ro'yxatdan o'tdi. Boshlang'ich investitsiya jalb qilindi, ishlab chiqarish quvvati qurilishi boshlandi.",
  },
  {
    year: "2022",
    title: "Birinchi partiya & sertifikatlar",
    desc: "Dastlabki 50 000 shisha ishlab chiqarildi. Halal sertifikati, ISO 22000 va O'zstandart sifat belgisi olindi.",
  },
  {
    year: "2023",
    title: "Mintaqaviy kengayish",
    desc: "O'zbekistonning 7 viloyatiga yetkazib berish yo'lga qo'yildi. 200+ savdo nuqtasi bilan shartnomalar imzolandi.",
  },
  {
    year: "2024",
    title: "Xalqaro bozor",
    desc: "Qozog'iston va Qirg'izistonga eksport boshlandi. Yillik 5 mln shisha ishlab chiqarish quvvatiga erishildi.",
  },
  {
    year: "2025",
    title: "Yangi formatlar",
    desc: "Premium shisha idishlar liniyasi ishga tushirildi. Elektron savdo platformasida to'g'ridan-to'g'ri yetkazib berish xizmati ochildi.",
  },
];

const stats = [
  { icon: Building2, value: "2021", label: "Tashkil etilgan yil" },
  { icon: TrendingUp, value: "$4.2M", label: "Jami investitsiya" },
  { icon: Users, value: "18+", label: "Strategik hamkor" },
  { icon: Droplets, value: "5M+", label: "Yillik shisha" },
  { icon: Globe, value: "3", label: "Eksport mamlakati" },
  { icon: Award, value: "7", label: "Sertifikat & mukofot" },
];

const investors = [
  { name: "Silkroad Ventures", country: "O'zbekiston", round: "Urug' bosqichi", amount: "$500K", year: "2021" },
  { name: "Central Asia Growth Fund", country: "Qozog'iston", round: "A seriya", amount: "$1.8M", year: "2022" },
  { name: "Green Food & Beverage Partners", country: "Germaniya", round: "A seriya", amount: "$1.2M", year: "2022" },
  { name: "Innovatsiya Jamg'armasi", country: "O'zbekiston", round: "B seriya", amount: "$700K", year: "2024" },
];

const partners = [
  { name: "TÜV SÜD", role: "Sifat nazorati laboratoriyasi", country: "Germaniya" },
  { name: "O'zstandart", role: "Milliy standartlashtirish organi", country: "O'zbekiston" },
  { name: "Halal Certification Agency", role: "Halal sertifikatlash", country: "O'zbekiston" },
  { name: "TDTU", role: "Ilmiy tadqiqot hamkori", country: "O'zbekiston" },
  { name: "EcoPackaging GmbH", role: "Ekologik qadoqlash yechimi", country: "Avstriya" },
  { name: "Carrefour Central Asia", role: "Distribyutor tarmoq", country: "Mintaqa" },
];

export default function TarixPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="glass-card rounded-3xl px-8 py-14 text-center sm:px-14 lg:py-20">
          <SectionLabel>KOMPANIYA TARIXI</SectionLabel>
          <h1 className="mt-6 font-display text-4xl font-bold text-altara-primary sm:text-5xl lg:text-6xl">
            Tog'dan stolga — <br className="hidden lg:block" />
            bir g'oyaning safari
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-altara-primary/75 sm:text-lg">
            2019 yildan buyon ALTARA jamoasi Chotqol tog'larining mo'jizali manbai suvini har bir
            o'zbek xonadoniga yetkazish orzusi bilan ishlaydi.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-10 max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card flex flex-col items-center gap-2 rounded-2xl px-4 py-6 text-center">
              <Icon className="h-5 w-5 text-altara-secondary" strokeWidth={1.8} />
              <span className="font-display text-2xl font-bold text-altara-primary">{value}</span>
              <span className="font-body text-xs text-altara-primary/65">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <SectionLabel>VAQT CHIZIG'I</SectionLabel>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-altara-primary sm:text-4xl">
          Asosiy bosqichlar
        </h2>

        <div className="mt-10 space-y-4">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start sm:gap-8 ${
                i % 2 === 0 ? "" : "sm:flex-row-reverse"
              }`}
            >
              <div className="flex shrink-0 flex-col items-center sm:items-start">
                <span className="rounded-xl bg-altara-primary/10 px-4 py-1.5 font-display text-2xl font-bold text-altara-primary">
                  {m.year}
                </span>
              </div>
              <div className={i % 2 === 0 ? "" : "sm:text-right"}>
                <h3 className="font-display text-lg font-bold text-altara-primary">{m.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-altara-primary/70">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <SectionLabel>INVESTITSIYALAR</SectionLabel>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-altara-primary sm:text-4xl">
          Moliyaviy tarix
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {investors.map((inv) => (
            <div key={inv.name} className="glass-card flex flex-col gap-3 rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <span className="rounded-lg bg-altara-primary/10 px-3 py-1 font-body text-xs font-semibold text-altara-primary">
                  {inv.round}
                </span>
                <span className="font-body text-xs text-altara-primary/50">{inv.year}</span>
              </div>
              <p className="font-display text-2xl font-bold text-altara-secondary">{inv.amount}</p>
              <div>
                <p className="font-body text-sm font-semibold text-altara-primary">{inv.name}</p>
                <p className="mt-0.5 font-body text-xs text-altara-primary/60">{inv.country}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <SectionLabel>HAMKORLAR</SectionLabel>
        <h2 className="mt-4 text-center font-display text-3xl font-bold text-altara-primary sm:text-4xl">
          Strategik hamkorlarimiz
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="glass-card flex items-start gap-4 rounded-2xl p-6">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-altara-secondary" strokeWidth={1.8} />
              <div>
                <p className="font-display text-base font-bold text-altara-primary">{p.name}</p>
                <p className="mt-0.5 font-body text-sm text-altara-primary/70">{p.role}</p>
                <span className="mt-2 inline-block rounded-md bg-altara-primary/8 px-2.5 py-0.5 font-body text-xs text-altara-primary/60">
                  {p.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
