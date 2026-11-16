import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { GridBackground } from "@/components/layout/grid-background";
import { Footer } from "@/components/shared/footer";
import { description as prmDescription, intro as prmIntro, method, products as prmProducts } from "@/data/prm-guide";
import { criteria, faqs, maturity, recommendations, strategy } from "@/data/prm-evaluation";
import { guide } from "@/data/guide";
import { pageSeo } from "@/lib/seo";
import "@/components/buyers-guide/gallery.css";

const wordCount = (value: unknown) => String(JSON.stringify(value) ?? "").replace(/["{}\[\],:]/gu, " ").split(/\s+/u).filter(Boolean).length;
const prmMinutes = Math.ceil(wordCount([prmDescription, prmIntro, method, prmProducts, criteria, faqs, maturity, recommendations, strategy]) / 230);
const channelMinutes = Math.ceil(wordCount(guide) / 225);

export const metadata: Metadata = {
  ...pageSeo({
    title: "Buyer’s Guides | JazzHQ",
    description: "Compare partner relationship management and channel management platforms with JazzHQ’s practical software buyer’s guides.",
    path: "/buyers-guide",
    indexable: false,
  }),
};

const cards = [
  {
    title: "10 Best Partner Relationship Management Software in 2026",
    description: prmDescription,
    meta: `10 platforms · ${prmMinutes} min read`,
    href: "/buyers-guide/best-prm-software",
  },
  {
    title: "Channel Management Software: The Best 8 Platforms Compared",
    description: guide.description,
    meta: `8 platforms · ${channelMinutes} min read`,
    href: "/buyers-guide/channel-management-software",
  },
];

export default function BuyersGuideGallery() {
  return <GridBackground>
    <Header />
    <main className="buyers-gallery">
      <div className="buyers-gallery__intro">
        <p className="buyers-gallery__eyebrow">JazzHQ research</p>
        <h1>Buyer’s Guides</h1>
        <p>Independent, practical comparisons to help you find the right software for your partner program.</p>
      </div>
      <div className="buyers-gallery__list">
        {cards.map((card) => <Link className="buyers-guide-card" href={card.href} key={card.href}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <span className="buyers-guide-card__meta">{card.meta}<ArrowRight size={20} aria-hidden="true" /></span>
        </Link>)}
      </div>
    </main>
    <Footer />
  </GridBackground>;
}
