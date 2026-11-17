import type { ReactNode } from "react";
import styles from "./guide.module.css";

// Stage cards (channel journey, partner maturity).
export function StageList({ stages, columns }: {
  stages: readonly { key: string; top: ReactNode; title: string; detail: string; note?: string }[]; columns?: 3;
}) {
  return <ol className={styles.stages} data-columns={columns}>{stages.map(({ key, top, title, detail, note }) => <li key={key}>
    <div className={styles.stageTop}>{top}</div>
    <h3>{title}</h3><p>{detail}</p>{note && <strong>{note}</strong>}
  </li>)}</ol>;
}

// Numbered criteria list.
export function NumberedList({ items }: { items: readonly { title: string; body: ReactNode }[] }) {
  return <ol className={styles.guidance}>{items.map(({ title, body }, index) => <li key={title}>
    <span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3>{body}</div>
  </li>)}</ol>;
}

// Label → description rows.
export function DefinitionRows({ items }: { items: readonly (readonly [label: string, detail: string])[] }) {
  return <dl className={styles.definitions}>{items.map(([label, detail]) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}</dl>;
}

// FAQ accordion. Optional numbering, first item open, a text marker, and
// answers given as one string or as several paragraphs.
export function FaqList({ items, numbered = false, openFirst = false, marker }: {
  items: readonly (readonly [question: string, answer: string | readonly string[]])[]; numbered?: boolean; openFirst?: boolean; marker?: string;
}) {
  return <div className={styles.faqList}>{items.map(([question, answer], index) =>
    <details key={question} open={openFirst && index === 0}>
      <summary>{numbered ? `${index + 1}. ${question}` : question}<span aria-hidden="true">{marker}</span></summary>
      {typeof answer === "string" ? <p>{answer}</p> : answer.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </details>
  )}</div>;
}
