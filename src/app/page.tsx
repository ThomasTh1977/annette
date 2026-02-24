import { Hero } from "@/components/sections/Hero";
import { AboutAnnette } from "@/components/sections/AboutAnnette";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { ReviewsPlaceholder } from "@/components/sections/ReviewsPlaceholder";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutAnnette />
      <ServicesPreview />
      <GalleryPreview />
      <PricingPreview />
      <ReviewsPlaceholder />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
    </>
  );
}
