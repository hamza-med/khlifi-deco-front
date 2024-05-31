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
          shop: {
            breadCrumbTitle1: "Panier",
            breadCrumbTitle2: "Checkout",
            breadCrumbTitle3: "Magasin",
            home: "Accueil",
            eltNumber: "Montrer {{index}} de {{total}} éléments",
            show: "Montrer",
            sort: "Trier par",
            priceDesc: "Prix décroissant",
            priceAsc: "Prix croissant",
            filterBtn: "Filtre",
            category: "Categories de",
            priceFilterTitle: "Filtrer par prix",
            price: "Prix",
            paginateNext: "Suivant",
            paginatePrev: "Précédent",
            descriptionSec: {
              title1: "Haute qualité",
              desc1: "Matériaux de qualité",
              title2: "Protection de la garantie",
              desc2: "Plus de 2 ans",
              title3: "Show room",
              desc3: "Ouvert de 9h00 à 17h00",
              title4: "24 / 7 Support",
              desc4: "Support dédié",
            },
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
          shop: {
            breadCrumbTitle1: "Cart",
            breadCrumbTitle2: "Checkout",
            breadCrumbTitle3: "Store",
            home: "Home",
            eltNumber: "Showing {{index}} from {{total}} results",
            show: "Show",
            sort: "Sort by",
            priceDesc: "Descending price",
            priceAsc: "Ascending price",
            filterBtn: "Filter",
            category: "Categories of",
            priceFilterTitle: "Filter by price",
            price: "Price",
            paginateNext: "Next",
            paginatePrev: "Previous",
            descriptionSec: {
              title1: "High quality",
              desc1: "Quality materials",
              title2: "Warranty protection",
              desc2: "Over 2 years",
              title3: "Show room",
              desc3: "Open from 9:00 am to 5:00 pm",
              title4: "24 / 7 Support",
              desc4: "Dedicated Support",
            },
          },
         
        },
      },
    },
  });
