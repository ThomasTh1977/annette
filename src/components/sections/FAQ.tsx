import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/content/faq-de";

export function FAQ() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Häufige Fragen"
          subtitle="Alles was Sie wissen möchten"
        />
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}