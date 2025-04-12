import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import '../css/signin.css';

const ContactUs = () => {
    const { t } = useTranslation();
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Reemplaza estos valores con los tuyos de EmailJS
        emailjs.sendForm(
            'service_jwo8bml', 
            'template_t8tboxr', 
            form.current, 
            'RNra6OvQLJ3Nq4YWx'
        )
        .then((result) => {
            console.log('Email enviado con éxito:', result.text);
            // Reiniciar el formulario
            form.current.reset();
            // Mostrar mensaje de éxito
            alert(t("contactUs.emailSent"));
        }, (error) => {
            console.log('Error al enviar el email:', error.text);
            alert(t("contactUs.emailError"));
        });
    };

    return (
        <div className="signin">
            <div className="wrapper">
                <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                    <h1>{t("contactUs.title")}</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            name="user_email"
                            placeholder={t("contactUs.emailPlaceholder")}
                            id="email"
                            required
                        />
                        <i className="bx bx-envelope"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="subject"
                            placeholder={t("contactUs.subjectPlaceholder")}
                            id="asunto"
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>
                    <div className="input-box">
                        <textarea
                            name="message"
                            placeholder={t("contactUs.messagePlaceholder")}
                            id="message"
                            required
                        ></textarea>
                        <i className="bx bxs-message-dots"></i>
                    </div>
                    <button type="submit" className="btn" id="send">
                        {t("contactUs.sendButton")}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;