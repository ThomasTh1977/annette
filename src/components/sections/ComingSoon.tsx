"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Star, Heart } from "lucide-react";

export function ComingSoon() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-900/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] bg-amber-800/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-16 left-[8%] text-amber-600/40 pointer-events-none"
        animate={{ rotate: [0, 20, -8, 0], y: [0, -10, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Scissors className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute top-24 right-[10%] text-amber-500/30 pointer-events-none"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-8 h-8 fill-amber-400/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[12%] text-yellow-500/30 pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-9 h-9" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-[8%] text-amber-500/25 pointer-events-none"
        animate={{ rotate: [0, -25, 10, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Heart className="w-7 h-7 fill-rose-300/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Scissors icon */}
          <motion.div
            className="mx-auto mb-8 w-20 h-20 rounded-full bg-amber-900/30 border-2 border-amber-700/50 flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Scissors className="w-9 h-9 text-amber-400" />
          </motion.div>

          {/* Name */}
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-tight mb-4 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent gold-glow italic">
            Annette Theobald
          </h1>

          {/* Subtitle */}
          <p className="text-amber-500/80 text-sm font-semibold tracking-widest uppercase mb-6">
            Mobile Friseurin
          </p>

          {/* Divider */}
          <div className="mx-auto mb-8 w-16 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400" />

          {/* Coming soon text */}
          <motion.p
            className="text-stone-400 text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Die Website wird gerade vorbereitet und ist in K&uuml;rze f&uuml;r Sie da.
          </motion.p>

          {/* Contact hint */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-stone-500 text-sm">Terminanfragen gerne telefonisch:</p>
            <a
              href="tel:+491705263873"
              className="inline-flex items-center gap-2 bg-amber-900/40 text-amber-300 font-semibold px-6 py-3 rounded-full border border-amber-700/50 hover:bg-amber-900/60 hover:border-amber-600 transition-all duration-300 text-lg tracking-wide"
            >
              0170 526 3873
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
