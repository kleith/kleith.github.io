import "i18next";
// import all namespaces (for the default language, only)
import es from "../translations/es/global.json";
import en from "../translations/en/global.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "es";
    // custom resources type
    resources: {
      es: typeof es;
      en: typeof en;
    };
  }
}
