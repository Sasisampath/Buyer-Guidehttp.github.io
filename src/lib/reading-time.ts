export const WORDS_PER_MINUTE = 230;

// Counts the words in every string found in the given values (recursing into
// arrays and objects). URLs and in-page/site paths are skipped: they are link
// targets, not reading text.
export function countWords(...values: unknown[]): number {
  let words = 0;
  const walk = (value: unknown): void => {
    if (typeof value === "string") {
      if (!/^(https?:\/\/|\/|#)/u.test(value)) words += value.split(/\s+/u).filter(Boolean).length;
    } else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object") Object.values(value).forEach(walk);
  };
  values.forEach(walk);
  return words;
}

// Reading time at 230 words per minute, rounded, minimum 1 minute.
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / WORDS_PER_MINUTE));
