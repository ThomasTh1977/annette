import Image from "next/image";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { copy } from "@/content/copy-de";

export function AboutAnnette() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title={copy.about.title} />
            <p className="text-lg text-muted-foreground mb-6">
              {copy.about.text}
            </p>
            <p className="text-muted-foreground">
              Mit über 20 Jahren Erfahrung in der Friseurbranche biete ich Ihnen professionelle Dienstleistungen direkt bei Ihnen zu Hause. Von klassischen Schnitten bis hin zu modernen Stylings – ich helfe Ihnen, Ihr bestes Aussehen zu erreichen.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/friseur-2.jpg"
              alt="Professionelle Friseurwerkzeuge – Schere und Haare"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl object-cover w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}