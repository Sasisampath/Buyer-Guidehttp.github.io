import * as aiCoaching from "@/data/ai-coaching-guide";
import { guide as channelGuide, route as channelRoute } from "@/data/channel-guide";
import { criteria, faqs, maturity, recommendations, strategy } from "@/data/prm-evaluation";
import {
  contentsLabel, cta, description as prmDescription, hero, intro, method, productLabels, products as prmProducts,
  route as prmRoute, scrollHint, sectionCopy, sections, tableHeaders,
} from "@/data/prm-guide";
import { countWords } from "@/lib/reading-time";

export type BuyerGuide = {
  href: string;
  title: string;
  description: string;
  platforms: number;
  words: number;
  // Banner thumbnail (1672×941). The card title repeats its text, so it is decorative.
  banner: string;
};

// The first sentence of an existing description, verbatim.
const firstSentence = (text: string) => {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
};

// PRM: all of the guide's reading text lives in its data files.
const prmWords = countWords(
  hero, intro, method, contentsLabel, sections.map(([, label]) => label), sectionCopy, tableHeaders, scrollHint,
  productLabels, prmProducts.map(({ name, fit, position, intro, features, pros, consider, price, priceDetail, sources }) =>
    [name, fit, position, intro, features, pros, consider, price, priceDetail, sources.map(([label]) => label)]),
  maturity, criteria, strategy, recommendations, faqs, cta,
);

// AI coaching: all of the guide's reading text lives in its data file.
export const aiCoachingWords = countWords(
  aiCoaching.hero, aiCoaching.intro, aiCoaching.note, aiCoaching.method, aiCoaching.contentsLabel, aiCoaching.sections.map(([, label]) => label),
  aiCoaching.sectionCopy, aiCoaching.tableHeaders, aiCoaching.scrollHint, aiCoaching.productLabels,
  aiCoaching.products.map(({ name, glanceName, tableName, fit, knownFor, intro, features, pros, cons, pricing, table }) =>
    [name, glanceName, tableName, fit, knownFor, intro, features, pros, cons, pricing, table]),
  aiCoaching.rehearseExtras.afterImage, aiCoaching.rehearseExtras.ctaText, aiCoaching.rehearseExtras.ctaLabel,
  aiCoaching.lookFor, aiCoaching.recommendations, aiCoaching.faqs, aiCoaching.cta.text, aiCoaching.cta.label,
);

// Channel: some headings, the journey and the CTA are written in the page
// component, so the count is measured from the rendered page instead:
// 3343 words of visible <main> text (excluding navigation links), counted on
// 2026-11-16 with _work/scripts/word-count.mjs. Recount when the copy changes.
const CHANNEL_MAIN_WORDS = 3343;

// Gallery order: newest first (AI coaching), then PRM, then Channel.
export const buyerGuides: BuyerGuide[] = [
  {
    href: aiCoaching.route,
    title: aiCoaching.hero.heading,
    description: firstSentence(aiCoaching.description),
    platforms: aiCoaching.products.length,
    words: aiCoachingWords,
    banner: `${aiCoaching.route}/banner.webp`,
  },
  {
    href: prmRoute,
    title: "10 Best Partner Relationship Management Software in 2026",
    description: firstSentence(prmDescription),
    platforms: prmProducts.length,
    words: prmWords,
    banner: `${prmRoute}/banner.webp`,
  },
  {
    href: channelRoute,
    title: "Channel Management Software: The Best 8 Platforms Compared",
    description: firstSentence(channelGuide.description),
    platforms: channelGuide.products.length,
    words: CHANNEL_MAIN_WORDS,
    banner: `${channelRoute}/banner.webp`,
  },
];
