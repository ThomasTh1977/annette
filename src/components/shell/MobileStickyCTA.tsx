"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function MobileStickyCTA() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-rose-100 p-3 md:hidden shadow-lg shadow-rose-100/50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex gap-3">
        <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-2 border-rose-200 bg-white text-rose-600 hover:bg-rose-50 font-semibold py-2.5 rounded-xl text-sm sm:text-base transition-all duration-200"
          >
            <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Anrufen
            </a>
          </Button>
        </motion.div>
        <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-2.5 rounded-xl text-sm sm:text-base shadow-md shadow-rose-200 border-0 transition-all duration-200"
          >
            <a href={buildWhatsAppLink()} rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Termin anfragen
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
