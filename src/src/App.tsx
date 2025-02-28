import './App.css';
import Navbar from "./components/Navbar.tsx";
import logo from "./images/Logo.png";
import group from "./images/Gruppe.jpg";
import game from "./images/Spiel.jpg";
import printer from "./images/Drucker.png";
import Footer from "./components/Footer.tsx";
import ContactForm from "./components/ContactForm.tsx";
import {useEffect} from "react";
import {useTranslation,} from 'react-i18next';
import './i18n.tsx';

const App = () => {

    const {t} = useTranslation();

    useEffect(() => {
        document.title = "Baller LOS";
    }, []);

    return (
        <div>
            <Navbar/>
            <div className={"headline-container"}>
                <div className="text-container">
                    <h1 className="title">
                        {t('webpage.title')}
                    </h1>
                    <p className="subtitle">
                        {t('webpage.subtitle')}
                    </p>
                </div>
            </div>

            <section id="about">
                <div className={"pair-container"}>
                    <div className={"small-container"}>
                        <img src={logo} alt="Bild"/>
                    </div>
                    <div className="frame">
                        <h2>Über uns</h2>
                        <p>
                            Das ist unsere Schülerfirma „Baller los", was so viel heißt, wie mit voller Kraft loslegen
                            bedeutet – und das machen wir.
                        </p>
                        <p>
                            Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den Umweltschutz,
                            besonders bei den Gewässern, aufmerksam machen. Daher ist es selbstverständlich, dass wir
                            unser Spiel so umweltfreundlich und hochwertig wie möglich produzieren.
                        </p>
                        <p>
                            Wir nutzen einen 3D-Drucker mit recycle fähigem und sogar Recycling-Filament, um unsere
                            Figuren selbst herstellen zu können. Auch die anderen Materialien wie Spielbrett und
                            Verpackung sind recycle fähig oder bestehen aus recyclingmaterial.
                        </p>
                        <p>
                            Zusätzlich untersuchen wir die Verschmutzung der Ilmenau (dieser Fluss fließt durch
                            Lüneburg), indem wir Plastikmüll einsammeln und zählen.
                        </p>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>Das Team</h2>
                        <p>
                            Wir sind die HA24B!<br />
                            Wir sind 24 Schülerinnen und Schüler im Alter von 15 bis 18 Jahren. Diese Schülerfirma haben
                            wir im Rahmen der einjährigen Berufsfachschule Wirtschaft an der BBS I Lüneburg gegründet.
                        </p>
                        <p>
                            Für diese Website kooperieren wir mit dem Lüneburger IT-Unternehmen „Webnetz“ und den
                            Auszubildenden zum Fachinformatiker im 3. Lehrjahr aus der Klasse IT22B von unserer Schule.
                        </p>
                        <a href="https://www.instagram.com/bbs1lg/" className="footer-text"><i
                            className="bi bi-instagram h1"></i></a>
                    </div>
                    <div className={"small-container"}>
                        <img src={group} alt="Bild"/>
                    </div>
                </div>
            </section>

            <section id="game">
                <div className={"pair-container"}>
                    <div className={"small-container"}>
                        <img src={game} alt="Bild"/>
                    </div>
                    <div className={"frame"}>
                        <h2>Die Spielregeln</h2>
                        <p>
                            <strong>Spieleranzahl:</strong> 2 bis 6 Spieler <br />
                            <strong>Alter:</strong> 12 bis 99 Jahre <br />
                            <strong>Spieldauer:</strong> 10 bis 15 Minuten
                        </p>
                        <p>
                            <strong>Spielmaterialien:</strong><br />
                            Spielbrett mit Feldern (Fragefelder mit Fragezeichen, Ereignisfelder mit Ausrufezeichen)<br />
                            Spielfiguren für jeden Spieler<br />
                            Fragen- und Ereigniskarten<br />
                            Würfel<br />
                        </p>
                        <p>
                            <strong>Spielvorbereitung:</strong><br />
                            Die Spieler wählen eine Spielfigur und stellen sie auf das Startfeld der Plattform.<br />
                            Die Karten für Fragen und Ereignisse werden gemischt und bereitgelegt.<br />
                        </p>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>Weiteres</h2>
                        <p>
                            Nachhaltig gedruckt, umweltbewusst gespielt!<br/>
                            Unsere Spielfiguren und Würfel werden mit dem Bambu Lab P1S 3D-Drucker aus recycelbarem Material gefertigt – präzise, hochwertig und umweltschonend. Auch das Spielbrett und die Verpackung bestehen aus recycelten Materialien.
                        </p>
                        <p>
                            So verbinden wir unsere Produktion mit Nachhaltigkeit und bieten euch ein Spiel, das nicht nur Spaß macht, sondern auch die Umwelt schont!
                        </p>
                    </div>
                    <div className={"small-container"}>
                        <img src={printer} alt="Bild"/>
                    </div>
                </div>
            </section>

            <section id="contact">
                <ContactForm/>
            </section>

            <Footer/>
        </div>
    )
        ;
};

export default App;
