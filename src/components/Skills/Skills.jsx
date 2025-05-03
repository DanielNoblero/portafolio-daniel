import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
    FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import { SiVite, SiDjango, SiFirebase } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import '../css/skills.css';

const Skills = () => {
    const { t } = useTranslation();

    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#e44d26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
        { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
        { name: 'React.js', icon: <FaReact color="#61DBFB" /> },
        { name: 'Vite', icon: <SiVite color="#946ce7" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
        { name: 'Python', icon: <FaPython color="#3776ab" /> },
        { name: 'Django', icon: <SiDjango color="#092e20" /> },
        { name: 'Git', icon: <FaGitAlt color="#f34f29" /> },
        { name: 'GitHub', icon: <FaGithub color="#fff" /> },
        { name: 'Firebase', icon: <SiFirebase color="#ffa000" /> },
        { name: 'Figma', icon: <FaFigma color="#a259ff" /> },
        { name: 'Responsive Design', icon: <MdDevices color="#38bdf8" /> }
        
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <h2 className="skills-title">{t('skills.title')}</h2>
                <p className="skills-subtitle">{t('skills.subtitle')}</p>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-icon">{skill.icon}</span>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
