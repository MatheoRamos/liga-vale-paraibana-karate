import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liga Vale Paraibana de Karatê",
  description: "Liga Vale Paraibana de Karatê Tradicional (LVPK) — filiação de dojos, graduações oficiais e karatê tradicional no Vale do Paraíba.",
};

// O site só tem tema claro: impede que o "modo escuro automático" de navegadores
// mobile (Samsung Internet, Chrome) recalcule as cores e deixe o laranja avermelhado.
export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
