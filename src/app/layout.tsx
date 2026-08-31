import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070A",
};

export const metadata: Metadata = {
  title: "Nexora Security — Cybersecurity para empresas modernas",
  description:
    "Centralize vulnerabilidades, ameaças, identidades e riscos em uma plataforma de segurança criada para equipes modernas. Detecte ameaças, priorize riscos e responda em tempo real.",
  keywords: [
    "cibersegurança",
    "segurança B2B",
    "detecção de ameaças",
    "segurança enterprise",
    "gestão de vulnerabilidades",
    "plataforma de segurança",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Nexora Security — Cybersecurity para empresas modernas",
    description:
      "Centralize vulnerabilidades, ameaças, identidades e riscos em uma plataforma de segurança criada para equipes modernas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Nexora Security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Security — Cybersecurity para empresas modernas",
    description:
      "Centralize vulnerabilidades, ameaças, identidades e riscos em uma plataforma de segurança criada para equipes modernas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#05070A] text-[#F7F9FC] font-sans">
        {children}
      </body>
    </html>
  );
}
