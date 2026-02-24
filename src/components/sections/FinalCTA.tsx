import { Container } from "@/components/shell/Container";
import { CTAButton } from "@/components/common/CTAButton";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-600 via-rose-500 to-pink-500 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <Container>
        <div className="text-center relative z-10">
          <p className="text-rose-200 text-sm font-semibold tracking-widest uppercase mb-4">✨ Jetzt anfragen</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3.5rem)] font-bold mb-5 leading-tight">
            Bereit für Ihren nächsten Termin?
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.3rem)] mb-10 opacity-90 max-w-xl mx-auto">
            Kontaktieren Sie mich jetzt und vereinbaren Sie Ihren Hausbesuch – bequem & unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="whatsapp"
              className="bg-white text-rose-600 hover:bg-rose-50 font-semibold shadow-lg shadow-rose-700/30 hover:shadow-xl transition-all duration-300 text-base px-8 py-3 border-0"
            >
              Termin anfragen
            </CTAButton>
            <CTAButton
              variant="phone"
              className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white font-semibold transition-all duration-300 text-base px-8 py-3"
            >
              Anrufen
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}