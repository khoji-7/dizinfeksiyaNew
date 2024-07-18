import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzLang from "./uz.json";
import enLang from "./en.json";
import ruLang from "./ru.json";




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
        ru:{translation:ruLang}  // Add your languages here.
    },

    
  });


  export default i18n;