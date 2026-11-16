import { ArrowDown, ArrowRight, Clock3 } from "lucide-react";
import { BackLink } from "@/components/shared/back-link";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { GuideCta } from "@/components/shared/guide-cta";
import { GuideHero } from "@/components/shared/guide-hero";
import { DefinitionRows, FaqList, NumberedList, StageList } from "@/components/shared/guide-lists";
import { GuideSection } from "@/components/shared/guide-section";
import { Details, Pair, ProductCard, Screenshot } from "@/components/shared/product-card";
import { ReadingProgress } from "@/components/shared/reading-progress";
import styles from "@/components/shared/guide.module.css";
import {
  closing, contentsLabel, cta, description, faqMarker, featureSeparator, hero, intro, method, productLabels, products, route,
  scrollHint, sectionCopy, sections, seoTitle, tableHeaders, title, visualCaptionSuffix, visuals, visualWidth,
} from "@/data/prm-guide";
import { criteria, faqs, maturity, recommendations, strategy } from "@/data/prm-evaluation";
import { pageSeo } from "@/lib/seo";

export const metadata = {
  ...pageSeo({ title: seoTitle, description, path: route }),
  openGraph: { ...pageSeo({ title, description, path: route }).openGraph, type: "article" as const },
};

// Same formula and inputs as the original PRM page.
const readingTime = Math.ceil([
  title, intro, method, closing, sections, maturity, criteria, faqs, recommendations, strategy,
  products.map(({ name, fit, position, intro, features, pros, consider, price, priceDetail }) =>
    [name, fit, position, intro, features, pros, consider, price, priceDetail]),
].flat(Infinity).join(" ").trim().split(/\s+/u).length / 230);

type Product = (typeof products)[number];

const comparisonRows = (overview: boolean) => products.map(product => ({
  id: product.id,
  cells: [product.name, product.fit, overview ? product.position : product.features.map(([label]) => label).join(featureSeparator), product.price],
}));

function PrmProduct({ product, index }: { product: Product; index: number }) {
  const [alt, height] = visuals[product.id];
  return <ProductCard id={product.id} index={index} title={product.name}
    subtitle={<><strong>{productLabels.bestFor}</strong> {product.fit}</>}
    sources={{ label: `${product.name} ${productLabels.sourcesSuffix}`, links: product.sources }}>
    <p className={styles.productIntro}>{product.intro}</p>
    <Details label={productLabels.features} variant="features" items={product.features.map(([label, detail]) => <><strong>{label}.</strong> {detail}</>)} />
    <Screenshot src={`${route}/${product.id}.webp`} alt={alt} width={visualWidth} height={height} caption={`${product.name} ${visualCaptionSuffix}`} />
    <Details label={productLabels.pricing} variant="pricing"><p><strong>{product.price}.</strong> {product.priceDetail}</p></Details>
    <Pair>
      <Details label={productLabels.pros} variant="pros"><p>{product.pros}</p></Details>
      <Details label={productLabels.consider} variant="consider"><p>{product.consider}</p></Details>
    </Pair>
  </ProductCard>;
}

export default function BestPrmSoftwarePage() {
  const { maturity: m, glance, platforms, compare, checklist, strategy: s, recommendations: r, faq } = sectionCopy;
  return <>
    <ReadingProgress />
    <main id="guide-content" tabIndex={-1} className={styles.page}>
      <BackLink />
      <article>
        <GuideHero
          eyebrow={<>{hero.eyebrow[0]} <span aria-hidden="true">{hero.eyebrow[1]}</span> {hero.eyebrow[2]}</>}
          title={hero.heading}
          subtitle={hero.subheading}
          aside={<aside className={styles.heroAside} aria-label={hero.asideLabel}>
            <p className={styles.eyebrow}>{hero.asideEyebrow}</p>
            <dl>{hero.stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
            <p>{method}</p>
          </aside>}
        >
          <div className={styles.heroIntro}><p>{intro}</p></div>
          <div className={styles.heroActions}>
            <a className={styles.button} href="#at-a-glance">{hero.button} <ArrowDown size={17} aria-hidden="true" /></a>
            <span className={styles.readTime}><Clock3 size={17} aria-hidden="true" /> {readingTime} {hero.readTimeSuffix}</span>
          </div>
        </GuideHero>

        <nav className={styles.contents} aria-label={contentsLabel}>
          <span>{contentsLabel}</span><ul>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>

        <GuideSection id="maturity" titleId="maturity-title" label={m.label} title={m.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{m.lede}</p>
          <StageList columns={3} stages={maturity.map(([label, need, result], index) => ({
            key: label, title: label, detail: need, note: result,
            top: <><span>{m.stagePrefix}{index + 1}</span>{index < 2 && <ArrowRight size={19} aria-hidden="true" />}</>,
          }))} />
        </GuideSection>

        <GuideSection id="at-a-glance" titleId="glance-title" label={glance.label} title={glance.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{glance.lede}</p>
          <ComparisonTable label="glance-title" headers={tableHeaders.overview} rows={comparisonRows(true)} hint={scrollHint} />
        </GuideSection>

        <GuideSection id="platforms" titleId="platforms-title" label={platforms.label} title={platforms.title} variant="platforms">
          <p className={`${styles.prose} ${styles.lede}`}>{platforms.lede}</p>
          <div className={styles.products}>{products.map((product, index) => <PrmProduct key={product.id} product={product} index={index} />)}</div>
        </GuideSection>

        <GuideSection id="compare" titleId="compare-title" label={compare.label} title={compare.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{compare.lede}</p>
          <ComparisonTable label="compare-title" headers={tableHeaders.detailed} rows={comparisonRows(false)} hint={scrollHint} />
        </GuideSection>

        <GuideSection id="checklist" titleId="checklist-title" label={checklist.label} title={checklist.title}>
          <p className={styles.prose}>{checklist.lede}</p>
          <NumberedList items={criteria.map(([label, explanation, why, question]) => ({
            title: label,
            body: <><p>{explanation}</p><p><strong>{checklist.why}</strong> {why}</p><p><strong>{checklist.ask}</strong> {question}</p></>,
          }))} />
        </GuideSection>

        <GuideSection id="strategy" titleId="strategy-title" label={s.label} title={s.title}>
          <p className={styles.prose}>{s.lede}</p>
          <Pair>{strategy.map(([label, detail, action]) =>
            <Details key={label} label={label} level={3}><p>{detail}</p><p>{action}</p></Details>
          )}</Pair>
        </GuideSection>

        <GuideSection id="recommendations" titleId="rec-title" label={r.label} title={r.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{r.lede}</p>
          <DefinitionRows items={recommendations as [string, string][]} />
        </GuideSection>

        <GuideSection id="faq" titleId="faq-title" label={faq.label} title={faq.title}>
          <FaqList items={faqs as [string, string][]} numbered openFirst marker={faqMarker} />
        </GuideSection>

        <GuideCta title={cta.title} text={cta.text} href={cta.href} label={cta.label} icon={<ArrowRight size={17} aria-hidden="true" />} />
      </article>
    </main>
  </>;
}
