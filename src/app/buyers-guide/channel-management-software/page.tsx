import { ArrowDown, ArrowRight, ArrowUpRight, ChartNoAxesColumn, Check, ClipboardCheck, Clock3, Handshake, UsersRound, Zap } from "lucide-react";
import { BackLink } from "@/components/shared/back-link";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { GuideCta } from "@/components/shared/guide-cta";
import { GuideHero } from "@/components/shared/guide-hero";
import { FaqList, NumberedList, StageList } from "@/components/shared/guide-lists";
import { GuideSection } from "@/components/shared/guide-section";
import { Details, Pair, ProductCard, Screenshot } from "@/components/shared/product-card";
import { ReadingProgress } from "@/components/shared/reading-progress";
import styles from "@/components/shared/guide.module.css";
import { guide, route } from "@/data/channel-guide";
import { pageSeo } from "@/lib/seo";

const seo = pageSeo({ title: guide.seoTitle, description: guide.description, path: route });
export const metadata = { ...seo, openGraph: { ...seo.openGraph, type: "article" as const } };

const journey = [
  { label: "Recruit", detail: "Find the right partners", icon: UsersRound },
  { label: "Onboard", detail: "Get partners ready to sell", icon: ClipboardCheck },
  { label: "Manage Deals", detail: "Track shared opportunities", icon: Handshake },
  { label: "Activate", detail: "Put training and campaigns to work", icon: Zap },
  { label: "Measure", detail: "See what drives revenue", icon: ChartNoAxesColumn },
];

type Product = (typeof guide.products)[number];

const readingTime = Math.ceil([
  guide.title, ...guide.intro, ...guide.preface, ...guide.criteria, ...guide.glance.flat(),
  ...guide.products.flatMap(({ title, intro, features, pros, consider, best, pricing }) =>
    [title, intro, ...features, ...pros, ...consider, best, ...pricing]),
  ...guide.comparison.flat(), ...guide.chooseIntro, ...guide.guidance.flat(), ...guide.verdict, ...guide.faq.flat(),
].join(" ").split(/\s+/u).length / 225);

// Table rows link to the product reviews, in data order.
const tableRows = (rows: string[][]) => rows.slice(1).map((cells, index) => ({ id: guide.products[index].id, cells }));

function ChannelProduct({ product, index }: { product: Product; index: number }) {
  const [name, ...position] = product.title.split(": ");
  return <ProductCard id={product.id} index={index} title={name} subtitle={position.join(": ")} badge={index === 0 ? "Our platform" : undefined}>
    <p className={styles.productIntro}><a href={product.url}>{product.linkText}</a>{product.intro.slice(product.linkText.length)}</p>
    <Screenshot src={`${route}/${product.id}.webp`} alt={product.image.alt} width={product.image.width} height={product.image.height} />
    <Details label="Key Features" items={product.features} variant="features" />
    <Pair>
      <Details label="Pros" items={product.pros} variant="pros" />
      <Details label="Things to Consider" items={product.consider} variant="consider" />
    </Pair>
    <Pair>
      <Details label="Best For" variant="best"><p>{product.best}</p></Details>
      <Details label="Pricing" items={product.pricing} variant="pricing" />
    </Pair>
  </ProductCard>;
}

export default function ChannelManagementSoftwarePage() {
  return <>
    <ReadingProgress />
    <main id="guide-content" tabIndex={-1} className={styles.page}>
      <BackLink />
      <article>
        <GuideHero eyebrow={<>Buyer’s Guide <span>·</span> Channel Management</>} title={guide.title}>
          <div className={styles.heroMeta}><span><Clock3 size={17} aria-hidden="true" /> {readingTime} min read</span><span>{guide.products.length} platforms compared</span></div>
          <div className={styles.heroIntro}>{guide.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <a className={styles.button} href="#at-a-glance">Compare platforms <ArrowDown size={17} aria-hidden="true" /></a>
        </GuideHero>

        <section className={styles.journey} aria-labelledby="journey-title">
          <h2 id="journey-title">The channel journey</h2>
          <StageList stages={journey.map(({ label, detail, icon: Icon }, index) => ({
            key: label, title: label, detail, top: <><Icon size={19} aria-hidden="true" /><span>0{index + 1}</span></>,
          }))} />
        </section>

        <GuideSection id="at-a-glance" titleId="glance-title" label="01 / Key takeaways" title={guide.glanceTitle}>
          <div className={styles.note}><strong>{guide.preface[0]}</strong><p>{guide.preface[1]}</p></div>
          <p className={styles.prose}>{guide.preface[2]}</p>
          <ul className={styles.criteria}>{guide.criteria.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          <ComparisonTable label="glance-title" headers={guide.glance[0]} rows={tableRows(guide.glance)} compact />
        </GuideSection>

        <GuideSection id="platforms" titleId="platforms-title" label="02 / Platform reviews" title="The 8 Best Channel Management Platforms" variant="platforms">
          <div className={styles.products}>{guide.products.map((product, index) => <ChannelProduct key={product.id} product={product} index={index} />)}</div>
        </GuideSection>

        <GuideSection id="compare" titleId="compare-title" label="03 / Side by side" title={guide.comparisonTitle}>
          <ComparisonTable label="compare-title" headers={guide.comparison[0]} rows={tableRows(guide.comparison)} hint="Swipe or scroll to see all columns." />
        </GuideSection>

        <GuideSection id="how-to-choose" titleId="choose-title" label="04 / Buying criteria" title="How to Choose Channel Management Software">
          {guide.chooseIntro.map(paragraph => <p key={paragraph} className={styles.prose}>{paragraph}</p>)}
          <NumberedList items={guide.guidance.map(([title, detail]) => ({ title, body: <p>{detail}</p> }))} />
        </GuideSection>

        <GuideSection id="recommendations" titleId="recommendations-title" label="05 / Recommendations" title="Choose the Best Channel Management Software for You">
          <div className={styles.verdict}>{guide.verdict.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </GuideSection>

        <GuideSection id="faq" titleId="faq-title" label="06 / Common questions" title="FAQs">
          <FaqList items={guide.faq as [string, string][]} />
        </GuideSection>

        <GuideCta title="Build your partner channel with JazzHQ" text="Explore partner recruitment, activation, and channel operations in one place." href="https://www.jazzhq.ai/" label="Explore JazzHQ" icon={<ArrowUpRight size={17} aria-hidden="true" />} />
        <a className={styles.back} href="#guide-content">Back to top <ArrowRight size={14} aria-hidden="true" /></a>
      </article>
    </main>
  </>;
}
