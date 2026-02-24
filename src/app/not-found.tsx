import Link from "next/link";
import { Container } from "@/components/shell/Container";

export const dynamic = "force-static";
export const revalidate = false;

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-slate-900">404 - Seite nicht gefunden</h1>
        <p className="text-xl text-slate-600 mb-8">
          Die angeforderte Seite existiert leider nicht.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </Container>
    </div>
  );
}
