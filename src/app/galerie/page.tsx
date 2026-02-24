import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Galerie - Annette Theobald",
  "Frisurengalerie mit Arbeiten für Damen, Herren, Kinder und Färbungen."
);

const galleryCategories = {
  alle: [
    { src: "/images/friseur-1.jpg", alt: "Haarschnitt – blonde Haare" },
    { src: "/images/friseur-2.jpg", alt: "Eleganter Schnitt" },
    { src: "/images/friseur-3.jpg", alt: "Haarfarbe blond" },
    { src: "/images/friseur-4.jpg", alt: "Modernes Styling" },
    { src: "/images/friseur-5.jpg", alt: "Festfrisur" },
  ],
  dames: [
    { src: "/images/friseur-1.jpg", alt: "Professioneller Haarschnitt – blonde Haare" },
    { src: "/images/friseur-3.jpg", alt: "Eleganter Bob-Schnitt" },
  ],
  farbe: [
    { src: "/images/friseur-4.jpg", alt: "Highlights und Strähnentechnik" },
    { src: "/images/friseur-2.jpg", alt: "Modernes Colordesign" },
  ],
  styling: [
    { src: "/images/friseur-5.jpg", alt: "Festfrisur für besondere Anlässe" },
    { src: "/images/friseur-3.jpg", alt: "Braut Styling" },
  ],
  pflege: [
    { src: "/images/friseur-2.jpg", alt: "Intensive Haarpflege" },
    { src: "/images/friseur-4.jpg", alt: "Haarkur & Behandlung" },
  ],
};

export default function Galerie() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionHeading
            title="Galerie"
            subtitle="Einblick in meine Arbeit"
          />
          <Tabs defaultValue="alle" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="alle">Alle</TabsTrigger>
              <TabsTrigger value="dames">Schnitt</TabsTrigger>
              <TabsTrigger value="farbe">Farbe</TabsTrigger>
              <TabsTrigger value="styling">Styling</TabsTrigger>
              <TabsTrigger value="pflege">Pflege</TabsTrigger>
            </TabsList>
            {Object.entries(galleryCategories).map(([key, images]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}