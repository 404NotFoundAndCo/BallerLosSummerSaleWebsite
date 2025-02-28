import React from "react";
import '../App.css';
import "./Footer.css";
import {useTranslation,} from 'react-i18next';
import './i18n.tsx';

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className="footer-container">

            <nav className="mb-3">
                <a href="#" className="footer-text"><i className="bi bi-shield"></i> {t('footer.privacyPolicy')} 
            </a>
            <a href="https://www.bbs1-lueneburg.de/impressum.html" className="footer-text"><i className="bi bi-journal-text"></i> {t('footer.imprint')} </a>
                <a href="https://www.google.de/maps/place/Berufsbildende+Schulen+I/@53.2478929,10.4208341,16z/data=!3m1!4b1!4m6!3m5!1s0x47b1ddd7656204bb:0xf16f2a9adcf3142f!8m2!3d53.2478897!4d10.423409!16s%2Fg%2F1tfc1234?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D" className="footer-text"><i className="bi bi-geo-alt"></i> {t('footer.location')} </a>
                <a href="#" className="footer-text"><i className="bi bi-telephone"></i> Nummer {t('footer.telephone')}</a>
                <a href="https://www.instagram.com/bbs1lg/" className="footer-text"><i className="bi bi-instagram"></i> {t('footer.instagram')} </a>
            </nav>

            <hr className="footer-border"/>

            <p className="footer-text-bottom">&copy; {t('footer.year')} </p>

        </footer>
    );
};

export default Footer;