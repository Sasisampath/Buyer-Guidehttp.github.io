import { ROUTES, type NavDestination } from "@/data/navigation";

// All footer link data lives here.
// `href: null` matches Euler's footer: the item is shown, muted, and not a link.
export type FooterLink = { label: string; href: NavDestination };
export type FooterColumn = { title: string; links: FooterLink[] };

// The Alternatives pages live on the Euler site, not in this app. No production
// domain is defined in the Euler repo (its SITE_URL is env-only with a localhost
// fallback), so this is the deployment-specific preview URL. Replace it with
// the production domain when one exists.
export const ALTERNATIVES_ORIGIN = "https://euler-alternatives-2026-lwjsuxufy-sksasikumarin-9210s-projects.vercel.app";
const alternatives = (path: string) => `${ALTERNATIVES_ORIGIN}${path}`;

export const footerColumns: FooterColumn[] = [
  { title: "Company", links: [{ label: "About us", href: null }] },
  {
    title: "Help & Support",
    links: [
      { label: "Contact us", href: null },
      { label: "Privacy policy", href: null },
      { label: "Terms and conditions", href: null },
    ],
  },
  {
    title: "Alternatives",
    links: [
      { label: "All Alternatives", href: alternatives("/alternatives") },
      { label: "PartnerStack Alternatives", href: alternatives("/alternatives/partnerstack-alternatives") },
      { label: "Salesforce PRM Alternatives", href: alternatives("/alternatives/salesforce-prm-alternatives") },
      { label: "Euler Alternatives", href: alternatives("/alternatives/euler-alternatives") },
      { label: "Channelscaler Alternatives", href: alternatives("/alternatives/channelscaler-alternatives") },
      { label: "Mindmatrix Alternatives", href: alternatives("/alternatives/mindmatrix-alternatives") },
      { label: "Kiflo Alternatives", href: alternatives("/alternatives/kiflo-alternatives") },
    ],
  },
  {
    title: "Buyer’s Guides",
    links: [
      { label: "All Buyer’s Guides", href: ROUTES.buyersGuides },
      { label: "AI Coaching Platforms Guide", href: ROUTES.aiCoachingGuide },
      { label: "PRM Software Guide", href: ROUTES.prmGuide },
      { label: "Channel Management Guide", href: ROUTES.channelGuide },
    ],
  },
];

export const footerLegal: FooterLink[] = [
  { label: "Privacy Policy", href: null },
  { label: "Terms of Service", href: null },
];
