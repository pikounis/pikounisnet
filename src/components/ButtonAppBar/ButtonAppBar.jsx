import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import LanguagePicker from "./components/LanguagePicker/LanguagePicker.jsx";
import LogoAP from "./components/LogoAP/LogoAP.jsx";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch.jsx";
import {useTranslation} from "react-i18next";

function ButtonAppBar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleMenuClose();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <LogoAP />
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        {isMobile ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenuClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={open}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={() => handleNavigate('/')} sx={{ justifyContent: 'center' }}>{t('home')}</MenuItem>
                                    <MenuItem onClick={() => handleNavigate('/timeline')} sx={{ justifyContent: 'center' }}>{t('timeline')}</MenuItem>
                                    <MenuItem onClick={() => handleNavigate('/projects')} sx={{ justifyContent: 'center' }}>{t('projects')}</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <div>
                                <Button color="inherit" onClick={() => navigate('/')}>{t('home')}</Button>
                                <Button color="inherit" onClick={() => navigate('/timeline')}>{t('timeline')}</Button>
                                <Button color="inherit" onClick={() => navigate('/projects')}>{t('projects')}</Button>
                            </div>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LanguagePicker />
                        <ThemeSwitch />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;
