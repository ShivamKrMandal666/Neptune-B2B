import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Neptune B2B — High-Conversion Websites for B2B Businesses",
    template: "%s | Neptune B2B",
  },
  description:
    "Neptune B2B builds high-conversion, fast, SEO-ready, mobile-optimized websites engineered to turn visitors into booked consultations. Led by Mandal Chandrashekhar Diwakar.",
  metadataBase: new URL("https://neptuneb2b.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Neptune B2B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
