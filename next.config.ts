import type { NextConfig } from "next";

const securityHeaders = [
  // Clickjacking-Schutz
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // MIME-Sniffing verhindern
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Referrer-Informationen einschränken
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Unnötige Browser-Features deaktivieren (inkl. FLoC/interest-cohort)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // DNS-Prefetch erlauben (Performance)
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // HSTS: HTTPS für 1 Jahr erzwingen (war vorher fehlend)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // CSP: XSS-Schutz (war vorher fehlend)
  // Next.js benötigt unsafe-inline für Hydration-Scripts
  // Google Fonts explizit erlaubt; externe Bilder blockiert
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    // Unsplash entfernt – alle Bilder sind lokal in /public/images/
    remotePatterns: [],
  },
};

export default nextConfig;
