// utils.ts

/**
 * Clamp a number between a min and max value
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Formats a number with leading zero (e.g., 1 -> "01")
 */
export function formatWithLeadingZero(index: number): string {
  return index < 10 ? `0${index}` : `${index}`;
}

/**
 * Delay function (async/await)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a unique ID string
 */
export function generateUID(prefix = "uid"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
