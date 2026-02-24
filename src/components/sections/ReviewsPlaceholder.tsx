import { Container } from "@/components/shell/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Maria S.",
    text: "Sehr zufrieden mit dem Service. Annette kommt pünktlich und arbeitet professionell.",
    rating: 5,
  },
  {
    name: "Thomas K.",
    text: "Bequemer geht es nicht! Tolle Arbeit direkt zu Hause.",
    rating: 5,
  },
  {
    name: "Anna M.",
    text: "Meine Kinder lieben die Hausbesuche. Annette ist super mit Kindern.",
    rating: 5,
  },
];

export function ReviewsPlaceholder() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Kundenstimmen"
          subtitle="Was meine Kunden sagen"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}