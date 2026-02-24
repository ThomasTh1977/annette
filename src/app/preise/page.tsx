import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Preise - Annette Theobald",
  "Transparente Preisliste für mobile Friseurdienste in Bad Säckingen."
);

const pricing = [
  {
    category: "Haarschnitt",
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
    items: [
      { service: "Föhnfrisur", price: "25€" },
      { service: "Feststyling", price: "50€" },
      { service: "Haarkur/Intensivpflege", price: "35€" },
    ],
  },
];

export default function Preise() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Preisliste"
            subtitle="Faire Preise für hochwertige Dienstleistungen"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricing.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.service} className="flex justify-between">
                        <span className="text-sm">{item.service}</span>
                        <span className="font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Alle Preise verstehen sich als Richtpreise und können je nach Haartyp, Länge und Aufwand variieren.
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.kleinunternehmerNote}
            </p>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}