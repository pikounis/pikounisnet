import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../../Store/languageSlice.jsx';
import Flags from './components/Flags/Flags.jsx';
import './LanguagePicker.css';

const options = [
    // { name: 'Arabic', code: 'ar' },
    { name: 'Chinese', code: 'cn' },
    { name: 'English', code: 'uk' },
    { name: 'French', code: 'fr' },
    { name: 'Greek', code: 'gr' },
    { name: 'Hindi', code: 'ind' },
    { name: 'Spanish', code: 'es' }
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
                sx={{
                    '& .MuiPaper-root': {
                        minWidth: '120px', // Adjust the width as needed
                    }
                }}
            >
                {options.map(({ name, code }) => (
                    <MenuItem key={name} onClick={() => handleLanguageChange(code)}>
                        <Flags flagCode={code} />
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default LanguagePicker;
