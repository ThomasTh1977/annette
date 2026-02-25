"use client";

import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/faq-de";

export function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-stone-900 to-zinc-950">
      <Container>
        <SectionHeading
          title="Häufige Fragen"
          subtitle="Alles, was Sie vor dem ersten Termin wissen möchten"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-stone-900/70 border border-amber-900/30 rounded-xl px-6 overflow-hidden data-[state=open]:border-amber-600/50"
              >
                <AccordionTrigger className="text-left font-sans font-medium text-stone-200 hover:text-amber-400 hover:no-underline py-5 text-base [&[data-state=open]]:text-amber-400 transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-400 leading-relaxed pb-5 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
