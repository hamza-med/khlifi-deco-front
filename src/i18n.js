import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

i18n.use(LanguageDetector).use(backend).use(initReactI18next).init({
  fallbackLng: "fr",
  debug: true,
  returnObjects: true,
});
