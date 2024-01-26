import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import './Signature.css';

function Signature() {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme(); // Access the current MUI theme

    // Inline style for hover effect
    const hoverStyle = {
        backgroundColor: isHovered ? theme.palette.primary.main : "currentColor"
    };

    return (
        <div
            className="signature"
            style={hoverStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        ></div>
    );
}

export default Signature;
