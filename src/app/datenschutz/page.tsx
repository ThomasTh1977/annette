import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Datenschutz - Annette Theobald",
  "Datenschutzerklärung."
);

export default function Datenschutz() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1>Datenschutzerklärung</h1>

          <p>
            Diese Website erhebt und speichert keine personenbezogenen Daten.
            Es werden keine Cookies verwendet.
          </p>

          <h2>Kontaktaufnahme</h2>
          <p>
            Bei Kontaktaufnahme über WhatsApp oder Telefon gelten die
            Datenschutzbestimmungen des jeweiligen Dienstes (WhatsApp / Telekommunikationsanbieter).
          </p>

          <h2>Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Diensten (z.&nbsp;B. WhatsApp).
            Für die Inhalte externer Seiten übernehmen wir keine Haftung.
          </p>

          <h2>Hosting</h2>
          <p>
            Diese Website wird über Vercel gehostet. Informationen zur
            Datenverarbeitung durch Vercel finden Sie unter{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}