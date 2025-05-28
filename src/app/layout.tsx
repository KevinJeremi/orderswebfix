import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Order - Solusi Digital Cepat dan Andal",
  description: "Order menyediakan solusi digital terbaik untuk pembuatan website, aplikasi mobile, dan sistem informasi. Hubungi kami untuk konsultasi gratis!",
  keywords: "website, aplikasi mobile, sistem informasi, digital solution, Order startup, pembuatan website, development, jakarta",
  authors: [{ name: "Order Team" }],
  creator: "Order",
  publisher: "Order",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://order.co.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Order - Solusi Digital Cepat dan Andal",
    description: "Order menyediakan solusi digital terbaik untuk pembuatan website, aplikasi mobile, dan sistem informasi.",
    url: "https://order.co.id",
    siteName: "Order",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order - Solusi Digital Cepat dan Andal",
    description: "Order menyediakan solusi digital terbaik untuk pembuatan website, aplikasi mobile, dan sistem informasi.",
    creator: "@order_id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
