import type { Metadata } from "next";
import { Header, Footer } from "./components/Shared";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interpaint - Peskarenje i antikorozivna zaštita",
  description:
    "Interpaint Novi Sad - EcoBlasting, peskarenje, antikorozivna i protivpožarna zaštita metalnih, drvenih, betonskih i kamenih površina.",
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
      </body>
    </html>
  );
}
