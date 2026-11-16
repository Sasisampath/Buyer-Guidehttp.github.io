import Image from "next/image";
import Link from "next/link";
import type { BuyerGuide } from "@/data/buyer-guides";
import { readingMinutes } from "@/lib/reading-time";

// Gallery card (Euler /alternatives card) with a banner thumbnail. The whole card is one link.
export function GalleryCard({ guide }: { guide: BuyerGuide }) {
  return (
    <Link className="guide-card" href={guide.href}>
      <Image className="guide-card__banner" src={guide.banner} alt="" width={1672} height={941} sizes="(max-width: 639px) 100vw, 560px" unoptimized />
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <span className="guide-card__meta">
        {readingMinutes(guide.words)} min read · {guide.platforms} platforms
        <span className="guide-card__arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
