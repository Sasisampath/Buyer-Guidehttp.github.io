// GitHub Pages mounts the export under the repository name.
export const BASE_PATH = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true"
  ? "/Buyer-Guidehttp.github.io"
  : "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
