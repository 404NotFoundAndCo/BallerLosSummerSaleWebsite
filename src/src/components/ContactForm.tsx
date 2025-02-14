import React from "react";
import "./ContactForm.css";
import '../App.css';

const ContactForm: React.FC = () => {
    return (
        <div className="contact-container">

            <div className="input-group">
                <div className="input-field">
                    <i className="bi bi-person-circle h3"></i>
                    <input className="input" type="text" placeholder=" Vorname *" required/>
                </div>
                <div className="input-field">
                    <i className="bi bi-person-circle h3"></i>
                    <input className="input" type="text" placeholder="Nachname *" required/>
                </div>
            </div>

            <div className="input-group">
                <div className="input-field">
                    <i className="bi bi-envelope h3"></i>
                    <input className="input" type="email" placeholder="E-Mail *" required/>
                </div>
                <div className="input-field">
                    <i className="bi bi-pencil h3"></i>
                    <input className="input" type="email" placeholder="Betreff" required/>
                </div>
            </div>

            <div className="input-group">
                <div className="input-field textarea">
                    <i className="bi bi-chat-left-text h3"></i>
                    <textarea className="message" placeholder="Nachricht *" required></textarea>
                </div>
            </div>

            <p className="hint">
                <strong>Hinweis:</strong> Felder mit * müssen ausgefüllt werden.
            </p>

            <button type="submit" className="custom-btn">Senden</button>

        </div>
    );
};

export default ContactForm;