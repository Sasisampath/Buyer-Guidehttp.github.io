import Link from "next/link";
import type { BuyerGuide } from "@/data/buyer-guides";
import { readingMinutes } from "@/lib/reading-time";

// Text-first gallery card (Euler /alternatives card). The whole card is one link.
export function GalleryCard({ guide }: { guide: BuyerGuide }) {
  return (
    <Link className="guide-card" href={guide.href}>
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <span className="guide-card__meta">
        {readingMinutes(guide.words)} min read · {guide.platforms} platforms
        <span className="guide-card__arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
