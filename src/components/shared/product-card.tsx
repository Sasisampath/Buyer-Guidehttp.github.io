import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./guide.module.css";

type Variant = "features" | "pros" | "consider" | "best" | "pricing";

// Bordered detail box: a heading plus either a bullet list (`items`) or free content (`children`).
export function Details({ label, items, variant, level = 4, children }: {
  label: string; items?: readonly ReactNode[]; variant?: Variant; level?: 3 | 4; children?: ReactNode;
}) {
  const Heading = level === 3 ? "h3" : "h4";
  return <div className={variant ? `${styles.detail} ${styles[variant]}` : styles.detail}><Heading>{label}</Heading>
    {items ? <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul> : children}
  </div>;
}

export function Pair({ children }: { children: ReactNode }) {
  return <div className={styles.pair}>{children}</div>;
}

export function Screenshot({ src, alt, width, height, caption }: {
  src: string; alt: string; width: number; height: number; caption?: ReactNode;
}) {
  return <figure className={styles.screenshot}>
    <Image src={src} alt={alt} width={width} height={height} unoptimized />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

// Platform review card. `badge` and `sources` are optional.
export function ProductCard({ id, index, title, subtitle, badge, sources, children }: {
  id: string; index: number; title: string; subtitle: ReactNode; badge?: string;
  sources?: { label: string; links: readonly (readonly [label: string, url: string])[] }; children: ReactNode;
}) {
  const label = `${id}-title`;
  return <section id={id} className={styles.product} aria-labelledby={label}>
    <header className={styles.productHeader}>
      <span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div><h3 id={label}>{title}</h3><p>{subtitle}</p></div>
      {badge && <span className={styles.own}>{badge}</span>}
    </header>
    {children}
    {sources && <ul className={styles.sources} aria-label={sources.label}>{sources.links.map(([text, url]) => <li key={url}><a href={url}>{text}</a></li>)}</ul>}
  </section>;
}
