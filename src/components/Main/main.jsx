import React from 'react';
import '../css/main.css';
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();

  return (
    <main className='main-container'>
      <h1 className="main-title">Daniel Rodriguez</h1>
      <p className="main-subtitle">{t('description')}</p>
      <p className="main-subtitle2">{t('description2')}</p>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/src/components/assets/imagenes/python.png" alt="Proyecto 1" />
          <h3>Python</h3>
          <p>{t('proyecto1_desc')}</p>
          <div className='buttons'>
          <button className='btn-hover color-8'>
            <a href="https://github.com/DanielNoblero/Entrega-Final" target="_blank" rel="noopener noreferrer">
              {t('vercodigo')}
            </a>
          </button>
        </div>
      </div>

      <div className="project-card">
        <img src="/src/components/assets/imagenes/Html.png" alt="Proyecto 2" />
        <h3>Desarrollador Web</h3>
        <p>{t('proyecto2_desc')}</p>
        <div className='buttons'>
          <button className='btn-hover color-8'>
            <a href="https://danielnoblero.github.io/EF-Rodriguez/" target="_blank" rel="noopener noreferrer">
              {t('vercodigo')}
            </a>
          </button>
        </div>
      </div>

      <div className="project-card">
        <img src="/src/components/assets/imagenes/react.png" alt="Proyecto 3" />
        <h3>React.js</h3>
        <p>{t('proyecto3_desc')}</p>
        <div className='buttons'>
        <button className='btn-hover color-8'>
          <a href="https://danielnoblero.github.io/Portafolio-Rodriguez/" target="_blank" rel="noopener noreferrer">
            {t('vercodigo')}
          </a>
        </button>
      </div>
    </div>
      </div >
    </main >
  );
}
