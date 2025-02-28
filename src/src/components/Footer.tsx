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
                <a href="https://www.google.de/maps/place/Berufsbildende+Schulen+I/@53.2478929,10.4208341,16z/data=!3m1!4b1!4m6!3m5!1s0x47b1ddd7656204bb:0xf16f2a9adcf3142f!8m2!3d53.2478897!4d10.423409!16s%2Fg%2F1tfc1234?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D" className="footer-text"><i className="bi bi-geo-alt"></i> Ort</a>
                <a href="#" className="footer-text"><i className="bi bi-telephone"></i> Nummer</a>
                <a href="https://www.instagram.com/bbs1lg/" className="footer-text"><i className="bi bi-instagram"></i> Instagram</a>
            </nav>

            <hr className="footer-border"/>

            <p className="footer-text-bottom">&copy; 2024 </p>

        </footer>
    );
};

export default Footer;