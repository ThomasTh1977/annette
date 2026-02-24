import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTAButton } from "@/components/common/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { SERVICE_AREA, WORKING_HOURS } from "@/lib/constants";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Kontakt - Annette Theobald",
  "Termin vereinbaren für mobile Friseurdienste in Bad Säckingen."
);

export default function Kontakt() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Kontakt"
          subtitle="Vereinbaren Sie Ihren Termin"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{siteConfig.phone}</p>
                  <CTAButton variant="phone" className="mt-4">
                    Jetzt anrufen
                  </CTAButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Schnell und einfach über WhatsApp kontaktieren
                  </p>
                  <CTAButton variant="whatsapp">
                    WhatsApp Nachricht
                  </CTAButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Servicegebiet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{SERVICE_AREA}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Hausbesuche in Bad Säckingen und Umgebung
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Arbeitszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{WORKING_HOURS}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Flexible Termine nach Absprache
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{siteConfig.address}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Die Dienstleistungen finden bei Ihnen zu Hause statt.
                  Ich bringe alle notwendigen Materialien mit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}