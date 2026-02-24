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
      { service: "Damen Kurzhaar", price: "35€" },
      { service: "Damen Mittel", price: "45€" },
      { service: "Damen Lang", price: "50€" },
      { service: "Herren", price: "30€" },
      { service: "Kinder bis 12 Jahre", price: "25€" },
    ],
  },
  {
    category: "Färben & Tönen",
    icon: "🎨",
    items: [
      { service: "Ansatz färben", price: "40€" },
      { service: "Komplettfärbung Kurz", price: "55€" },
      { service: "Komplettfärbung Lang", price: "80€" },
      { service: "Strähnen Kurzhaar", price: "Ab 50€" },
      { service: "Strähnen Mittelhaar", price: "Ab 75€" },
      { service: "Strähnen Langhaar", price: "Ab 80€" },
      { service: "Tönen", price: "30€" },
    ],
  },
  {
    category: "Styling & Pflege",
    icon: "✨",
    items: [
      { service: "Föhnen", price: "Ab 20€" },
      { service: "Haarkur / Intensivpflege", price: "35€" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
