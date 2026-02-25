import Link from "next/link";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const pricing = [
  {
    category: "Haarschnitt",
    icon: "✂️",
    items: [
      { service: "Schneiden Kurz", price: "40€" },
      { service: "Schneiden Mittel", price: "45€" },
      { service: "Schneiden Lang", price: "50€" },
      { service: "Herrenschnitt", price: "35€" },
      { service: "Kinder bis 12 Jahre", price: "20€" },
      { service: "Pony schneiden", price: "5€" },
    ],
  },
  {
    category: "Farbe & Strähnen",
    icon: "🎨",
    items: [
      { service: "Farbe kurzes Haar", price: "40€" },
      { service: "Farbe mittellanges Haar", price: "60€" },
      { service: "Farbe langes Haar", price: "80€" },
      { service: "Ansatzfarbe mittel", price: "45€" },
      { service: "Ansatzfarbe lang", price: "50€" },
      { service: "Strähnen kurz", price: "Ab 65€" },
      { service: "Strähnen mittel", price: "Ab 85€" },
      { service: "Strähnen lang", price: "Ab 95€" },
      { service: "Glanz-Pflege-Tönung", price: "Ab 30€" },
    ],
  },
  {
    category: "Styling & Pflege",
    icon: "✨",
    items: [
      { service: "Föhnen (nach Aufwand)", price: "15–30€" },
      { service: "Glätten (nach Aufwand)", price: "20–30€" },
      { service: "Dauerwelle inkl. Schneiden", price: "80€" },
    ],
  },
  {
    category: "Augen & Extras",
    icon: "👁️",
    items: [
      { service: "Wimpern färben", price: "15€" },
      { service: "Augenbrauen färben", price: "7€" },
    ],
  },
];

export function PricingPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-950 via-zinc-900 to-stone-950">
      <Container>
        <SectionHeading
          title="Preise"
          subtitle="Faire & transparente Preisgestaltung"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {pricing.map((cat) => (
            <div
              key={cat.category}
              className="bg-stone-900/70 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              {/* Kategorie-Kopf */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-amber-300">
                  {cat.category}
                </h3>
              </div>

              {/* Preisliste */}
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item.service}
                    className="flex justify-between items-baseline border-b border-amber-900/20 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-stone-300">{item.service}</span>
                    <span className="text-sm font-bold text-amber-400 ml-4 shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hinweis + Button */}
        <div className="text-center space-y-3">
          <p className="text-sm text-stone-500">
            {siteConfig.kleinunternehmerNote}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-semibold border-0 shadow-lg shadow-amber-900/40 hover:shadow-xl transition-all duration-300"
          >
            <Link href="/preise">Vollständige Preisliste ansehen</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
