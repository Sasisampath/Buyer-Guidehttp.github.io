import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/data/navigation";
import styles from "./guide.module.css";

// The one link from every guide back to the Buyer’s Guides gallery.
export function BackLink() {
  return <Link href={ROUTES.buyersGuides} className={styles.backLink}><ArrowLeft size={14} aria-hidden="true" /> Back to Buyer’s Guides</Link>;
}
