import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/asset";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  output: "export",
  basePath: BASE_PATH,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
