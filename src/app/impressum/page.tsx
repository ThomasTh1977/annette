import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata(
  "Impressum - Annette Theobald",
  "Impressum und rechtliche Informationen zur Website von Annette Theobald, Mobile Friseurin Bad Säckingen."
);

export default function Impressum() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <h1>Impressum</h1>

          {/* ── Angaben gemäß §5 TMG ── */}
          <h2>Angaben gemäß §5 TMG</h2>
          <p>
            <strong>Annette Theobald</strong><br />
            Mobile Friseurin
          </p>
          <p>
            Purkersdorferstraße 35<br />
            79713 Bad Säckingen<br />
            Deutschland
          </p>

          {/* ── Kontakt ── */}
          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a><br />
            E-Mail:{" "}
            <a href="mailto:info@annette-theobald.de">info@annette-theobald.de</a><br />
            WhatsApp:{" "}
            <a href={siteConfig.whatsapp} rel="noopener noreferrer">
              Jetzt schreiben
            </a>
          </p>

          {/* ── Berufsrecht ── */}
          <h2>Berufsrechtliche Angaben</h2>
          <p>
            Berufsbezeichnung: Friseurin (verliehen in Deutschland)<br />
            Zuständige Handwerkskammer:{" "}
            <a
              href="https://www.hwk-freiburg.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Handwerkskammer Freiburg
            </a><br />
            Bismarckstraße 17, 79098 Freiburg im Breisgau
          </p>
          <p>
            Es gelten die berufsrechtlichen Regelungen der Handwerksordnung (HwO).
            Die Handwerksordnung ist abrufbar unter:{" "}
            <a
              href="https://www.gesetze-im-internet.de/hwo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.gesetze-im-internet.de/hwo
            </a>
          </p>

          {/* ── Steuer ── */}
          <h2>Steuerliche Angaben</h2>
          <p>{siteConfig.kleinunternehmerNote}</p>

          {/* ── Streitschlichtung ── */}
          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
            bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          {/* ── Haftung für Inhalte ── */}
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          {/* ── Haftung für Links ── */}
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>

          {/* ── Urheberrecht ── */}
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Die auf dieser Website verwendeten Fotos sind lizenzierte
            Stockfotos (iStock by Getty Images). Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </section>
  );
}
