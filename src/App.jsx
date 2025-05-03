import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Main from './components/Main/main';
import './local/i18n';
import ContactUs from './components/ContactUS/ContatcUs';
import Footer from './components/Footer/Footer';
import About from './components/About/about';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;