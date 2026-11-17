import type { ReactNode } from "react";
import styles from "./guide.module.css";

// `title` is optional: without it the call to action is a single paragraph.
export function GuideCta({ title, text, href, label, icon }: { title?: string; text: string; href: string; label: string; icon: ReactNode }) {
  return <section className={styles.cta} aria-labelledby={title ? "cta-title" : "cta-text"}>
    <div>{title && <h2 id="cta-title">{title}</h2>}<p id={title ? undefined : "cta-text"}>{text}</p></div>
    <a className={styles.button} href={href}>{label} {icon}</a>
  </section>;
}
