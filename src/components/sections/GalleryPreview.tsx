"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "/images/friseur-2.jpg",
  "/images/friseur-3.jpg",
  "/images/friseur-4.jpg",
  "/images/friseur-5.jpg",
];

export function GalleryPreview() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-stone-950 to-zinc-900 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23000000%27%20fill-opacity=%270.02%27%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%274%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            title="Galerie"
            subtitle="Einblick in meine Arbeit"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-square relative overflow-hidden rounded-2xl group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={src}
                alt={`Frisur Beispiel ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-sm font-medium">Frisur {index + 1}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 shadow-lg shadow-amber-900/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
            <Link href="/galerie">Vollständige Galerie ansehen</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}