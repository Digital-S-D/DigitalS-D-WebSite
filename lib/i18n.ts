import english from "./translations/en.json";

export type Locale = "pt" | "en";
const messages: Readonly<Record<string, string>> = english;

// Translation happens while React renders, including static HTML generation.
// Styles, component structure, input values, IDs and project images are shared.
export function createTranslator(locale: Locale) {
  return function t<T>(value: T): T {
    if (locale !== "en" || typeof value !== "string") return value;
    const key = value.replace(/\s+/g, " ").trim();
    let translated = messages[key];
    if (!translated) {
      for (const [prefix, replacement] of [
        ["Conhecer o projeto demonstrativo ", "Explore the demonstration project "],
        ["Abrir imagem completa: ", "Open full image: "],
        ["Pedir orçamento de ", "Request a quote for "],
      ]) {
        if (key.startsWith(prefix)) {
          const rest = key.slice(prefix.length);
          translated = replacement + (messages[rest] ?? messages[rest.charAt(0).toUpperCase() + rest.slice(1)] ?? rest);
          break;
        }
      }
    }
    if (!translated) return value;
    const leading = value.match(/^\s*/)?.[0] ?? "";
    const trailing = value.match(/\s*$/)?.[0] ?? "";
    return (leading + translated + trailing) as T;
  };
}

export function localePath(path: string, locale: Locale): string {
  const bare = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? `/en${bare.startsWith("/") ? bare : `/${bare}`}` : bare;
}

export function localizedHref(href: string, locale: Locale): string {
  if (href.startsWith("https://wa.me/") && locale === "en") {
    const url = new URL(href);
    url.searchParams.set("text", "Hello! I would like to discuss a website project.");
    return url.toString();
  }
  if (!href.startsWith("/") || href.startsWith("//") || /^\/(?:images|_next)\//.test(href)) return href;
  return localePath(href, locale);
}
