export type NavDestination = string;
export type JourneyKey = "buyer" | "vendor" | "partner";

export const ROUTES = {
  home: "/buyers-guide",
  gallery: "/buyers-guide",
  prm: "/buyers-guide/best-prm-software",
  channel: "/buyers-guide/channel-management-software",
} as const;

export const FOOTER_GUIDES = [
  { label: "All Buyer’s Guides", href: ROUTES.gallery },
  { label: "PRM Software Guide", href: ROUTES.prm },
  { label: "Channel Management Guide", href: ROUTES.channel },
] as const;
