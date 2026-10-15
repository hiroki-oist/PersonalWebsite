import { Open_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ← GA用に追加

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Hiroki Sawada",
  description: "Hiroki Sawada — AI and Robotics researcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head />
      <body className={`${openSans.variable} ${notoSansJp.variable} antialiased`}>
        {/* ✅ Google Analytics タグ */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NREZ3ZQ88E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NREZ3ZQ88E');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
