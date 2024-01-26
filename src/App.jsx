import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme, blueTheme, redTheme } from '../src/Theme/Theme.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Routes/Home/Home.jsx';
import About from '../src/Routes/About/About.jsx';
import { useSelector } from 'react-redux';
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar.jsx";
import LanguageSynchronizer from '../src/Translation/LanguageSynchronizer.jsx';
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const themeName = useSelector((state) => state.theme.currentTheme);

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

    return (
        <ThemeProvider theme={currentTheme()}>
            <CssBaseline />
            <LanguageSynchronizer /> {/* Include LanguageSynchronizer */}
            <div>
                <ButtonAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Home />} /> {/* 404 route */}
                </Routes>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
