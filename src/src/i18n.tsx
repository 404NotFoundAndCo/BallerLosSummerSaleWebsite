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
                        title: "About Us",
                        description1:"This is our student company \„Baller los\", which means something like starting with full force ",
                        description2: "– and that's what we do.",
                        description3: 'We are making our own game and want to use this game to raise awareness of environment protection, ',
                        description4: 'especially in the waters. Therefore it goes without saying that we ',
                        description5: 'produce our game as environmentally friendly and high quality as possible.',
                        description6: 'We use a 3D printer with recyclable and even recycled filament to make our ',
                        description7: 'figures ourself. Also the other materials such as game board and ',
                        description8: 'packaging is recyclable or made from recycled material.',
                        description9: 'We are also investigating the pollution in the Ilmenau (this river flows through ',
                        description10: 'Lüneburg), by collecting and counting plastic waste.'
                    },
                    team: {
                        title: 'The team',
                        description1: 'We are the HA24B!',
                        description2: 'We are 24 students aged 15 to 18. We founded this student company ',
                        description3: 'as part of the one-year vocational school for business at BBS I Lüneburg.',
                        description4: 'For this website we cooperate with the Lüneburg IT company “Webnetz” and the ',
                        description5: 'IT specialist trainees in their 3rd year from the IT22B class from our school.',
                    },
                    game: {
                        title: 'The game rules',
                        playerNumber: 'Number of players:',
                        playerNumberContent: '2 to 6 players',
                        age: 'Age:',
                        ageContent: '12 to 99 years',
                        time: 'Playing time:',
                        timeContent: '10 to 15 minutes',
                        material: 'Game materials:',
                        materialContent1: 'Game board with fields (question fields with question marks, event fields with exclamation marks) ',
                        materialContent2: 'Game pieces for each player',
                        materialContent3: 'Question and event cards',
                        materialContent4: 'Dice',
                        preparation: 'Game preparation:',
                        preparationContent1: 'The players choose a character and place it on the starting field of the platform.',
                        preparationContent2: 'The cards for questions and events are shuffled and laid out.'
                    },
                    other: {
                        title: 'More',
                        description1: 'Sustainably printed, environmentally conscious played!',
                        description2: 'Our game pieces and dice are made from recyclable material using the Bambu Lab P1S 3D printer - precise, high-quality and environmentally friendly. The game board and packaging are also made from recycled materials.',
                        description3: 'This is how we combine our production with sustainability and offer you a game that is not only fun, but also protects the environment!'
                    },
                    contact: {
                        firstName: 'First name *',
                        lastName: 'Last name *',
                        email: 'E-mail *',
                        subject: 'Subject',
                        message: 'Message *',
                        hintTitle: 'Hint:',
                        hintContent: 'Fields with * must be filled out.',
                    },
                    footer: {
                        privacyPolicy: 'Privacy Policy',
                        imprint: 'Imprint',
                        location: 'Location',
                        telephone: 'Call',
                        instagram: 'Instagram',
                        year: '2024'
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
                        description1:'Das ist unsere Schülerfirma „Baller los", was so viel heißt, wie mit voller Kraft loslegen ',
                        description2: 'bedeutet – und das machen wir.',
                        description3: 'Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den Umweltschutz, ',
                        description4: 'besonders bei den Gewässern, aufmerksam machen. Daher ist es selbstverständlich, dass wir',
                        description5: 'unser Spiel so umweltfreundlich und hochwertig wie möglich produzieren.',
                        description6: 'Wir nutzen einen 3D-Drucker mit recycle fähigem und sogar Recycling-Filament, um unsere ',
                        description7: 'Figuren selbst herstellen zu können. Auch die anderen Materialien wie Spielbrett und ',
                        description8: 'Verpackung sind recycle fähig oder bestehen aus recyclingmaterial.',
                        description9: 'Zusätzlich untersuchen wir die Verschmutzung der Ilmenau (dieser Fluss fließt durch ',
                        description10: 'Lüneburg), indem wir Plastikmüll einsammeln und zählen.'
                    },
                    team: {
                        title: 'Das Team',
                        description1: 'Wir sind die HA24B!',
                        description2: 'Wir sind 24 Schülerinnen und Schüler im Alter von 15 bis 18 Jahren. Diese Schülerfirma haben ',
                        description3: 'wir im Rahmen der einjährigen Berufsfachschule Wirtschaft an der BBS I Lüneburg gegründet.',
                        description4: 'Für diese Website kooperieren wir mit dem Lüneburger IT-Unternehmen „Webnetz“ und den ',
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
                        telephone: 'Anruf',
                        instagram: 'Instagram',
                        year: '2024'
                    }
                }
            }
        }
    });

export default i18n;