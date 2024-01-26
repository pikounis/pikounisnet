import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import LanguagePicker from "./components/LanguagePicker/LanguagePicker.jsx";
import './ButtonAppBar.css';
import ThemeMenu from "./components/ThemeMenu/ThemeMenu.jsx";
import LogoAP from "./components/LogoAP/LogoAP.jsx";

function ButtonAppBar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }} className="buttonAppBar">
            <AppBar position="fixed">
                <Toolbar className="toolbar">
                    <LogoAP />
                    <div className="right-div"> {/* Ensure inline display */}
                        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                        <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
                        <LanguagePicker />
                        <ThemeMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;
