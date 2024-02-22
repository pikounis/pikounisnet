import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
// import sea from '/sea.png';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import LightBackground from "./components/backgrounds/LightBackground/LightBackground.jsx";
import DarkBackground from "./components/backgrounds/DarkBackground/DarkBackground.jsx";
import SomeThingsIBelieve from "./components/SomeThingsIBelieve/SomeThingsIBelieve.jsx";
import Typography from "@mui/material/Typography";
import CvDetails from "./components/CvDetails/CvDetails.jsx";

function Home() {
    const { t } = useTranslation();
    // Access the current theme from the Redux store
    const themeName = useSelector((state) => state.theme.currentTheme);

    const textColor = themeName === 'dark' ? 'white' : 'black';

    // Conditionally render the background based on the theme
    const BackgroundComponent = themeName === 'dark' ? DarkBackground : LightBackground;

    return (
        <div style={{ color: textColor, paddingTop: "100px" }}>
            {/*<div className="container">*/}
                {/*<img src={sea} alt="Sea" className="full-screen-img" />*/}
                {/*<BackgroundComponent />*/}
                {/*<Typography variant="h2">Welcome</Typography>*/}
            {/*</div>*/}
            <AboutMe />
            <CvDetails />
            <SomeThingsIBelieve />

            <ContactForm />
        </div>
    );
}

export default Home;
