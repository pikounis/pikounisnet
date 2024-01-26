import React from 'react';
import IconButton from '@mui/material/IconButton';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../../Store/themeSlice.jsx';

function ThemeSwitch() {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.currentTheme);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="toggle theme"
                onClick={toggleTheme}
            >
                <ContrastIcon />
            </IconButton>
        </div>
    );
}

export default ThemeSwitch;
