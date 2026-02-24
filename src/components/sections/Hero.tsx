"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Star, Heart } from "lucide-react";
import { Container } from "@/components/shell/Container";
import { CTAButton } from "@/components/common/CTAButton";
import { copy } from "@/content/copy-de";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] xl:min-h-[calc(100vh-6rem)] flex items-center py-16 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/60 to-amber-50/40">

      {/* Soft background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-200/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/25 rounded-full blur-3xl translate-x-1/3 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] bg-amber-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Floating hairdresser icons */}
      <motion.div
        className="absolute top-24 left-[6%] text-rose-300 pointer-events-none"
        animate={{ rotate: [0, 20, -8, 0], y: [0, -10, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scissors className="w-10 h-10 xl:w-14 xl:h-14 drop-shadow" />
      </motion.div>

      <motion.div
        className="absolute top-28 right-[8%] text-amber-400 pointer-events-none"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-8 h-8 xl:w-11 xl:h-11 fill-amber-300 drop-shadow" />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-[10%] text-pink-400 pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Sparkles className="w-9 h-9 xl:w-12 xl:h-12 drop-shadow" />
      </motion.div>

      <motion.div
        className="absolute bottom-36 right-[12%] text-rose-300 pointer-events-none"
        animate={{ rotate: [0, -25, 10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Heart className="w-7 h-7 xl:w-9 xl:h-9 fill-rose-200 drop-shadow" />
      </motion.div>

      {/* Small decorative dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-rose-300/50 pointer-events-none"
          style={{
            width: `${8 + i * 2}px`,
            height: `${8 + i * 2}px`,
            top: `${15 + i * 14}%`,
            left: `${3 + (i % 2) * 4}%`,
          }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-rose-200/80 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4" />
              Mobile Friseurin · Hausbesuche
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(2rem,4.5vw,6rem)] font-bold tracking-tight leading-tight mb-6 bg-gradient-to-r from-rose-700 via-rose-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[clamp(1rem,1.4vw,1.5rem)] text-stone-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTAButton
                variant="whatsapp"
                className="text-base xl:text-lg px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-rose-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {copy.hero.cta}
              </CTAButton>
              <CTAButton
                variant="phone"
                className="text-base xl:text-lg px-8 py-3 bg-white border-2 border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Anrufen
              </CTAButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>Top bewertet</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Scissors className="w-4 h-4 text-rose-400" />
                <span>20+ Jahre Erfahrung</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Heart className="w-4 h-4 fill-rose-300 text-rose-400" />
                <span>Direkt zu Ihnen nach Hause</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Image column ── */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Rotating decorative rings */}
            <motion.div
              className="absolute w-[105%] h-[105%] rounded-full border-2 border-rose-200/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[118%] h-[118%] rounded-full border border-dashed border-pink-200/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[130%] h-[130%] rounded-full border border-amber-200/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-rose-300 via-pink-300 to-amber-200 rounded-full blur-2xl opacity-35 pointer-events-none" />

              {/* Circular image */}
              <div className="relative bg-gradient-to-br from-rose-100 to-pink-50 rounded-full p-3 shadow-2xl shadow-rose-200/60">
                <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 xl:w-[26rem] xl:h-[26rem]">
                  <Image
                    src="/images/friseur-1.jpg"
                    alt="Annette Theobald – Mobile Friseurin bei der Arbeit"
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating info card – top right */}
              <motion.div
                className="absolute -top-4 -right-2 xl:-top-6 xl:-right-4 bg-white rounded-2xl shadow-lg shadow-rose-100/80 px-4 py-2.5 flex items-center gap-2.5 border border-rose-50"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <span className="text-xl">⭐</span>
                <div>
                  <div className="text-xs font-bold text-stone-800 leading-tight">5.0 Bewertung</div>
                  <div className="text-[10px] text-stone-400">Top Friseurin</div>
                </div>
              </motion.div>

              {/* Floating info card – bottom left */}
              <motion.div
                className="absolute -bottom-4 -left-2 xl:-bottom-6 xl:-left-4 bg-white rounded-2xl shadow-lg shadow-rose-100/80 px-4 py-2.5 flex items-center gap-2.5 border border-rose-50"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xl">✂️</span>
                <div>
                  <div className="text-xs font-bold text-stone-800 leading-tight">Hausbesuch</div>
                  <div className="text-[10px] text-stone-400">Bad Säckingen</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
