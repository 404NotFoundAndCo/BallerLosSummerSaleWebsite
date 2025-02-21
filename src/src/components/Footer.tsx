import React from "react";
import '../App.css';
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">

            <nav className="mb-3">
                <a href="#" className="footer-text"><i className="bi bi-shield"></i> Datenschutz
            </a>
            <a href="https://www.bbs1-lueneburg.de/impressum.html" className="footer-text"><i className="bi bi-journal-text"></i> Impressum</a>
                <a href="#" className="footer-text"><i className="bi bi-geo-alt"></i> Ort</a>
                <a href="#" className="footer-text"><i className="bi bi-telephone"></i> Nummer</a>
                <a href="https://www.instagram.com/bbs1lg/" className="footer-text"><i className="bi bi-instagram"></i> Instagram</a>
            </nav>

            <hr className="footer-border"/>

            <p className="footer-text-bottom">&copy; 2024 </p>

        </footer>
    );
};

export default Footer;