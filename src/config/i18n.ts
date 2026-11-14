import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "@/translations/en/global.json";
import global_es from "@/translations/es/global.json";
import { getLanguage } from "@/utils/language";

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
  debug: true,
  lng: getLanguage() || "es",
  defaultNS: "global",
});

export default i18n;
