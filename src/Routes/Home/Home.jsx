import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import LightBackground from "./components/backgrounds/LightBackground/LightBackground.jsx";
import DarkBackground from "./components/backgrounds/DarkBackground/DarkBackground.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";
import CvDetails from "./components/CvDetails/CvDetails.jsx";
import Certifications from "./components/Certifications/Certifications.jsx";

function Home() {
    const { t } = useTranslation();
    const themeName = useSelector((state) => state.theme.currentTheme);

    const textColor = themeName === 'dark' ? 'white' : 'black';
    const BackgroundComponent = themeName === 'dark' ? DarkBackground : LightBackground;

    return (
        <div style={{ color: textColor, paddingTop: "100px" }}>
            <AboutMe />
            <CvDetails />
            <Technologies />
            <Certifications />
            <ContactForm />
        </div>
    );
}

export default Home;
