"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Palette,
  Sparkles,
  Eye,
  MessageCircle,
  Check,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { serviceCategories, type ServiceOption } from "@/lib/services";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-5 h-5" />,
  palette: <Palette className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  eye: <Eye className="w-5 h-5" />,
};

export function ServiceConfigurator() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Map<string, ServiceOption>>(new Map());

  const currentCategory = serviceCategories[step];
  const isLastStep = step === serviceCategories.length - 1;
  const isSummary = step === serviceCategories.length;

  const totalPrice = useMemo(() => {
    let total = 0;
    selected.forEach((opt) => {
      total += opt.price;
    });
    return total;
  }, [selected]);

  const hasStartingPrices = useMemo(() => {
    let has = false;
    selected.forEach((opt) => {
      if (opt.isStartingPrice) has = true;
    });
    return has;
  }, [selected]);

  const selectedCount = selected.size;

  function toggleService(option: ServiceOption) {
    setSelected((prev) => {
      const next = new Map(prev);
      if (next.has(option.id)) {
        next.delete(option.id);
      } else {
        next.set(option.id, option);
      }
      return next;
    });
  }

  function buildWhatsAppMessage(): string {
    if (selectedCount === 0) return "";
    const lines = ["Hallo Annette,\n\nich interessiere mich f\u00FCr folgende Leistungen:\n"];
    selected.forEach((opt) => {
      lines.push(`\u2022 ${opt.name} (${opt.priceLabel})`);
    });
    lines.push(
      `\nGesch\u00E4tzter Gesamtpreis: ${hasStartingPrices ? "ab " : ""}${totalPrice}\u20AC`
    );
    lines.push("\nWann h\u00E4tten Sie Zeit? Ich freue mich auf Ihre R\u00FCckmeldung!");
    return lines.join("\n");
  }

  function handleWhatsApp() {
    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/491705263873?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setSelected(new Map());
    setStep(0);
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Termin-Konfigurator"
          subtitle="W\u00E4hlen Sie Ihre Wunschleistungen und senden Sie Ihre Anfrage direkt per WhatsApp"
        />

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-3">
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setStep(i)}
                className={cn(
                  "flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors",
                  i === step
                    ? "text-amber-400"
                    : i < step
                      ? "text-amber-600"
                      : "text-stone-600"
                )}
              >
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all",
                    i === step
                      ? "border-amber-400 bg-amber-400/20 text-amber-300"
                      : i < step
                        ? "border-amber-700 bg-amber-700/30 text-amber-500"
                        : "border-stone-700 bg-stone-800 text-stone-500"
                  )}
                >
                  {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{cat.name}</span>
              </button>
            ))}
            <button
              onClick={() => setStep(serviceCategories.length)}
              className={cn(
                "flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors",
                isSummary
                  ? "text-amber-400"
                  : step > serviceCategories.length - 1
                    ? "text-amber-600"
                    : "text-stone-600"
              )}
            >
              <span
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all",
                  isSummary
                    ? "border-amber-400 bg-amber-400/20 text-amber-300"
                    : "border-stone-700 bg-stone-800 text-stone-500"
                )}
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </span>
              <span className="hidden sm:inline">Senden</span>
            </button>
          </div>
          <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
              initial={false}
              animate={{ width: `${((step + 1) / (serviceCategories.length + 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Content area */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSummary ? (
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-800/50 flex items-center justify-center text-amber-400">
                    {categoryIcons[currentCategory.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-200">
                      {currentCategory.name}
                    </h3>
                    <p className="text-sm text-stone-500">Tippen zum Ausw\u00E4hlen</p>
                  </div>
                </div>

                {/* Service options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCategory.options.map((option) => {
                    const isSelected = selected.has(option.id);
                    return (
                      <motion.button
                        key={option.id}
                        onClick={() => toggleService(option)}
                        whileTap={{ scale: 0.97 }}
                        className={cn(
                          "relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 text-left",
                          isSelected
                            ? "border-amber-500 bg-amber-900/30 shadow-lg shadow-amber-900/20"
                            : "border-stone-800 bg-stone-900/50 hover:border-stone-700 hover:bg-stone-900"
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <p
                            className={cn(
                              "font-medium text-sm truncate",
                              isSelected ? "text-amber-200" : "text-stone-300"
                            )}
                          >
                            {option.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 ml-3 shrink-0">
                          <span
                            className={cn(
                              "text-sm font-bold",
                              isSelected ? "text-amber-400" : "text-stone-500"
                            )}
                          >
                            {option.priceLabel}
                          </span>
                          <div
                            className={cn(
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                              isSelected
                                ? "border-amber-500 bg-amber-500"
                                : "border-stone-700 bg-transparent"
                            )}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-stone-950" />}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* Summary step */
              <motion.div
                key="summary"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-2xl border-2 border-amber-800/50 bg-stone-900/60 p-6">
                  <h3 className="text-lg font-semibold text-amber-200 mb-4">
                    Ihre Auswahl
                  </h3>

                  {selectedCount === 0 ? (
                    <p className="text-stone-500 text-center py-8">
                      Noch keine Leistungen ausgew\u00E4hlt. Gehen Sie zur\u00FCck und w\u00E4hlen
                      Sie Ihre Wunschleistungen.
                    </p>
                  ) : (
                    <>
                      <ul className="space-y-3 mb-6">
                        {Array.from(selected.values()).map((opt) => (
                          <li
                            key={opt.id}
                            className="flex items-center justify-between py-2 border-b border-stone-800 last:border-0"
                          >
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-amber-500 shrink-0" />
                              <span className="text-stone-300 text-sm">{opt.name}</span>
                            </div>
                            <span className="text-amber-400 font-semibold text-sm">
                              {opt.priceLabel}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Total */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-amber-800/50">
                        <span className="text-stone-400 font-medium">Gesch\u00E4tzt gesamt</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                          {hasStartingPrices && "ab "}
                          {totalPrice}\u20AC
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-2">
                        Richtpreise \u2013 der finale Preis kann je nach Aufwand variieren.
                      </p>

                      {/* WhatsApp CTA */}
                      <motion.div className="mt-6" whileTap={{ scale: 0.97 }}>
                        <Button
                          onClick={handleWhatsApp}
                          size="lg"
                          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold py-4 rounded-xl text-base shadow-lg shadow-amber-900/40 border-0 transition-all duration-200"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Per WhatsApp anfragen
                        </Button>
                      </motion.div>
                    </>
                  )}

                  {/* Reset */}
                  {selectedCount > 0 && (
                    <button
                      onClick={reset}
                      className="flex items-center gap-1.5 mx-auto mt-4 text-xs text-stone-600 hover:text-stone-400 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Auswahl zur\u00FCcksetzen
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating price indicator */}
          <AnimatePresence>
            {selectedCount > 0 && !isSummary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 md:static md:translate-x-0 md:mt-6"
              >
                <div className="bg-stone-900/95 backdrop-blur-md border-2 border-amber-800/60 rounded-2xl px-5 py-3 shadow-xl shadow-amber-900/30 flex items-center gap-4">
                  <div>
                    <p className="text-xs text-stone-500">
                      {selectedCount} {selectedCount === 1 ? "Leistung" : "Leistungen"}
                    </p>
                    <p className="text-lg font-bold text-amber-400">
                      {hasStartingPrices && "ab "}
                      {totalPrice}\u20AC
                    </p>
                  </div>
                  <Button
                    onClick={() => setStep(serviceCategories.length)}
                    size="sm"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl border-0"
                  >
                    Weiter
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="border-stone-700 text-stone-400 hover:bg-stone-800 hover:text-stone-200 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Zur\u00FCck
            </Button>
            {!isSummary && (
              <Button
                onClick={() => setStep(step + 1)}
                className="bg-amber-900/50 hover:bg-amber-900/70 text-amber-300 border border-amber-800/50"
              >
                {isLastStep ? "Zusammenfassung" : "Weiter"}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
