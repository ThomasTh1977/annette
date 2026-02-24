import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/common/FeatureCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Scissors, Palette, Sparkles, User, Users, Crown } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Friseurdienste - Annette Theobald",
  "Professionelle Haarschnitte, Färben und Styling für Damen, Herren und Kinder. Hausbesuche in Bad Säckingen."
);

const services = [
  {
    name: "Haarschnitt Damen",
    description: "Moderne Schnitte von Bob bis Langhaar, inklusive Waschen und Föhnen.",
    icon: Scissors,
    price: "Ab 35€",
  },
  {
    name: "Haarschnitt Herren",
    description: "Klassische und moderne Herrenschnitte.",
    icon: User,
    price: "Ab 30€",
  },
  {
    name: "Haarschnitt Kinder",
    description: "Sanfte und spielerische Schnitte für die Kleinsten.",
    icon: Users,
    price: "Ab 25€",
  },
  {
    name: "Färben & Tönen",
    description: "Natürliche Farben, Strähnen und Ansätze.",
    icon: Palette,
    price: "Ab 30€",
  },
  {
    name: "Styling & Föhnen",
    description: "Föhnfrisuren und Styling für jeden Anlass.",
    icon: Crown,
    price: "Ab 20€",
  },
  {
    name: "Intensivpflege",
    description: "Haarkuren, Masken und Behandlungen für gesundes Haar.",
    icon: Sparkles,
    price: "Ab 35€",
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