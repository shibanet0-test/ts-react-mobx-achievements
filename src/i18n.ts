import Fetch from "i18next-fetch-backend";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(Fetch).use(initReactI18next); // passes i18n down to react-i18next
i18n.init({
  backend: {
    loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
  },

  debug: true,
  fallbackLng: ["en"],
  preload: ["en"],
  ns: ["translation"],
  supportedLngs: ["en", "ru"],

  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
