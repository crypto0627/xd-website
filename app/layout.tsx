import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XueDAO",
  description: "XueDAO, a student-run DAO for students.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  keywords: ["XueDAO", "xuedao", "xue dao", "xue", "dao", "學到", "學道", "Web3", "student DAO", "blockchain", "decentralized", "students"],
  authors: [{ name: "Jake Kuo" }],
  robots: "all",
  alternates: {
    canonical: "https://www.xuedao.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1CPRXW8L1Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CPRXW8L1Z');
          `}
        </Script>
      </body>
    </html>
  );
}
