import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";
import ScrollToSection from "@/app/components/ScrollToSection";

const BASE_URL = "https://saamkro-n1-new.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Saamkro N1 — Signs, Furniture & Visual Advertising · Tbilisi",
        template: "%s | Saamkro N1",
    },
    description:
        "Tbilisi-based workshop crafting custom signs, furniture, and visual advertising. Full cycle: concept → fabrication → installation across Georgia. Est. 2015.",
    keywords: [
        "signage Tbilisi",
        "custom signs Georgia",
        "facade lighting",
        "visual advertising Tbilisi",
        "lightbox signs",
        "neon signs Georgia",
        "advertising workshop Tbilisi",
        "სააამქრო N1",
        "რეკლამა თბილისი",
        "ვიტრინა",
    ],
    authors: [{ name: "Saamkro N1", url: BASE_URL }],
    creator: "Saamkro N1",
    publisher: "Saamkro N1",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: "Saamkro N1 — Signs, Furniture & Visual Advertising",
        description:
            "Tbilisi-based workshop crafting custom signs, furniture, and visual advertising across Georgia. Est. 2015.",
        url: BASE_URL,
        siteName: "Saamkro N1",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${BASE_URL}/logo.jpg`,
                width: 1200,
                height: 630,
                alt: "Saamkro N1 — Signs & Visual Advertising, Tbilisi",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Saamkro N1 — Signs, Furniture & Visual Advertising",
        description:
            "Tbilisi-based workshop crafting custom signs, furniture, and visual advertising across Georgia. Est. 2015.",
        images: [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
        canonical: BASE_URL,
    },
    manifest: "/site.webmanifest",
    category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saamkro N1",
  description:
    "Tbilisi-based workshop crafting custom signs, furniture, and visual advertising. Full cycle: concept → fabrication → installation across Georgia.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpg`,
  image: `${BASE_URL}/logo.jpg`,
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tbilisi",
    addressCountry: "GE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.6941,
    longitude: 44.8337,
  },
  areaServed: {
    "@type": "Country",
    name: "Georgia",
  },
  serviceType: [
    "Custom Signage",
    "Facade Lighting",
    "Visual Advertising",
    "Furniture Manufacturing",
    "Lightbox Signs",
    "Retail Signage",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ScrollToSection />
          {children}
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
