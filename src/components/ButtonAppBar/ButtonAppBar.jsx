import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import LanguagePicker from "./components/LanguagePicker/LanguagePicker.jsx";
import './ButtonAppBar.css';
// import ThemeMenu from "./components/ThemeMenu/ThemeMenu.jsx";
import LogoAP from "./components/LogoAP/LogoAP.jsx";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch.jsx";

function ButtonAppBar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }} className="buttonAppBar">
            <AppBar position="fixed">
                <Toolbar className="toolbar">
                    <LogoAP />
                    <div>
                        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                        <Button color="inherit" onClick={() => navigate('/timeline')}>Timeline</Button>
                        <Button color="inherit" onClick={() => navigate('/projects')}>Projects</Button>
                    </div>
                    <div className="right-div"> {/* Ensure inline display */}
                        <LanguagePicker />
                        {/*<ThemeMenu />*/}
                        <ThemeSwitch />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;
