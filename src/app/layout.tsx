import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora Security — Plataforma Enterprise de Cibersegurança",
  description:
    "Proteja infraestrutura, aplicações e dados com uma plataforma de segurança inteligente criada para equipes modernas. Detecte ameaças, priorize riscos e responda em tempo real.",
  keywords: [
    "cibersegurança",
    "segurança B2B",
    "detecção de ameaças",
    "segurança enterprise",
    "gestão de vulnerabilidades",
    "plataforma de segurança",
  ],
  openGraph: {
    title: "Nexora Security — Plataforma Enterprise de Cibersegurança",
    description:
      "Proteja infraestrutura, aplicações e dados com uma plataforma de segurança inteligente criada para equipes modernas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Nexora Security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Security — Plataforma Enterprise de Cibersegurança",
    description:
      "Proteja infraestrutura, aplicações e dados com uma plataforma de segurança inteligente criada para equipes modernas.",
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
