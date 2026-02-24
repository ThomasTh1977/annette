import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SERVICE_AREA } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function ServiceArea() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <SectionHeading
          title="Servicegebiet"
          subtitle="Wo ich für Sie da bin"
        />
        <div className="text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-xl font-semibold mb-2">{SERVICE_AREA}</p>
          <p className="text-muted-foreground">
            Ich komme zu Ihnen nach Hause oder ins Büro. Vereinbaren Sie einfach einen Termin.
          </p>
        </div>
      </Container>
    </section>
  );
}