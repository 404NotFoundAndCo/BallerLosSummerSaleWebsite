import React, {useEffect, useState} from "react";
import "./Navbar.css";
import '../App.css';

const Navbar: React.FC = () => {

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark"; // Speichert die Auswahl
    });

    // Modus umschalten
    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    // Beim Laden der Seite den gespeicherten Modus anwenden
    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar-menu"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <span className="montserrat-font">Baller</span> <span className="fustat-font">LOS</span>
                    </a>
                </div>
                <div className="icon-container" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about"><i className="bi bi-people h3"></i> Wir</a></li>
                        <li><a href="#game"><i className="bi bi-dice-6 h3"></i> Spiel</a></li>
                        <li><a href="#contact"><i className="bi bi-envelope h3"></i> Kontakt</a></li>
                        <li><a><i className="bi bi-translate h3"></i> Übersetzer</a></li>
                        <li>
                            <a onClick={toggleTheme} style={{cursor: "pointer"}}>
                                <i className={`bi ${darkMode ? "bi-moon" : "bi-sun"} h3`}></i> Modus
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;