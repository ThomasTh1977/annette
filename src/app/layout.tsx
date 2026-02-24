import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shell/Header";
import { Footer } from "@/components/shell/Footer";
import { MobileStickyCTA } from "@/components/shell/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Annette Theobald - Mobile Friseurin Bad Säckingen",
  description: "Professionelle mobile Friseurdienste in Bad Säckingen und Umgebung. Hausbesuche für Haarschnitte, Färben und Styling. Vereinbaren Sie Ihren Termin jetzt.",
  keywords: "Friseur, mobile Friseurin, Bad Säckingen, Haarschnitt, Färben, Hausbesuch",
  authors: [{ name: "Annette Theobald" }],
  openGraph: {
    title: "Annette Theobald - Mobile Friseurin",
    description: "Professionelle mobile Friseurdienste in Bad Säckingen. Hausbesuche für alle Ihre Haarpflegebedürfnisse.",
    url: "https://annette-theobald.de",
    siteName: "Annette Theobald Mobile Friseurin",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annette Theobald - Mobile Friseurin",
    description: "Professionelle mobile Friseurdienste in Bad Säckingen.",
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
        className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-rose-50 via-white to-pink-50 min-h-screen`}
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
