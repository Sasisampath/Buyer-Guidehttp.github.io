import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { GridBackground } from "@/components/layout/grid-background";
import { DEFAULT_SITE_ICON, NOINDEX_ROBOTS, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = localFont({ src: "./fonts/inter.woff2", weight: "100 900", variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JazzHQ",
  icons: { icon: DEFAULT_SITE_ICON },
  robots: NOINDEX_ROBOTS,
};

// One Header and one Footer shared by every route.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body>
    <GridBackground>
      <a href="#guide-content" className="site-skip">Skip to guide</a>
      <Header />
      {children}
      <Footer />
    </GridBackground>
  </body></html>;
}
