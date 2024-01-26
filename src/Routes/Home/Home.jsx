import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
import sea from '../../../public/sea.png';
import {Typography} from "@mui/material";
import Photo from './components/Photo/Photo.jsx';

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
                <div >
                    <Photo />
                    <Typography variant="h1">Hi</Typography>
                </div>

            </div>
    );
}

export default Home;
