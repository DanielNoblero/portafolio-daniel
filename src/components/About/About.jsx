import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/about.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <h2 className="about-title">{t('about.title')}</h2>
                <img className='about-img' src="public\assets\imagenes\perfil.jpg" alt="Perfil" />
                <p className="about-text">{t('about.intro')}</p>
                <p className="about-text">{t('about.learning')}</p>
                <p className="about-text">{t('about.focus')}</p>
            </div>
        </section>
    );
};

export default About;
