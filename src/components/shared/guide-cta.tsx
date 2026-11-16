import type { ReactNode } from "react";
import styles from "./guide.module.css";

export function GuideCta({ title, text, href, label, icon }: { title: string; text: string; href: string; label: string; icon: ReactNode }) {
  return <section className={styles.cta} aria-labelledby="cta-title">
    <div><h2 id="cta-title">{title}</h2><p>{text}</p></div>
    <a className={styles.button} href={href}>{label} {icon}</a>
  </section>;
}
