import React, { useState } from "react";
import "./ContactForm.css";
import '../App.css';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        message: "",
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
                        placeholder="Vorname *"
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
                        placeholder="Nachname *"
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
                        placeholder="E-Mail *"
                        value={formData.user_email}
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
                        placeholder="Nachricht *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <p className="hint">
                <strong>Hinweis:</strong> Felder mit * müssen ausgefüllt werden.
            </p>

            <button type="submit" className="custom-btn" disabled={isSubmitting}>
                {isSubmitting ? "Senden..." : "Senden"}
            </button>
        </div>
    );
};

export default ContactForm;