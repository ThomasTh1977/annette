"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/common/FeatureCard";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles } from "lucide-react";
import { copy } from "@/content/copy-de";

export function ServicesPreview() {
  const icons = [Scissors, Palette, Sparkles];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50/60 via-white to-pink-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full blur-3xl opacity-30" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            title={copy.services.title}
            subtitle="Professionelle Friseurdienste für Damen, Herren und Kinder"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {copy.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={service.name} variants={itemVariants}>
                <FeatureCard
                  title={service.name}
                  description={service.description}
                  icon={<Icon className="w-8 h-8" />}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg shadow-rose-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
            <Link href="/leistungen">Alle Leistungen ansehen</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}