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
                        description1:'Das ist unsere Schülerfirma „Baller los", was so viel heißt, wie mit voller Kraft loslegen',
                        description2: 'bedeutet – und das machen wir.',
                        description3: 'Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den Umweltschutz,',
                        description4: 'besonders bei den Gewässern, aufmerksam machen. Daher ist es selbstverständlich, dass wir',
                        description5: 'unser Spiel so umweltfreundlich und hochwertig wie möglich produzieren.',
                        description6: 'Wir nutzen einen 3D-Drucker mit recycle fähigem und sogar Recycling-Filament, um unsere',
                        description7: 'Figuren selbst herstellen zu können. Auch die anderen Materialien wie Spielbrett und',
                        description8: 'Verpackung sind recycle fähig oder bestehen aus recyclingmaterial.',
                        description9: 'Zusätzlich untersuchen wir die Verschmutzung der Ilmenau (dieser Fluss fließt durch',
                        description10: 'Lüneburg), indem wir Plastikmüll einsammeln und zählen.'
                    },
                    team: {
                        title: 'Das Team',
                        description1: 'Wir sind die HA24B!',
                        description2: 'Wir sind 24 Schülerinnen und Schüler im Alter von 15 bis 18 Jahren. Diese Schülerfirma haben',
                        description3: 'wir im Rahmen der einjährigen Berufsfachschule Wirtschaft an der BBS I Lüneburg gegründet.',
                        description4: 'Für diese Website kooperieren wir mit dem Lüneburger IT-Unternehmen „Webnetz“ und den',
                        description5: 'Auszubildenden zum Fachinformatiker im 3. Lehrjahr aus der Klasse IT22B von unserer Schule.',
                    },
                    game: {
                        title: 'Die Spielregeln',
                        playerNumber: 'Spieleranzahl:',
                        playerNumberContent: '2 bis 6 Spieler',
                        age: 'Alter:',
                        ageContent: '12 bis 99 Jahre',
                        time: 'Spieldauer:',
                        timeContent: '10 bis 15 Minuten',
                        material: 'Spielmaterialien:',
                        materialContent1: 'Spielbrett mit Feldern (Fragefelder mit Fragezeichen, Ereignisfelder mit Ausrufezeichen)',
                        materialContent2: 'Spielfiguren für jeden Spieler',
                        materialContent3: 'Fragen- und Ereigniskarten',
                        materialContent4: 'Würfel',
                        preparation: 'Spielvorbereitung:',
                        preparationContent1: 'Die Spieler wählen eine Spielfigur und stellen sie auf das Startfeld der Plattform.',
                        preparationContent2: 'Die Karten für Fragen und Ereignisse werden gemischt und bereitgelegt.'
                    },
                    other: {
                        title: 'Weiteres',
                        description1: 'Nachhaltig gedruckt, umweltbewusst gespielt!',
                        description2: 'Unsere Spielfiguren und Würfel werden mit dem Bambu Lab P1S 3D-Drucker aus recycelbarem Material gefertigt – präzise, hochwertig und umweltschonend. Auch das Spielbrett und die Verpackung bestehen aus recycelten Materialien.',
                        description3: 'So verbinden wir unsere Produktion mit Nachhaltigkeit und bieten euch ein Spiel, das nicht nur Spaß macht, sondern auch die Umwelt schont!'
                    },
                    contact: {
                        firstName: 'Vorname *',
                        lastName: 'Nachname *',
                        email: 'E-Mail *',
                        subject: 'Betreff',
                        message: 'Nachricht *',
                        hintTitle: 'Hinweis:',
                        hintContent: 'Felder mit * müssen ausgefüllt werden.',
                    },
                    footer: {
                        privacyPolicy: 'Datenschutz',
                        imprint: 'Impressum',
                        location: 'Ort',
                        telephone: 'Nummer',
                        instagram: 'Instagram',
                        year: '2024'
                    }
                }
            }
        }
    });

export default i18n;