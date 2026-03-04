import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { AboutAnnette } from "@/components/sections/AboutAnnette";

// Below-the-fold Komponenten: lazy-loaded für schnelleren Initial-Load
const ServicesPreview = dynamic(
  () =>
    import("@/components/sections/ServicesPreview").then(
      (mod) => mod.ServicesPreview,
    ),
  { ssr: true },
);
const GalleryPreview = dynamic(
  () =>
    import("@/components/sections/GalleryPreview").then(
      (mod) => mod.GalleryPreview,
    ),
  { ssr: true },
);
const PricingPreview = dynamic(
  () =>
    import("@/components/sections/PricingPreview").then(
      (mod) => mod.PricingPreview,
    ),
  { ssr: true },
);
const ReviewsPlaceholder = dynamic(
  () =>
    import("@/components/sections/ReviewsPlaceholder").then(
      (mod) => mod.ReviewsPlaceholder,
    ),
  { ssr: true },
);
const ServiceArea = dynamic(
  () =>
    import("@/components/sections/ServiceArea").then(
      (mod) => mod.ServiceArea,
    ),
  { ssr: true },
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((mod) => mod.FAQ),
  { ssr: true },
);
const FinalCTA = dynamic(
  () =>
    import("@/components/sections/FinalCTA").then((mod) => mod.FinalCTA),
  { ssr: true },
);

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
