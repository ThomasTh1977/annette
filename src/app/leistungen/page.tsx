import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/common/FeatureCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Scissors, Palette, Sparkles, User, Users, Eye } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Friseurdienste - Annette Theobald",
  "Professionelle Haarschnitte, Färben, Strähnen, Styling und mehr. Hausbesuche in Bad Säckingen."
);

const services = [
  {
    name: "Haarschnitt Damen",
    description: "Kurz, mittel oder lang – inkl. Pony schneiden (5€). Professioneller Schnitt ab 40€.",
    icon: Scissors,
    price: "Ab 40€",
  },
  {
    name: "Haarschnitt Herren & Kinder",
    description: "Klassischer Herrenschnitt (35€) und Kinderschnitt bis 12 Jahre (20€).",
    icon: Users,
    price: "Ab 20€",
  },
  {
    name: "Farbe & Strähnen",
    description: "Komplett- oder Ansatzfarbe, Strähnen in allen Längen und Glanz-Pflege-Tönung.",
    icon: Palette,
    price: "Ab 30€",
  },
  {
    name: "Styling & Glätten",
    description: "Föhnen (15–30€) und Glätten (20–30€) je nach Aufwand und Haarlänge.",
    icon: Sparkles,
    price: "Ab 15€",
  },
  {
    name: "Dauerwelle",
    description: "Dauerwelle komplett inklusive Schneiden – für natürliche Locken und Volumen.",
    icon: User,
    price: "80€",
  },
  {
    name: "Augen & Extras",
    description: "Wimpern färben (15€) und Augenbrauen färben (7€) für den perfekten Look.",
    icon: Eye,
    price: "Ab 7€",
  },
];

export default function Leistungen() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Meine Leistungen"
            subtitle="Professionelle Friseurdienste direkt bei Ihnen zu Hause"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <FeatureCard
                  key={service.name}
                  title={service.name}
                  description={`${service.description} ${service.price}`}
                  icon={<Icon className="w-8 h-8 text-primary" />}
                />
              );
            })}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
