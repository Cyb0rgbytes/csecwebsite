import "./globals.css";

export const metadata = {
  title: "CSECNIX — Cybersecurity Solutions & Consulting",
  description:
    "CSECNIX provides enterprise-grade cybersecurity services including email security, breach lookups, endpoint protection, and business email integration. Protect your digital assets with our expert team.",
  keywords: "cybersecurity, email security, endpoint protection, EDR, breach lookups, CSECNIX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
