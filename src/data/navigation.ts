export type NavDestination = string | null;
export const ROUTES = {
  home: "https://www.jazzhq.ai/",
  buyersGuides: "/buyers-guide",
  prmGuide: "/buyers-guide/best-prm-software",
  channelGuide: "/buyers-guide/channel-management-software",
  aiCoachingGuide: "/buyers-guide/ai-coaching-platforms",
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
// Footer links live in src/data/footer.ts.
