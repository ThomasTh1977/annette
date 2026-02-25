import { Metadata } from "next";
import { Container } from "@/components/shell/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Datenschutz - Annette Theobald",
  "Datenschutzerklärung gemäß DSGVO für die Website von Annette Theobald, Mobile Friseurin Bad Säckingen."
);

export default function Datenschutz() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
          <h1>Datenschutzerklärung</h1>
          <p className="text-sm text-stone-400">Stand: Februar 2026</p>

          {/* ── 1. Verantwortlicher ── */}
          <h2>1. Verantwortlicher (Art. 13 Abs. 1 DSGVO)</h2>
          <p>
            <strong>Annette Theobald</strong><br />
            Mobile Friseurin<br />
            Purkersdorferstraße 35<br />
            79713 Bad Säckingen<br />
            Deutschland<br />
            Telefon: +49 170 5263873<br />
            E-Mail:{" "}
            <a href="mailto:annette.asal@icloud.com">
              annette.asal@icloud.com
            </a>
          </p>

          {/* ── 2. Allgemeines ── */}
          <h2>2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            Diese Website verwendet <strong>keine Cookies</strong>, kein
            Tracking, keine Analyse-Tools und kein Remarketing. Es werden keine
            Nutzerprofile erstellt. Personenbezogene Daten werden nur in dem
            technisch notwendigen Umfang verarbeitet.
          </p>
          <p>
            Google Fonts werden auf dieser Website <strong>lokal eingebunden</strong>{" "}
            (keine Verbindung zu Google-Servern beim Seitenaufruf). Es erfolgt
            keine Übertragung Ihrer IP-Adresse an Google.
          </p>

          {/* ── 3. Hosting / Vercel ── */}
          <h2>3. Hosting (Vercel)</h2>
          <p>
            Diese Website wird bei der{" "}
            <strong>Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</strong>{" "}
            gehostet. Vercel verarbeitet beim Aufruf dieser Website technisch
            notwendige Serverzugriffsdaten (sog. Server-Logs), darunter:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
            <li>Datum und Uhrzeit des Abrufs</li>
            <li>Aufgerufene URL</li>
            <li>Übertragene Datenmenge</li>
            <li>Browser-Typ und Betriebssystem</li>
          </ul>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einem sicheren und stabilen Betrieb der
            Website).
          </p>
          <p>
            <strong>Drittlandübertragung:</strong> Vercel hat seinen Sitz in den
            USA. Die Datenübermittlung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c
            DSGVO). Vercel ist dem EU-U.S. Data Privacy Framework beigetreten.
            Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
          <p>
            Mit Vercel wurde ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO)
            abgeschlossen.
          </p>

          {/* ── 4. Kontaktaufnahme ── */}
          <h2>4. Kontaktaufnahme per Telefon und WhatsApp</h2>
          <p>
            Wenn Sie uns per Telefon oder WhatsApp kontaktieren, werden die von
            Ihnen mitgeteilten Daten (z. B. Name, Telefonnummer, Nachrichteninhalt)
            zur Bearbeitung Ihrer Anfrage und Terminvereinbarung verarbeitet.
          </p>
          <p>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung / Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
          </p>
          <p>
            <strong>Hinweis zu WhatsApp:</strong> WhatsApp ist ein Dienst der
            Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland.
            Bei der Nutzung von WhatsApp gelten zusätzlich die{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzrichtlinien von WhatsApp
            </a>
            . Wir empfehlen die Kontaktaufnahme per Telefon, sofern Sie keine
            WhatsApp-Datenverarbeitung wünschen.
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie
            für den Zweck der Erhebung nicht mehr erforderlich sind, spätestens
            nach Abschluss des jeweiligen Auftrags.
          </p>

          {/* ── 5. Keine Cookies ── */}
          <h2>5. Cookies und Tracking</h2>
          <p>
            Diese Website verwendet <strong>keine Cookies</strong> und keine
            Tracking-Technologien. Es werden keine Analyse-, Werbe- oder
            Social-Media-Dienste eingebunden, die Ihre Nutzung dieser Website
            nachverfolgen.
          </p>

          {/* ── 6. Betroffenenrechte ── */}
          <h2>6. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
          </p>
          <ul>
            <li>
              <strong>Auskunftsrecht</strong> (Art. 15 DSGVO): Sie können
              Auskunft über die von uns verarbeiteten Daten verlangen.
            </li>
            <li>
              <strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO):
              Unrichtige Daten können Sie berichtigen lassen.
            </li>
            <li>
              <strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können
              die Löschung Ihrer Daten verlangen, sofern keine gesetzliche
              Aufbewahrungspflicht entgegensteht.
            </li>
            <li>
              <strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18
              DSGVO).
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO).
            </li>
            <li>
              <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der
              Verarbeitung Ihrer Daten auf Basis eines berechtigten Interesses
              widersprechen.
            </li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:annette.asal@icloud.com">
              annette.asal@icloud.com
            </a>
          </p>

          {/* ── 7. Beschwerderecht ── */}
          <h2>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):
          </p>
          <p>
            <strong>
              Landesbeauftragter für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg (LfDI)
            </strong>
            <br />
            Lautenschlagerstraße 20<br />
            70173 Stuttgart<br />
            Telefon: +49 711 615541-0<br />
            E-Mail:{" "}
            <a href="mailto:poststelle@lfdi.bwl.de">poststelle@lfdi.bwl.de</a>
            <br />
            Website:{" "}
            <a
              href="https://www.baden-wuerttemberg.datenschutz.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>

          {/* ── 8. Schweizer DSG ── */}
          <h2>8. Hinweis für Nutzer aus der Schweiz (nDSG)</h2>
          <p>
            Für Nutzerinnen und Nutzer mit Wohnsitz in der Schweiz gilt
            ergänzend das revidierte Schweizer Datenschutzgesetz (DSG, in Kraft
            seit 1. September 2023). Der Verantwortliche im Sinne des Schweizer
            DSG ist identisch mit dem oben genannten Verantwortlichen nach DSGVO.
            Die in dieser Datenschutzerklärung beschriebenen Rechte stehen Ihnen
            auch nach Schweizer DSG zu. Zuständige Aufsichtsbehörde in der
            Schweiz ist der Eidgenössische Datenschutz- und
            Öffentlichkeitsbeauftragte (EDÖB),{" "}
            <a
              href="https://www.edoeb.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.edoeb.admin.ch
            </a>
            .
          </p>

          {/* ── 9. Aktualität ── */}
          <h2>9. Aktualität dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung hat den Stand Februar 2026. Wir behalten
            uns vor, diese Erklärung bei rechtlichen oder technischen Änderungen
            anzupassen. Die jeweils aktuelle Version ist auf dieser Seite
            abrufbar.
          </p>
        </div>
      </Container>
    </section>
  );
}
