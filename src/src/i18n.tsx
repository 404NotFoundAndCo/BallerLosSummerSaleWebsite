import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {

            }
        },
        de: {
            translation: {
                webpage: {
                    title: "Ein Schülerunternehmen der BBS 1 Lüneburg mit <1>Meerwert</1>",
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