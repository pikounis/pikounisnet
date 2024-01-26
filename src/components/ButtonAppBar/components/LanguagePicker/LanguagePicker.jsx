import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../../Store/languageSlice.jsx';
import './LanguagePicker.css';

const options = [
    { name: 'Arabic', code: 'ar' },
    { name: 'Chinese', code: 'cn' },
    { name: 'French', code: 'fr' },
    { name: 'Greek', code: 'gr' },
    { name: 'Hindi', code: 'in' },
    { name: 'Spanish', code: 'sp' },
    { name: 'English', code: 'uk' }
];

function LanguagePicker() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (code) => {
        dispatch(setLanguage(code));
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
                <LanguageIcon />
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
                    classes: { paper: 'languagePicker-paper' }
                }}
            >
                {options.map(({ name, code }) => (
                    <MenuItem key={name} onClick={() => handleLanguageChange(code)}>
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default LanguagePicker;
