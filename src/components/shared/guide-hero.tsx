import type { ReactNode } from "react";
import styles from "./guide.module.css";

// Guide hero panel. `subtitle` renders as a second line inside the h1 and
// `aside` as a side panel; both are optional.
export function GuideHero({ eyebrow, title, subtitle, aside, children }: {
  eyebrow: ReactNode; title: ReactNode; subtitle?: ReactNode; aside?: ReactNode; children: ReactNode;
}) {
  return <div className={aside ? `${styles.hero} ${styles.heroWithAside}` : styles.hero}>
    <div>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1>{title}{subtitle && <> <span className={styles.heroSubtitle}>{subtitle}</span></>}</h1>
      {children}
    </div>
    {aside}
  </div>;
}
