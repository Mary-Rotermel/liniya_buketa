import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  display: "swap"
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://line-bouquet.example.com"),
  title: {
    default: "Линия Букета | Цветочный магазин у метро Беляево",
    template: "%s | Линия Букета"
  },
  description:
    "Авторские букеты, свадебная флористика и доставка цветов по Москве, Беляево, Коньково, Калужская и ЮЗАО.",
  keywords: [
    "цветочный магазин Беляево",
    "доставка цветов Беляево",
    "букеты Коньково",
    "цветы Калужская",
    "свадебные букеты Москва",
    "Линия Букета"
  ],
  openGraph: {
    title: "Линия Букета",
    description: "Букеты, которые говорят за вас. Доставка цветов по Москве и ЮЗАО.",
    type: "website",
    locale: "ru_RU"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
