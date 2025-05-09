import React, { useState } from "react";
import '../App.css';
import "./ContactForm.css";
import {useTranslation,} from 'react-i18next';
import '../i18n.tsx';

const ContactForm: React.FC = () => {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        message: "",
        subject: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) {
            console.warn("Form is already being submitted.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("E-Mail wurde erfolgreich gesendet!");
                setFormData({
                    first_name: "",
                    last_name: "",
                    user_email: "",
                    message: "",
                    subject: ""
                });
            } else {
                const error = await response.json();
                console.error("Fehler beim Senden der E-Mail:", error);
            }
        } catch (error) {
            console.error("Fehler beim Senden der E-Mail:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container" onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-field">
                    <i className="bi bi-person-circle h3"></i>
                    <input
                        className="input"
                        type="text"
                        name="first_name"
                        placeholder={t('contact.firstName')}
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <i className="bi bi-person-circle h3"></i>
                    <input
                        className="input"
                        type="text"
                        name="last_name"
                        placeholder={t('contact.lastName')}
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input-field">
                    <i className="bi bi-envelope h3"></i>
                    <input
                        className="input"
                        type="email"
                        name="user_email"
                        placeholder={t('contact.email')}
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-field">
                    <i className="bi bi-pencil h3"></i>
                    <input
                        className="input"
                        type="betreff"
                        name="subject"
                        placeholder={t('contact.subject')}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input-field textarea">
                    <i className="bi bi-chat-left-text h3"></i>
                    <textarea
                        className="message"
                        name="message"
                        placeholder={t('contact.message')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>


            <p className="hint">
                <strong>{t('contact.hintTitle')}</strong> {t('contact.hintContent')}
            </p>

            <button type="submit" className="custom-btn" disabled={isSubmitting}>
                {isSubmitting ? "Senden..." : "Senden"}
            </button>

        </div>
    );
};

export default ContactForm;
