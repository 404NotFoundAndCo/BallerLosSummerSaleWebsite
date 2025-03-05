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
                        <h2>
                            {t('aboutUs.title')}
                        </h2>
                        <p>
                            {t('aboutUs.description1')}
                            {t('aboutUs.description2')}
                        </p>
                        <p>
                            {t('aboutUs.description3')}
                            {t('aboutUs.description4')}
                            {t('aboutUs.description5')}
                        </p>
                        <p>
                            {t('aboutUs.description6')}
                            {t('aboutUs.description7')}
                            {t('aboutUs.description8')}
                        </p>
                        <p>
                            {t('aboutUs.description9')}
                            {t('aboutUs.description10')}
                        </p>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>
                            {t('team.title')}
                        </h2>
                        <p>
                            {t('team.description1')}<br />
                            {t('team.description2')}
                            {t('team.description3')}
                        </p>
                        <p>
                            {t('team.description4')}
                            {t('team.description5')}
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
                        <h2>
                            {t('game.title')}
                        </h2>
                        <p>
                            <strong>{t('game.playerNumber')}</strong> {t('game.playerNumberContent')} <br />
                            <strong>{t('game.age')}</strong> {t('game.ageContent')} <br />
                            <strong>{t('game.time')}</strong> {t('game.timeContent')}
                        </p>
                        <p>
                            <strong>{t('game.material')}</strong><br />
                            {t('game.materialContent1')}<br />
                            {t('game.materialContent2')}<br />
                            {t('game.materialContent3')}<br />
                            {t('game.materialContent4')}<br />
                        </p>
                        <p>
                            <strong>{t('game.preparation')}</strong><br />
                            {t('game.preparationContent1')}<br />
                            {t('game.preparationContent2')}<br />
                        </p>
                    </div>
                </div>
                <div className={"pair-container"}>
                    <div className={"frame"}>
                        <h2>
                            {t('other.title')}
                        </h2>
                        <p>
                            {t('other.description1')}<br/>
                            {t('other.description2')}
                        </p>
                        <p>
                            {t('other.description3')}
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
