const defaultOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};

export function formatDate(
  date: Date,
  locale = "de-DE",
  options = defaultOptions
): string {
  return date.toLocaleDateString(locale, { ...defaultOptions, ...options });
}
