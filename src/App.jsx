import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme, blueTheme, redTheme } from '../src/Theme/Theme.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../src/Routes/Home/Home.jsx';
import Timeline from './Routes/Timeline/Timeline.jsx';
import Projects from './Routes/Projects/Projects.jsx';
import { useSelector } from 'react-redux';
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar.jsx";
import LanguageSynchronizer from '../src/Translation/LanguageSynchronizer.jsx';
import Footer from "./components/Footer/Footer.jsx";
import useDirection from "./useDirection.jsx";
import ScrollToTop from './ScrollToTop';

function App() {
    const themeName = useSelector((state) => state.theme.currentTheme);
    const language = useSelector((state) => state.language.currentLanguage);
    const location = useLocation();
    const direction = useDirection();

    // Determine the theme based on Redux state
    const currentTheme = () => {
        switch(themeName) {
            case 'light':
                return lightTheme;
            case 'dark':
                return darkTheme;
            case 'blue':
                return blueTheme;
            case 'red':
                return redTheme;
            default:
                return lightTheme;
        }
    };

    // Determine if the current route should have RTL direction
    const isRtlRoute = location.pathname !== '/timeline' && location.pathname !== '/projects' && language === 'ar';

    return (
        <ThemeProvider theme={currentTheme()}>
            <CssBaseline />
            <LanguageSynchronizer /> {/* Include LanguageSynchronizer */}
            <div className="app-container" dir={isRtlRoute ? 'rtl' : 'ltr'}>
                <ScrollToTop /> {/* Include ScrollToTop */}
                <ButtonAppBar />
                <div className="content-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<Home />} /> {/* 404 route */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
