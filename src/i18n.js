import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    debug: true,
    lng: "en",
    returnObjects: true,
    resources: {
      fr: {
        translation: {
          home: {
            articleBtn: "voir articles",
            catTitle: "explorer par catégorie",
            catDescription: "Jetez un coup d'œil à nos catégories",
            prodTitle: "Nos Produits",
            prodBtnPlus: "afficher plus",
            prodBtnLess: "afficher moins",
            explorePar1:
              "<1>Accessoires indispensables</1> pour décorer votre stand",
            explorePar2: "disponible en location",
          },
        },
      },
      en: {
        translation: {
          home: {
            articleBtn: "see articles",
            catTitle: "browse the categories",
            catDescription: "Take a look at our categories",
            prodTitle: "Our products",
            prodBtnPlus: "show more",
            prodBtnLess: "show less",
            explorePar1: "<1>Essential accessories</1> to decorate your stand",
            explorePar2: "available for rent",
          },
        },
      },
    },
  });
