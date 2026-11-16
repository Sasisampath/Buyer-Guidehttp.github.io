import type { ReactNode } from "react";
import styles from "./guide.module.css";

export function SectionHeading({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return <div className={styles.heading}><p className={styles.eyebrow}>{label}</p><h2 id={id}>{children}</h2></div>;
}

// A titled guide section: a white panel by default, or an open container for the product list.
export function GuideSection({ id, titleId, label, title, variant = "panel", children }: {
  id: string; titleId: string; label: string; title: ReactNode; variant?: "panel" | "platforms"; children: ReactNode;
}) {
  return <section id={id} className={styles[variant]} aria-labelledby={titleId}>
    <SectionHeading id={titleId} label={label}>{title}</SectionHeading>
    {children}
  </section>;
}
