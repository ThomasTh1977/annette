import Link from "next/link";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function PricingPreview() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <SectionHeading
          title="Preise"
          subtitle="Transparente Preisgestaltung"
        />
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Meine Preise richten sich nach der Länge Ihrer Haare, der Komplexität der Dienstleistung und dem Aufwand.
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.kleinunternehmerNote}
          </p>
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/preise">Detaillierte Preisliste</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}