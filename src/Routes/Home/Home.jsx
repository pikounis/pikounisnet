import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
import {Typography} from "@mui/material";

function Home() {
    const { t } = useTranslation();
    // Access the current theme from the Redux store
    const themeName = useSelector((state) => state.theme.currentTheme);
    const languageName = useSelector((state) => state.language.currentLanguage);

    // Apply theme-based styles or functionality here
    // For example, changing text color based on the theme
    const textColor = themeName === 'dark' ? 'white' : 'black';

    return (
            <div style={{ color: textColor  }}>
                <div className="container">
                    {/*Home Page - Current Theme: {themeName}*/}
                    {/*<h2>{languageName}</h2>*/}
                    {/*<h3>{t('welcomeMessage')}</h3>*/}
                    {/*<h3>{t('description')}</h3>*/}
                    <Typography variant="h1">Welcome</Typography>
                </div>

            </div>
    );
}

export default Home;
