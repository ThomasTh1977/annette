'use client';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">Fehler</h1>
            <p className="text-xl text-slate-600 mb-8">
              Ein unerwarteter Fehler ist aufgetreten.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
