import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/data/navigation";
import { asset } from "@/lib/asset";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = { alternates: pageAlternates("/") };

export default function Home() {
  return (
    <main id="guide-content" tabIndex={-1}>
      <meta httpEquiv="refresh" content={`0;url=${asset(ROUTES.buyersGuides)}/`} />
      <Link href={ROUTES.buyersGuides}>Buyer’s Guides</Link>
    </main>
  );
}
