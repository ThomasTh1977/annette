"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, Scissors } from "lucide-react";
import { navigation } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-rose-100/80 shadow-sm shadow-rose-100/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <div className="flex h-20 xl:h-24 items-center justify-between gap-6">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-md shadow-rose-200 shrink-0">
                <Scissors className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl xl:text-2xl bg-gradient-to-r from-rose-700 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] xl:text-xs text-rose-400 font-medium tracking-widest uppercase">
                  Mobile Friseurin · Bad Säckingen
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-12 mx-auto">
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="relative group text-base xl:text-lg font-medium text-stone-600 hover:text-rose-600 transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-rose-500 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hidden sm:flex items-center gap-2 border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 text-base xl:text-lg px-5 xl:px-6 h-11 xl:h-12 rounded-xl font-semibold transition-all duration-200"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
                  Anrufen
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold shadow-md shadow-rose-200 hover:shadow-rose-300 text-base xl:text-lg px-5 xl:px-6 h-11 xl:h-12 rounded-xl transition-all duration-200 border-0"
              >
                <a href={buildWhatsAppLink()} rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 xl:w-5 xl:h-5" />
                  <span className="hidden sm:inline">Termin anfragen</span>
                </a>
              </Button>
            </motion.div>
          </div>

        </div>
      </Container>
    </motion.header>
  );
}
