import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shell/Header";
import { Footer } from "@/components/shell/Footer";
import { MobileStickyCTA } from "@/components/shell/MobileStickyCTA";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://annette-theobald.de"),
  title: "Annette Theobald - Mobile Friseurin Bad Säckingen",
  description: "Professionelle mobile Friseurdienste in Bad Säckingen und Umgebung. Hausbesuche für Haarschnitte, Färben und Styling. Vereinbaren Sie Ihren Termin jetzt.",
  keywords: "Friseur, mobile Friseurin, Bad Säckingen, Haarschnitt, Färben, Hausbesuch",
  authors: [{ name: "Annette Theobald" }],
  openGraph: {
    title: "Annette Theobald – Mobile Friseurin Bad Säckingen",
    description: "Professionelle Friseurdienste direkt bei Ihnen zu Hause. Haarschnitt, Färben & Styling – bequem & unkompliziert.",
    url: "https://annette-theobald.de",
    siteName: "Annette Theobald Mobile Friseurin",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/friseur-2.jpg",
        width: 1200,
        height: 800,
        alt: "Annette Theobald – Mobile Friseurin Bad Säckingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annette Theobald – Mobile Friseurin Bad Säckingen",
    description: "Professionelle Friseurdienste direkt bei Ihnen zu Hause.",
    images: ["/images/friseur-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${raleway.variable} ${playfairDisplay.variable} ${greatVibes.variable} font-sans antialiased bg-gradient-to-br from-stone-950 via-zinc-900 to-stone-950 min-h-screen`}
      >
        <Header />
        <div className="pt-20 xl:pt-24 pb-24 md:pb-0"> {/* Account for fixed header (h-20/xl:h-24) and mobile sticky CTA */}
          {children}
        </div>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
