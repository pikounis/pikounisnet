// import React from 'react';
//
// function DevIcon({ technology }) {
//     // State to hold the dynamically loaded logo
//     const [logo, setLogo] = React.useState(null);
//
//     React.useEffect(() => {
//         // Dynamically import the logo based on the technology prop
//         import(`../../../../../../assets/Technologies/${technology.toLowerCase()}.svg`)
//             .then(module => setLogo(module.default))
//             .catch(error => console.error(`Failed to load the logo for ${technology}:`, error));
//     }, [technology]); // Re-run this effect if the technology prop changes
//
//     if (!logo) {
//         return null; // or some placeholder
//     }
//
//     return <img src={logo} alt={`${technology} logo`} style={{ width: '50px', height: '50px' }} />;
// }
//
// export default DevIcon;

import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function DevIcon({ technology }) {
    const [logo, setLogo] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    // Effect for dynamically importing the logo
    useEffect(() => {
        import(`../../../../../assets/Technologies/${technology.toLowerCase()}.svg`)
            .then(module => setLogo(module.default))
            .catch(error => console.error(`Failed to load the logo for ${technology}:`, error));
    }, [technology]);

    // Handler to open the Popover
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handler to close the Popover
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Determines if the Popover is open based on the presence of an anchor element
    const open = Boolean(anchorEl);
    // Unique ID for accessibility features
    const id = open ? 'tech-popover' : undefined;

    return (
        <div>
            <img
                src={logo}
                alt={`${technology} logo`}
                style={{ width: '35px', height: '35px', cursor: 'pointer' }}
                onClick={handleClick}
                aria-describedby={id}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>{technology}</Typography>
            </Popover>
        </div>
    );
}

export default DevIcon;
