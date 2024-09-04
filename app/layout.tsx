import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "xuedao",
  description: "XueDAO, a student-run DAO for students.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  openGraph: {
    title: "XueDAO",
    description: "XueDAO is a student-run DAO for students.",
    url: "https://www.xuedao.xyz",
    type: "website",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "XueDAO logo",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.xuedao.xyz" />
        <meta name="author" content="Jake Kuo" />
        <meta name="keywords" content="XueDAO, Web3, student DAO, blockchain, decentralized, students" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
