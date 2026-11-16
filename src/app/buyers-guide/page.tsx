import { GalleryCard } from "@/components/buyers-guide/gallery-card";
import { buyerGuides } from "@/data/buyer-guides";
import { ROUTES } from "@/data/navigation";
import { pageSeo } from "@/lib/seo";
import "@/components/buyers-guide/gallery.css";

// Intro sentence reused verbatim from Euler's /alternatives gallery.
const GALLERY_DESCRIPTION = "Explore software comparison guides to understand features, pricing and which platform fits your needs.";

export const metadata = pageSeo({ title: "Buyer’s Guides | JazzHQ", description: GALLERY_DESCRIPTION, path: ROUTES.buyersGuides });

export default function BuyersGuideGallery() {
  return (
    <main id="guide-content" tabIndex={-1} className="guides-gallery">
      <div className="guides-gallery__intro">
        <h1>Buyer’s Guides</h1>
        <p>{GALLERY_DESCRIPTION}</p>
      </div>
      <div className="guides-gallery__list">
        {buyerGuides.map((guide) => <GalleryCard key={guide.href} guide={guide} />)}
      </div>
    </main>
  );
}
