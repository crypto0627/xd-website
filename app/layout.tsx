import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xuedao - office website",
  description: "XueDAO, a student-run DAO for students.",
  icons: {
    icon: "/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.xuedao.xyz" />
        <meta name="author" content="Jake Kuo" />
        <meta name="keywords" content="XueDAO, xuedao, Web3, student DAO, blockchain, decentralized, students" />
        {/* Google Analytics GTag Script */}
        <GoogleAnalytics gaId="G-1CPRXW8L1Z" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
