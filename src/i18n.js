import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          hello: "Hello",
          world: "World",
        },
      },
      fr: {
        translation: {
          hello: "Bonjour",
          world: "Monde",
        },
      },
    },
  });
