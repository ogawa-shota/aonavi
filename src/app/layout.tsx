import type { Metadata } from "next";
import { Archivo_Black, Barlow_Condensed, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

const sans = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const latin = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const display = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AOナビ | 総合型選抜の大学・塾検索ポータル",
  description:
    "総合型選抜（旧AO入試）に特化した、年内入試マッチング × 対策塾検索 × 合格ノウハウメディア。あなたに合う大学・塾・対策法をワンストップで。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${sans.variable} ${latin.variable} ${display.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
