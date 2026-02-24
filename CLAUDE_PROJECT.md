# 🟣 Claude Project Brief (TECHNICAL + DESIGN QUALITY BAR)
## Annette Theobald – Mobile Friseurin (Bad Säckingen)

---

## 0) Absolutes Ziel
Baue eine Website, die aussieht wie von einer Premium-Agentur:
- **Kein KI-Template-Look**
- **Pixel-sauber**, konsistente Abstände
- **Sehr gute Typografie**
- **Sehr schnelle Performance**
- **Mobile-first**
- Conversion: **WhatsApp + Anruf** (kein E-Mail, kein Formular)

---

## 1) Business-Daten (fix)
**Business:** Annette Theobald – Mobile Friseurin  
**Adresse (Impressum):** Purkersdorfersterasse 35, 79713 Bad Säckingen, Deutschland  
**Telefon:** +49 170 5263873  
**WhatsApp:** https://wa.me/491705263873 (prefilled message nutzen)

**Kleinunternehmer-Hinweis (unter Preisbereich):**
> „Als Kleinunternehmerin gem. §19 UStG wird keine Umsatzsteuer ausgewiesen.“

---

## 2) Tech-Stack (verbindlich)
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI)
- **Framer Motion** (dezente Micro-Animations)
- **next-seo / metadata** (App Router: `generateMetadata` + OpenGraph)
- **next-sitemap** (Sitemap + robots.txt)
- **ESLint + Prettier** (mit striktem Setup)
- **Husky + lint-staged** (Pre-commit quality gate)
- **pnpm** (bevorzugt; wenn npm, dann konsequent npm)
- **Vercel-ready** (zero-config deploy)

Kein Backend, keine DB, kein Email-Service.

---

## 3) “Plugins” / Dependencies (konkret installieren)
### Core
- next, react, react-dom
- typescript
- tailwindcss, postcss, autoprefixer

### UI / Components
- shadcn/ui + radix:
  - @radix-ui/react-dialog (für Lightbox)
  - @radix-ui/react-tabs (Galerie Filter)
  - @radix-ui/react-accordion (FAQ)
  - @radix-ui/react-navigation-menu (Header)
  - @radix-ui/react-icons (optional)
- lucide-react (Icons)
- clsx + tailwind-merge (class helpers)
- class-variance-authority (shadcn patterns)

### Animation
- framer-motion

### Images / Gallery
- yet-another-react-lightbox (oder sauberer Radix Dialog + custom lightbox)
  - falls Library: `yet-another-react-lightbox` + `yet-another-react-lightbox/styles.css`
  - ansonsten custom Lightbox in /components

### SEO
- next-sitemap

### Tooling
- eslint + eslint-config-next
- prettier + prettier-plugin-tailwindcss
- husky + lint-staged
- @types/node, @types/react, @types/react-dom

Optional (wenn du es wirklich sauber machen willst):
- @vercel/analytics (nur wenn gewünscht; sonst weglassen)

---

## 4) Projektstruktur (verbindlich)