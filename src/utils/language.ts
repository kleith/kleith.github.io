type Language = "es" | "en";

export function getLanguage(): Language | string {
  const language = navigator.language || "es";
  const lang = language?.split("-")[0];

  return lang;
}
