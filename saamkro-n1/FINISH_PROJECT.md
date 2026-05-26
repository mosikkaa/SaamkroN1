# Saamkro N1 — Project Completion Guide

> **Stack:** Next.js (TypeScript) · CSS Modules · Vercel  
> **Live site:** https://saamkro-n1-new.vercel.app  
> **Repo:** https://github.com/mosikkaa/SaamkroN1

---

## Current State Analysis

### What's Already Done ✅
- Next.js project bootstrapped (`saamkro-n1/` directory, TypeScript + CSS)
- Homepage with hero, services, projects preview, about, and contact sections
- Portfolio index page (`/portfolio`)
- Individual portfolio detail pages (`/portfolio/[id]`) — IDs 1–5 exist
- Bilingual toggle UI (🇬🇧 / 🇬🇪) visible in the navbar
- Contact section with phone, email, Google Maps link, and Facebook link
- Deployed to Vercel

### What's Missing / Incomplete ❌

| Area | Problem |
|------|---------|
| **i18n** | Language toggle renders flags but switching locale likely does nothing — no translation files wired up |
| **Contact form** | Form fields exist but `Send` button has no handler/API route |
| **Page `<title>` / SEO** | All pages show "Create Next App" — no real metadata |
| **Portfolio content** | Projects 1–5 each repeat the same hero image; descriptions are placeholder |
| **`/portfolio/[id]`** | Each project page shows 2 images (both the same); no text description block |
| **Services section** | Cards exist but no images/icons |
| **`robots.txt` / `sitemap.xml`** | Missing — hurts SEO |
| **Error pages** | No custom `404` or `500` |
| **Accessibility** | Images likely missing descriptive `alt` text; no skip-to-content link |

---

## Step-by-Step: What to Finish

### 1. Fix Page Titles & SEO Metadata

In every page file (`app/page.tsx` or `pages/index.tsx` depending on your router), export a `metadata` object (App Router) or use `next/head` (Pages Router).

**App Router example — `app/page.tsx`:**
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saamkro N1 — Signs, Furniture & Visual Advertising · Tbilisi",
  description:
    "Tbilisi-based workshop creating furniture, company signs, and advertising. Concept → fabrication → install across Georgia. Since 2015.",
  openGraph: {
    title: "Saamkro N1",
    description: "Signs, furniture & visual advertising made in Tbilisi.",
    url: "https://saamkro-n1-new.vercel.app",
    siteName: "Saamkro N1",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};
```

Repeat for `/portfolio` and `/portfolio/[id]` with project-specific titles.

---

### 2. Wire Up the Language Toggle (i18n)

The flag buttons exist but need a real i18n system. The simplest approach for Next.js is `next-intl`.

**Install:**
```bash
npm install next-intl
```

**Create translation files:**
```
saamkro-n1/
  messages/
    en.json
    ka.json   ← Georgian
```

**`messages/en.json`** (excerpt):
```json
{
  "nav": { "home": "Home", "services": "Services", "portfolio": "Portfolio", "about": "About", "contact": "Contact" },
  "hero": {
    "since": "Since 2015 — Tbilisi & beyond",
    "headline": "From an idea, to Reality",
    "sub": "We design and build standout furniture, company titles, and visual advertising."
  },
  "services": { "title": "Services" },
  "contact": { "title": "Let's build something", "send": "Send" }
}
```

**`messages/ka.json`** (excerpt):
```json
{
  "nav": { "home": "მთავარი", "services": "სერვისები", "portfolio": "პორტფოლიო", "about": "ჩვენს შესახებ", "contact": "კონტაქტი" },
  "hero": {
    "since": "2015 წლიდან — თბილისი და მის ფარგლებს გარეთ",
    "headline": "იდეიდან — რეალობამდე",
    "sub": "ვქმნით ავეჯს, კომპანიის ვიტრინებს და სარეკლამო გამოსახულებებს."
  },
  "services": { "title": "სერვისები" },
  "contact": { "title": "ავაშენოთ რაღაც", "send": "გაგზავნა" }
}
```

Follow the `next-intl` docs to add the middleware and wrap your layout — https://next-intl-docs.vercel.app/docs/getting-started/app-router

---

### 3. Make the Contact Form Work

**Option A — Simple (email via Resend or Nodemailer):**

Create `app/api/contact/route.ts`:
```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  // Validate
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Send via Resend (npm install resend)
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "website@saamkro1.com",
    to: "Business@saamkro1.com",
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
```

**In your contact form component, add the handler:**
```tsx
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form));

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Message sent! We'll reply within one business day.");
    form.reset();
  } else {
    alert("Something went wrong. Please email us directly.");
  }
}
```

**Add to `.env.local`:**
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

### 4. Fill In Portfolio Project Data

Create a central data file so all project info lives in one place:

**`src/data/projects.ts`:**
```ts
export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  images: string[];   // paths under /public/portfolio/
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "step-inn",
    title: "Step Inn",
    subtitle: "Facade lighting & signage",
    location: "Kazbegi, Georgia",
    description:
      "Night-time wayfinding and perimeter lighting for Step Inn hotel. Bilingual logo signage in Georgian and Latin script, powder-coated aluminium frame, LED backlit.",
    images: ["/portfolio/stepinn-1.jpg", "/portfolio/stepinn-2.jpg"],
  },
  {
    id: 2,
    slug: "tsinandali-estate",
    title: "Tsinandali Estate",
    subtitle: "Living facade signage",
    location: "Tsinandali, Georgia",
    description: "Large-format dimensional letters mounted to the estate's stone facade...",
    images: ["/portfolio/tsinandali-1.jpg"],
  },
  {
    id: 3,
    slug: "urban-tails",
    title: "Urban Tails",
    subtitle: "Retail canopy & lightbox",
    location: "Tbilisi, Georgia",
    description: "Custom steel canopy with integrated lightbox panel for a pet boutique...",
    images: ["/portfolio/urbantails-1.jpg"],
  },
  {
    id: 4,
    slug: "axis-towers",
    title: "Axis Towers — Weather Report",
    subtitle: "Interior letterforms",
    location: "Tbilisi, Georgia",
    description: "3D interior letterforms for the Weather Report restaurant inside Axis Towers...",
    images: ["/portfolio/axis-1.jpg"],
  },
  {
    id: 5,
    slug: "indorama",
    title: "Indorama",
    subtitle: "Industrial high-rise signage",
    location: "Tbilisi, Georgia",
    description: "High-visibility rooftop signage for an industrial facility...",
    images: ["/portfolio/indorama-1.jpg"],
  },
];
```

Then update `/portfolio/[id]/page.tsx` to import and use this data instead of hardcoded content.

---

### 5. Add `robots.txt` and `sitemap.xml`

**`public/robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://saamkro-n1-new.vercel.app/sitemap.xml
```

**`app/sitemap.ts`** (App Router generates it automatically):
```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://saamkro-n1-new.vercel.app", lastModified: new Date() },
    { url: "https://saamkro-n1-new.vercel.app/portfolio", lastModified: new Date() },
    ...[1, 2, 3, 4, 5].map((id) => ({
      url: `https://saamkro-n1-new.vercel.app/portfolio/${id}`,
      lastModified: new Date(),
    })),
  ];
}
```

---

### 6. Add a Custom 404 Page

**`app/not-found.tsx`:**
```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "8rem 1rem" }}>
      <h1>404 — Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">← Back to Home</Link>
    </main>
  );
}
```

---

### 7. Accessibility Quick Fixes

- Every `<Image>` must have a meaningful `alt`:
  ```tsx
  // ❌
  <Image src={img} alt="" />
  // ✅
  <Image src={img} alt="Step Inn hotel — LED facade signage at night, Kazbegi" />
  ```

- Add a skip-to-content link at the top of your layout:
  ```tsx
  <a href="#main-content" className="skip-link">Skip to content</a>
  ```
  ```css
  .skip-link {
    position: absolute;
    left: -9999px;
  }
  .skip-link:focus {
    left: 1rem;
    top: 1rem;
    z-index: 9999;
  }
  ```

---

## Priority Order

| Priority | Task | Effort |
|----------|------|--------|
| 🔴 High | Fix page `<title>` / metadata | 30 min |
| 🔴 High | Contact form API route | 1 hr |
| 🔴 High | Fill portfolio `projects.ts` data file | 1 hr |
| 🟡 Medium | i18n with `next-intl` | 2–3 hrs |
| 🟡 Medium | `sitemap.xml` + `robots.txt` | 20 min |
| 🟢 Low | Custom 404 page | 15 min |
| 🟢 Low | Accessibility alt text pass | 30 min |

---

## Environment Variables Needed

Add these to Vercel → Project → Settings → Environment Variables:

```
RESEND_API_KEY=        # for contact form emails
NEXT_PUBLIC_SITE_URL=https://saamkro-n1-new.vercel.app
```

---

## Useful Commands

```bash
# Install dependencies
cd saamkro-n1
npm install

# Run locally
npm run dev          # http://localhost:3000

# Type-check
npm run build        # also catches TS errors

# Add email library
npm install resend

# Add i18n
npm install next-intl
```

---

## Resources

- [next-intl docs](https://next-intl-docs.vercel.app/docs/getting-started/app-router)
- [Resend (email sending)](https://resend.com/docs/send-with-nextjs)
- [Next.js App Router Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
