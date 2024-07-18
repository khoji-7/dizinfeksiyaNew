import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzLang from "../../public/locales/uz.json";
import enLang from "../../public/locales/en.json";
import ruLang from "../../public/locales/ru.json";




i18n

.use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)
  
  .init({
    fallbackLng: 'uz',
    lng:"uz",
    debug: true,
    resources:{
        uz:{translation:uzLang},
        en:{translation:enLang},
        ru:{translation:ruLang},  // Add your languages here.
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;