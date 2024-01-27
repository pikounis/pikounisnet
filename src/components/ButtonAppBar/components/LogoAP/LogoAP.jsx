// import React from "react";
// import './LogoAP.css';
//
// function LogoAP() {
//     return (
//         <div className="logo"></div>
//     );
// }
//
// export default LogoAP;

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import './LogoAP.css';
import {useNavigate} from "react-router-dom";

function LogoAP() {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme(); // Access the current MUI theme

    // Inline style for hover effect
    const hoverStyle = {
        backgroundColor: isHovered ? theme.palette.primary.main : "currentColor"
    };

    const navigate = useNavigate();

    return (
        <div
            className="logo"
            style={hoverStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate('/')}
        ></div>
    );
}

export default LogoAP;
