export type NavDestination = string | null;
export const ROUTES = {
  home: "https://www.jazzhq.ai/",
  buyersGuides: "/buyers-guide",
  prmGuide: "/buyers-guide/best-prm-software",
  channelGuide: "/buyers-guide/channel-management-software",
} as const;
// These global destinations are not available in the standalone build.
export const NAV_ITEMS: { label: string; href: NavDestination }[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: null },
  { label: "Events", href: null },
  { label: "Marketplace", href: null },
  { label: "Stories", href: null },
];
export type JourneyKey = "buyer" | "vendor" | "partner";
export const JOURNEYS: {key: JourneyKey; title: string; description: string; href: NavDestination}[] = [
 {key:"buyer",title:"I’m an AI Buyer",description:"Find AI solutions · Coming soon",href:null},
 {key:"vendor",title:"I’m an AI Vendor",description:"List your product · Coming soon",href:null},
 {key:"partner",title:"I’m a Channel Partner",description:"Partner with AI companies · Coming soon",href:null},
];

// Footer links. Only destinations verified verbatim in a source repo are kept;
// items without one (Help & Support: Contact us, Privacy policy, Terms and
// conditions; Legal: Privacy Policy, Terms of Service) were removed.
export type FooterLink = { label: string; href: NavDestination };
export const FOOTER_COMPANY: FooterLink[] = [{ label: "About us", href: "https://www.jazzhq.ai/about-us" }];
export const FOOTER_BUYERS_GUIDES: FooterLink[] = [
  { label: "All Buyer’s Guides", href: ROUTES.buyersGuides },
  { label: "PRM Software Guide", href: ROUTES.prmGuide },
  { label: "Channel Management Guide", href: ROUTES.channelGuide },
];
export const FOOTER_LEGAL: FooterLink[] = [];
