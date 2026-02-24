"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full bg-stone-900/80 backdrop-blur-sm border border-amber-900/30 shadow-lg hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-500 group overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardHeader className="relative z-10">
          {icon && (
            <motion.div
              className="mb-4 p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl w-fit text-stone-950 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
          )}
          <CardTitle className="text-xl text-stone-200 group-hover:text-amber-400 transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-base leading-relaxed text-stone-400">
            {description}
          </CardDescription>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Card>
    </motion.div>
  );
}