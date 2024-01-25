import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';

function Home() {
    // Access the current theme from the Redux store
    const themeName = useSelector((state) => state.theme.currentTheme);

    // Apply theme-based styles or functionality here
    // For example, changing text color based on the theme
    const textColor = themeName === 'dark' ? 'white' : 'black';

    return (
            <div style={{ color: textColor }}>
                Home Page - Current Theme: {themeName}
            </div>
    );
}

export default Home;
