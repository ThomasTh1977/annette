import { Metadata } from "next";
import { ServiceConfigurator } from "@/components/sections/ServiceConfigurator";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(
  "Termin anfragen - Annette Theobald",
  "W\u00E4hlen Sie Ihre Wunschleistungen und senden Sie Ihre Terminanfrage direkt per WhatsApp an Annette Theobald, mobile Friseurin in Bad S\u00E4ckingen."
);

export default function Termin() {
  return (
    <>
      <ServiceConfigurator />
      <FinalCTA />
    </>
  );
}
