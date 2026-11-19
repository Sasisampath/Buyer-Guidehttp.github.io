import type { Metadata } from "next";
import { asset, BASE_PATH } from "./asset";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const defaultSiteUrl = vercelHost ? `https://${vercelHost}` : `http://localhost:3000${BASE_PATH}`;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");
export const SITE_NAME = "JazzHQ";
export const DEFAULT_TITLE = "JazzHQ";
export const DEFAULT_DESCRIPTION =
  "JazzHQ empowers you with AI-powered products, services, and expert guidance for partner-driven businesses.";
export const DEFAULT_OG_IMAGE = "/assets/WebsitePreview.png";
export const DEFAULT_SITE_ICON = asset("/assets/logo/monogram.png");

// This standalone site is never indexed: every page uses these robots settings.
export const NOINDEX_ROBOTS: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
};

type PageSeoOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
};

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path.replace(/\/$/, "")}/`;
}

export function pageAlternates(
  path: string,
): NonNullable<Metadata["alternates"]> {
  const absolute = canonicalUrl(path);

  return {
    canonical: absolute,
    languages: {
      "x-default": absolute,
      "en-US": absolute,
    },
  };
}

export function pageSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageSeoOptions): Metadata {
  const url = canonicalUrl(path);
  const ogImage = image.startsWith("http") ? image : `${new URL(SITE_URL).origin}${asset(image)}`;

  return {
    title,
    ...(description !== undefined ? { description } : {}),
    alternates: pageAlternates(path),
    robots: NOINDEX_ROBOTS,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      ...(description !== undefined ? { description } : {}),
      images: [
        {
          url: ogImage,
          alt: title,
          ...(image === DEFAULT_OG_IMAGE
            ? { width: 1470, height: 771, type: "image/png" }
            : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      ...(description !== undefined ? { description } : {}),
      images: [ogImage],
    },
  };
}
