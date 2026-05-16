import "./globals.css";

export const metadata = {
  title: "CSECNIX — Cybersecurity Solutions & Consulting | Abu Dhabi, UAE",
  description:
    "CSECNIX provides enterprise-grade cybersecurity services including email security, breach lookups, endpoint protection (AV/EDR), and business email integration. Protect your digital assets with our expert team in Abu Dhabi, UAE.",
  keywords:
    "cybersecurity, email security, endpoint protection, EDR, breach lookups, CSECNIX, Abu Dhabi, UAE, cyber defense, phishing protection, dark web monitoring",
  metadataBase: new URL("https://csecnix.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CSECNIX — Cybersecurity Solutions & Consulting",
    description:
      "Enterprise-grade cybersecurity services — email security, endpoint protection, breach lookups, and more. Based in Abu Dhabi, UAE.",
    url: "https://csecnix.com",
    siteName: "CSECNIX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSECNIX — Cybersecurity Solutions & Consulting",
    description:
      "Defend your digital frontier. Enterprise-grade cybersecurity from Abu Dhabi, UAE.",
  },
  verification: {
    yandex: "74815d0f9c17bf53",
    // google: "YOUR_GOOGLE_CODE",   ← already verified via DNS domain property
    // other: { "msvalidate.01": "YOUR_BING_CODE" },
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
  },
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CSECNIX",
  url: "https://csecnix.com",
  logo: "https://csecnix.com/images/csec-logo.png",
  description:
    "Enterprise-grade cybersecurity services including email security, endpoint protection, and breach lookups.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-50-137-0946",
    contactType: "sales",
    email: "info@csecnix.com",
    areaServed: "AE",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Spline R2 for faster 3D load */}
        <link rel="preconnect" href="https://assets.csecnix.com" />
        <link rel="dns-prefetch" href="https://assets.csecnix.com" />
        {/* Fallback Spline CDN */}
        <link rel="preconnect" href="https://prod.spline.design" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
