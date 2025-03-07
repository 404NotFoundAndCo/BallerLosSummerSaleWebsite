import React, {useEffect, useState} from "react";
import "./Navbar.css";
import '../App.css';
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
    const { i18n } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState(i18n.language);
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);

    const toggleLanguage = () => {
        const newLanguage = language === "de" ? "en" : "de";
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className={`navbar-toggle ${isMenuOpen ? "" : "collapsed"}`}
                        onClick={toggleMenu}
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand" href="#">
                        <span className="montserrat-font">Baller</span> <span className="fustat-font">LOS</span>
                    </a>
                </div>

                <div className={`icon-container ${isMenuOpen ? "open" : ""}`} id="navbar-menu">
                    <ul className={`nav navbar-nav navbar-right ${isMenuOpen ? "active" : ""}`}>
                        <li><a href="#about" onClick={handleMenuItemClick}><i className="bi bi-people h3"></i> {language === "de" ? "Wir" : "About"}</a></li>
                        <li><a href="#game" onClick={handleMenuItemClick}><i className="bi bi-dice-6 h3"></i> {language === "de" ? "Spiel" : "Game"}</a></li>
                        <li><a href="#contact" onClick={handleMenuItemClick}><i className="bi bi-envelope h3"></i> {language === "de" ? "Kontakt" : "Contact"}</a></li>
                        <li><a onClick={() => { toggleLanguage(); handleMenuItemClick(); }} style={{ cursor: "pointer" }}><i className="bi bi-translate h3"></i>{language === "de" ? " Übersetzer" : " Translator"}</a></li>
                        <li><a onClick={() => { toggleTheme(); handleMenuItemClick(); }} style={{ cursor: "pointer" }}><i className={`bi ${darkMode ? "bi-moon" : "bi-sun"} h3`}></i> {language === "de" ? "Modus" : "Mode"}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;