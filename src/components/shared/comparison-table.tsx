import styles from "./guide.module.css";

export type ComparisonRow = { id: string; cells: readonly string[] };

// Scrollable comparison table. The first cell of each row links to `#id`.
export function ComparisonTable({ label, headers, rows, compact = false, hint }: {
  label: string; headers: readonly string[]; rows: readonly ComparisonRow[]; compact?: boolean; hint?: string;
}) {
  return <>
    {hint && <p className={styles.tableHint}>{hint}</p>}
    <div className={styles.tableRegion} role="region" tabIndex={0} aria-labelledby={label}>
      <table className={`${styles.table} ${compact ? styles.compactTable : styles.comparisonTable}`} aria-labelledby={label}>
        <thead><tr>{headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>{rows.map(({ id, cells: [name, ...values] }) => <tr key={id}>
          <th scope="row"><a href={`#${id}`}>{name}</a></th>
          {values.map((value, i) => <td key={headers[i + 1]}>{value}</td>)}
        </tr>)}</tbody>
      </table>
    </div>
  </>;
}
