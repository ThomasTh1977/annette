import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";

const serviceAreaTowns = [
  "Bad Säckingen", "Wallbach", "Rippolingen", "Harpolingen",
  "Murg", "Wehr", "Laufenburg", "Rheinfelden",
];

export function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-amber-900/30">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Spalte 1: Name & Beschreibung */}
            <div>
              <h3 className="font-script text-2xl bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent mb-3">
                {siteConfig.name}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Mobile Friseurdienste direkt bei Ihnen zu Hause –
                professionell, persönlich, entspannt.
              </p>
            </div>

            {/* Spalte 2: Kontakt */}
            <div>
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
                Kontakt
              </h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    📞 {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.whatsapp}
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    💬 WhatsApp schreiben
                  </a>
                </li>
                <li className="text-stone-500 text-xs pt-1">
                  Termine nach Vereinbarung
                </li>
              </ul>
            </div>

            {/* Spalte 3: Servicegebiet (SEO) */}
            <div>
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
                Servicegebiet
              </h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                {serviceAreaTowns.map((town) => (
                  <li key={town} className="text-xs text-stone-500">
                    · {town}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-stone-600 mt-2">
                Bad Säckingen & Umgebung
              </p>
            </div>

            {/* Spalte 4: Rechtliches & Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
                Rechtliches
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/impressum"
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preise"
                    className="text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    Preisliste
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-6 bg-amber-900/20" />

          {/* Kleinunternehmer-Hinweis – rechtssicher im Footer */}
          <p className="text-center text-xs text-stone-600">
            {siteConfig.kleinunternehmerNote}
          </p>
          <p className="text-center text-xs text-stone-700 mt-1">
            © {new Date().getFullYear()} Annette Theobald · Mobile Friseurin Bad Säckingen
          </p>
        </div>
      </Container>
    </footer>
  );
}
