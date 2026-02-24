import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">{siteConfig.name}</h3>
              <p className="text-sm text-muted-foreground">
                Mobile Friseurdienste in Bad Säckingen
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-sm">
                Telefon: <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="text-sm">
                WhatsApp: <a href={siteConfig.whatsapp} rel="noopener noreferrer" className="hover:underline">Jetzt schreiben</a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <Link href="/impressum" className="text-sm hover:underline block">Impressum</Link>
              <Link href="/datenschutz" className="text-sm hover:underline block">Datenschutz</Link>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-muted-foreground">
            {siteConfig.kleinunternehmerNote}
          </p>
        </div>
      </Container>
    </footer>
  );
}