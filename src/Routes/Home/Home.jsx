import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
import sea from '/sea.png';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import Projects from "./components/Projects/Projects.jsx";

function Home() {
    const { t } = useTranslation();
    // Access the current theme from the Redux store
    const themeName = useSelector((state) => state.theme.currentTheme);

    const textColor = themeName === 'dark' ? 'white' : 'black';

    return (
            <div style={{ color: textColor  }}>
                <div className="container">
                    <img src={sea} alt="Sea" className="full-screen-img" />
                </div>
                <AboutMe />
                <ContactForm />
                <Projects />
            </div>
    );
}

export default Home;
