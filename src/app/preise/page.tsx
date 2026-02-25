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
    items: [
      { service: "Föhnen (nach Aufwand)", price: "15–30€" },
      { service: "Glätten (nach Aufwand)", price: "20–30€" },
      { service: "Dauerwelle inkl. Schneiden", price: "80€" },
    ],
  },
  {
    category: "Augen & Extras",
    items: [
      { service: "Wimpern färben", price: "15€" },
      { service: "Augenbrauen färben", price: "7€" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
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
