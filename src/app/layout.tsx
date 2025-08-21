import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: 'taxi điện easup, taxi điện ea súp, taxi điện đắk lắk, đặt xe taxi điện, taxi điện trung anh, 3V45+26J Cư M\'Lan Ea Súp',
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/images/Trung_Anh_Tax.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/Trung_Anh_Tax.png'],
  },
  alternates: {
    canonical: `https://${siteDetails.siteUrl}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Taxi Điện Easup",
              "description": "Dịch vụ taxi điện an toàn, tiện lợi tại Ea Súp, Đắk Lắk",
              "url": `https://${siteDetails.siteUrl}`,
              "telephone": "+84835340340",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ea Súp",
                "addressRegion": "Đắk Lắk",
                "addressCountry": "VN",
                "streetAddress": "3V45+26J, Cư M'Lan"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.7",
                "longitude": "108.0"
              },
              "areaServed": {
                "@type": "City",
                "name": "Ea Súp"
              },
              "serviceType": "Taxi Service",
              "priceRange": "$$",
              "openingHours": "Mo-Su 00:00-23:59"
            })
          }}
        />
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        
        <main>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
