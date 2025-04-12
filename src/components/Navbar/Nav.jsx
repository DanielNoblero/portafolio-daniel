import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import '../css/style.css';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">

        <Link to="/" className="logo">{t('Daniel Dev')}</Link>
        <ul className="flex gap-6">
          <Link to="/proyecto" className="nav-item">{t('projects')}</Link>
          <Link to="/contactus" className="nav-item">{t('contact')}</Link>
        </ul>

        <div className="dropdown">
        <button className="dropbtn flex items-center gap-2" onClick={toggleDropdown}>
  <i className="fa-solid fa-language"></i>
  <p>{t('idioma')}</p>
</button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <span onClick={() => changeLanguage('es')}>{t('Spanish')}</span>
                            <span onClick={() => changeLanguage('en')}>{t('English')}</span>
                        </div>
                    )}
                </div>
      </nav>
    </header>
  );
}