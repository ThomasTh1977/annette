import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata(
  "Impressum - Annette Theobald",
  "Impressum und rechtliche Informationen."
);

export default function Impressum() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Impressum</h1>

          <p>
            <strong>Annette Theobald</strong>
            <br />
            Mobile Friseurin
          </p>

          <p>
            Purkersdorfersterasse 35
            <br />
            79713 Bad Säckingen
            <br />
            Deutschland
          </p>

          <p>
            Telefon:{" "}
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            <br />
            WhatsApp:{" "}
            <a
              href={siteConfig.whatsapp}
              rel="noopener noreferrer"
            >
              Jetzt schreiben
            </a>
          </p>

          <p>{siteConfig.kleinunternehmerNote}</p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            kann jedoch keine Gewähr übernommen werden.
          </p>

          <h2>Datenschutz</h2>
          <p>
            Diese Website verwendet keine Cookies und sammelt keine
            personenbezogenen Daten.
          </p>
        </div>
      </Container>
    </section>
  );
}