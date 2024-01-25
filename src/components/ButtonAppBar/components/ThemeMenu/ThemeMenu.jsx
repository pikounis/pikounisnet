import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../../Store/themeSlice.jsx';
import './ThemeMenu.css';

const options = ['Light', 'Dark', 'Blue', 'Red'];

const ITEM_HEIGHT = 48;

function ThemeMenu() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (theme) => {
        dispatch(setTheme(theme));
        handleClose();
    };

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ContrastIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    classes: { paper: 'themeMenu-paper' }
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={() => handleThemeChange(option.toLowerCase())}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default ThemeMenu;
