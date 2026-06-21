import type { Metadata } from "next";
import { Header, Footer } from "./components/Shared";
import { RevealAnimations } from "./components/RevealAnimations";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interpaint - Peskarenje i antikorozivna zaštita",
  description:
    "Interpaint Novi Sad - EcoBlasting, peskarenje, antikorozivna i protivpožarna zaštita metalnih, drvenih, betonskih i kamenih površina.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>
        <Header />
        {children}
        <Footer />
        <RevealAnimations />
      </body>
    </html>
  );
}
