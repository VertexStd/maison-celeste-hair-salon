import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { brand } from "@/lib/brand";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.fullName} — Luxury Hair. Timeless Style.`,
    template: `%s | ${brand.fullName}`,
  },
  description:
    "Maison Céleste is a luxury hair salon in Milan offering precision haircuts, balayage, professional color, extensions, keratin treatments, hair botox, bridal hairstyling, and premium hair spa rituals.",
  keywords: [
    "Luxury Hair Salon",
    "Hair Salon Near Me",
    "Luxury Haircuts",
    "Professional Hair Color",
    "Balayage Specialist",
    "Hair Extensions",
    "Keratin Treatment",
    "Hair Botox",
    "Luxury Hair Styling",
    "Hair Spa",
    "Bridal Hairstyling",
    "Premium Hair Salon",
    "Healthy Hair Treatments",
    "Professional Hair Colorists",
  ],
  openGraph: {
    title: `${brand.fullName} — Luxury Hair. Timeless Style.`,
    description:
      "Where exceptional hair meets timeless elegance. Book your luxury appointment in Milan.",
    type: "website",
    locale: "en_IT",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: brand.fullName,
  description: brand.tagline,
  telephone: brand.phone,
  email: brand.email,
  url: "https://maisonceleste.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Montenapoleone 12",
    addressLocality: "Milano",
    postalCode: "20121",
    addressCountry: "IT",
  },
  openingHours: "Tu-Sa 09:30-20:00",
  priceRange: "€€€",
  image: "https://maisonceleste.com/images/hero/hero-salon.png",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
