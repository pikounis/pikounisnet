import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme, blueTheme, redTheme } from '../src/Theme/Theme.jsx'; // Adjust the path as needed
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Routes/Home/Home.jsx';
import About from '../src/Routes/About/About.jsx';
import { useSelector } from 'react-redux';
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar.jsx";

function App() {
    const themeName = useSelector((state) => state.theme.currentTheme);

    // Determine which theme to use based on the Redux state
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
            <div>
                <ButtonAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
