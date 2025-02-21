import './App.css';
import Navbar from "./components/Navbar.tsx";
import logo from "./images/Logo.png";
import group from "./images/Gruppe.jpg";
import game from "./images/Spiel.jpg";
import printer from "./images/Drucker.png";
import Footer from "./components/Footer.tsx";
import ContactForm from "./components/ContactForm.tsx";
import {useEffect} from "react";

const App = () => {

    useEffect(() => {
        document.title = "Baller LOS";
    }, []);

    return (
        <div>
            <Navbar/>
            <div className={"headline-container"}>
                <div className="text-container">
                    <h1 className="title">Ein Schülerunternehmen der BBS 1 Lüneburg mit <em>Meerwert</em></h1>
                    <p className="subtitle">Spielend Wasser Schützen</p>
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
                            Moin, wir sind die HA24B!
                            Das ist unsere Schülerfirma <strong>„Baller los“</strong>, was so viel wie „mit voller Kraft
                            loslegen“ bedeutet – und das machen
                            wir.

                            Wir sind <strong>24 Schülerinnen und Schüler</strong> im Alter von 15 bis 18 Jahren. Diese
                            Schülerfirma haben wir im Rahmen der
                            einjährigen Berufsfachschule Wirtschaft an der <strong>BBS I Lüneburg</strong> gegründet.
                        </p>
                        <p>
                            Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf
                            den <strong>Umweltschutz</strong>, besonders bei den Gewässern,
                            aufmerksam machen. Daher ist es selbstverständlich, dass wir unser Spiel
                            so <strong>umweltfreundlich</strong> und hochwertig wie
                            möglich
                            produzieren.

                            Wir nutzen einen <strong>3D-Drucker</strong> mit recyclefähigem und sogar
                            Recycling-Filament, um unsere Figuren selbst herstellen zu
                            können. Auch die anderen Materialien wie Spielbrett und Verpackung sind recyclefähig oder
                            bestehen aus Recyclingmaterial.
                        </p>
                        <p>
                            Zusätzlich untersuchen wir die <strong>Verschmutzung der Ilmenau</strong> (dieser Fluss
                            fließt durch Lüneburg), indem wir
                            Plastikmüll
                            einsammeln und zählen.

                            Für diese Website kooperieren wir mit dem Lüneburger
                            IT-Unternehmen <strong>„webnetz“</strong> und den <strong>Auszubildenden zum
                            Fachinformatiker im 3. Lehrjahr</strong> aus der Klasse IT22B von unserer Schule.
                        </p>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>Das Team</h2>
                        <p> Wir sind die <strong>HA24B</strong> – eine Schülerfirma der <strong>BBS 1 Lüneburg</strong>,
                            bestehend aus <strong>24 Schülerinnen und
                                Schülern</strong> im Alter von 16 bis 19 Jahren. Im Rahmen der einjährigen
                            Berufsfachschule Wirtschaft haben wir ein innovatives und
                            nachhaltiges Spiel entwickelt.
                        </p>
                        <p> Unser Fokus liegt auf <strong>Umweltbewusstsein</strong>, insbesondere auf dem <strong>Schutz
                            unserer Gewässer</strong>. Daher werden
                            alle
                            Spielfiguren und der Würfel mit <strong>recycelbarem
                                Material</strong> in <strong>3D</strong> gedruckt, ebenso wie das Spielbrett und
                            die
                            Verpackung, die aus Recyclingmaterialien bestehen. </p> <p> Zusätzlich engagieren wir uns in
                        der Untersuchung der <strong>Wasserverschmutzung
                            der Illmenau</strong>. Für die Gestaltung unserer Website arbeiten wir eng mit dem
                        Lüneburger
                        IT-Unternehmen <strong>„webnetz“</strong> zusammen, unterstützt von den Auszubildenden der
                        Klasse <strong>IT22B</strong> unserer Schule.
                    </p>
                        <p> Wir sind stolz darauf, ein Projekt zu präsentieren, das sowohl kreatives Denken als auch
                            Verantwortung für unsere Umwelt vereint. </p>
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
                        <h2>Das Brettspiel</h2>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>Weiteres</h2>
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
