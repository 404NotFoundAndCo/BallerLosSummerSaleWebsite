import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'de',  // Fallback-Sprache ist Deutsch
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    webpage: {
                        title: "A student enterprise of BBS 1 Lüneburg with Meerwert",
                        subtitle: "Playing to protect water"
                    },
                    aboutUs: {
                        title: 'About Us',
                    }
                }
            },
            de: {
                translation: {
                    webpage: {
                        title: "Ein Schülerunternehmen der BBS 1 Lüneburg mit Meerwert",
                        subtitle: "Spielend Wasser Schützen"
                    },
                    aboutUs: {
                        title: 'Über uns',
                    }
                }
            }
        }
    });

export default i18n;