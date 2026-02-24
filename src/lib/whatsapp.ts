export function buildWhatsAppLink(message: string = "Hallo Annette, ich interessiere mich für Ihre Dienstleistungen.") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/491705263873?text=${encoded}`;
}