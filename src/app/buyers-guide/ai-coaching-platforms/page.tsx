import { ArrowDown, ArrowRight, Check, Clock3 } from "lucide-react";
import { BackLink } from "@/components/shared/back-link";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { GuideCta } from "@/components/shared/guide-cta";
import { GuideHero } from "@/components/shared/guide-hero";
import { DefinitionRows, FaqList, NumberedList } from "@/components/shared/guide-lists";
import { GuideSection } from "@/components/shared/guide-section";
import { Details, Pair, ProductCard, Screenshot } from "@/components/shared/product-card";
import { ReadingProgress } from "@/components/shared/reading-progress";
import styles from "@/components/shared/guide.module.css";
import { aiCoachingWords } from "@/data/buyer-guides";
import {
  contentsLabel, criteria, cta, description, disclosure, faqs, hero, intro, lookFor, productLabels, products,
  recommendations, rehearseExtras, route, scrollHint, sectionCopy, sections, seoTitle, tableHeaders, title,
  type Product,
} from "@/data/ai-coaching-guide";
import { readingMinutes } from "@/lib/reading-time";
import { pageSeo } from "@/lib/seo";

const seo = pageSeo({ title: seoTitle, description, path: route });
export const metadata = { ...seo, openGraph: { ...pageSeo({ title, description, path: route }).openGraph, type: "article" as const } };

// Same count the gallery card shows, so the two never disagree.
const readingTime = readingMinutes(aiCoachingWords);

const OWN_PRODUCT = "rehearse";

function CoachingProduct({ product, index }: { product: Product; index: number }) {
  const own = product.id === OWN_PRODUCT;
  return <ProductCard id={product.id} index={index} title={product.name}
    subtitle={<><strong>{productLabels.bestFor}</strong> {product.fit}</>}
    badge={own ? productLabels.badge : undefined}
    sources={{ label: `${product.name} website`, links: [[`${productLabels.website}: ${new URL(product.url).hostname.replace(/^www\./u, "")}`, product.url]] }}>
    <div className={styles.productIntro}>{product.intro.map(paragraph => <p key={paragraph} className={styles.prose}>{paragraph}</p>)}</div>
    <Screenshot src={`${route}/${product.id}.webp`} alt={product.image.alt} width={product.image.width} height={product.image.height}
      caption={`${product.name} ${productLabels.captionSuffix}`} />
    <Details label={productLabels.features} variant="features" items={product.features.map(([label, detail]) => <><strong>{label}:</strong> {detail}</>)} />
    {own && <div className={styles.inlineShot}>
      <Screenshot src={`${route}/${rehearseExtras.feedbackImage.src}`} alt={rehearseExtras.feedbackImage.alt}
        width={rehearseExtras.feedbackImage.width} height={rehearseExtras.feedbackImage.height} caption="Rehearse · Roleplay results and evidence" />
    </div>}
    <Pair>
      <Details label={productLabels.pros} variant="pros" items={product.pros} />
      <Details label={productLabels.cons} variant="consider" items={product.cons} />
    </Pair>
    <div className={styles.pricingRow}><Details label={productLabels.pricing} variant="pricing" items={product.pricing} /></div>
    {own && <div className={`${styles.note} ${styles.productCta}`}>
      <p>{rehearseExtras.ctaText}</p>
      <a className={styles.button} href={rehearseExtras.ctaHref}>{rehearseExtras.ctaLabel} <ArrowRight size={17} aria-hidden="true" /></a>
    </div>}
  </ProductCard>;
}

export default function AiCoachingPlatformsPage() {
  const { glance, method, platforms, compare, lookFor: look, recommendations: rec, faq } = sectionCopy;
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
            <p>{disclosure}</p>
          </aside>}
        >
          <div className={styles.heroIntro}>{intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className={styles.heroActions}>
            <a className={styles.button} href="#at-a-glance">{hero.button} <ArrowDown size={17} aria-hidden="true" /></a>
            <span className={styles.readTime}><Clock3 size={17} aria-hidden="true" /> {readingTime} {hero.readTimeSuffix}</span>
          </div>
        </GuideHero>

        <nav className={styles.contents} aria-label={contentsLabel}>
          <span>{contentsLabel}</span><ul>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>

        <GuideSection id="at-a-glance" titleId="glance-title" label={glance.label} title={glance.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{glance.lede}</p>
          <ComparisonTable label="glance-title" compact headers={tableHeaders.glance}
            rows={products.map(({ id, name, knownFor }) => ({ id, cells: [name, knownFor] }))} />
        </GuideSection>

        <GuideSection id="what-we-looked-at" titleId="method-title" label={method.label} title={method.title}>
          <p className={styles.prose}>{method.lede}</p>
          <ul className={styles.criteria}>{criteria.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
        </GuideSection>

        <GuideSection id="platforms" titleId="platforms-title" label={platforms.label} title={platforms.title} variant="platforms">
          <p className={`${styles.prose} ${styles.lede}`}>{platforms.lede}</p>
          <div className={styles.products}>{products.map((product, index) => <CoachingProduct key={product.id} product={product} index={index} />)}</div>
        </GuideSection>

        <GuideSection id="compare" titleId="compare-title" label={compare.label} title={compare.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{compare.lede}</p>
          <ComparisonTable label="compare-title" headers={tableHeaders.compare} hint={scrollHint}
            rows={products.map(({ id, name, table }) => ({ id, cells: [name, table.bestFor, table.standout, table.price] }))} />
        </GuideSection>

        <GuideSection id="what-to-look-for" titleId="look-title" label={look.label} title={look.title}>
          {lookFor.intro.map(paragraph => <p key={paragraph} className={styles.prose}>{paragraph}</p>)}
          <NumberedList items={lookFor.items.map(([heading, paragraphs]) => ({
            title: heading, body: <>{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</>,
          }))} />
          <div className={styles.verdict}>{lookFor.closing.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </GuideSection>

        <GuideSection id="recommendations" titleId="rec-title" label={rec.label} title={rec.title}>
          <p className={`${styles.prose} ${styles.lede}`}>{recommendations.lede}</p>
          <DefinitionRows items={recommendations.items} />
          <p className={`${styles.prose} ${styles.closingLine}`}>{recommendations.closing}</p>
        </GuideSection>

        <GuideSection id="faq" titleId="faq-title" label={faq.label} title={faq.title}>
          <FaqList items={faqs} numbered openFirst marker="+" />
        </GuideSection>

        <GuideCta title={cta.title} text={cta.text} href={cta.href} label={cta.label} icon={<ArrowRight size={17} aria-hidden="true" />} />
      </article>
    </main>
  </>;
}
