import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MapPin } from "lucide-react";

const areas = [
  {
    label: "Bad Säckingen",
    icon: "📍",
    places: [
      "Kernstadt",
      "Wallbach",
      "Rippolingen",
      "Harpolingen",
      "Obersäckingen",
      "Liedertswil",
      "Bad Abbach",
    ],
  },
  {
    label: "Angrenzende Gemeinden",
    icon: "🗺️",
    places: [
      "Murg",
      "Wehr",
      "Laufenburg",
      "Rheinfelden",
      "Rickenbach",
      "Herrischried",
      "Görwihl",
    ],
  },
];

export function ServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-950 via-zinc-900 to-stone-950">
      <Container>
        <SectionHeading
          title="Servicegebiet"
          subtitle="Ich komme direkt zu Ihnen – in Bad Säckingen und Umgebung"
        />

        {/* Intro-Badge */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-amber-900/40 border border-amber-700/40 rounded-full px-6 py-3 mb-6">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-amber-300 font-medium text-sm tracking-wide">
              Mobile Friseurin · Hausbesuche im Raum Bad Säckingen
            </span>
          </div>
          <p className="text-stone-400 leading-relaxed">
            Sie wohnen in Bad Säckingen oder einer der umliegenden Gemeinden?
            Dann komme ich direkt zu Ihnen – ohne Aufpreis für Fahrten innerhalb
            des Servicegebiets. Einfach Termin vereinbaren, fertig.
          </p>
        </div>

        {/* Orte-Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.label}
              className="bg-stone-900/70 border border-amber-900/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{area.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-amber-300">
                  {area.label}
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {area.places.map((place) => (
                  <li
                    key={place}
                    className="flex items-center gap-2 text-sm text-stone-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hinweis für weitere Orte */}
        <p className="text-center text-stone-500 text-sm mt-10">
          Ihr Ort ist nicht dabei?{" "}
          <a
            href="tel:+491705263873"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            Einfach anrufen
          </a>{" "}
          – wir finden eine Lösung.
        </p>
      </Container>
    </section>
  );
}
