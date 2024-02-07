import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5a8ec2',
            // main: '#f50000',
            // main: '#000000',
        },
        secondary: {
            main: '#dc004e', // a shade of pink
        },
        background: {
            default: '#ffffff', // white background
            paper: '#f5f5f5', // light gray for paper elements
        },
        text: {
            primary: '#000000', // black text for high contrast
            secondary: '#757575', // gray for secondary text
        },
        // You can define more colors here
    },
    // Add any additional customizations
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // Set the color for AppBar in light theme
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // a lighter shade of blue for better visibility in dark mode
            // main: '#ffffff', // a lighter shade of blue for better visibility in dark mode

        },
        secondary: {
            main: '#f48fb1', // a lighter shade of pink
        },
        background: {
            default: '#000000', // dark gray for the background
            paper: '#1e1e1e', // slightly lighter gray for paper elements
        },
        text: {
            primary: '#ffffff', // white text for high contrast
            secondary: '#bbbbbb', // light gray for secondary text
        },
        // More colors can be added here
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // Red color for AppBar in dark mode
                    color: '#ffffff',
                },
            },
        },
    },

    // Additional customizations
});


const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#1565c0', // a deeper shade of blue for primary
            light: '#5e92f3', // a lighter shade for primary light
            dark: '#003c8f', // a darker shade for primary dark
        },
        secondary: {
            main: '#80d8ff', // a cyan-like color for secondary
            light: '#b6ffff', // lighter cyan
            dark: '#49a7cc', // darker cyan
        },
        background: {
            default: '#e3f2fd', // light blue background
            paper: '#bbdefb', // a slightly darker shade for paper elements
        },
        text: {
            primary: '#0d47a1', // strong blue for primary text
            secondary: '#01579b', // slightly lighter blue for secondary text
        },
        // You can define additional color shades here
    },
    // Additional customizations
});

const redTheme = createTheme({
    palette: {
        primary: {
            main: '#d32f2f', // a strong shade of red for primary
            light: '#ff6659', // a lighter shade for primary light
            dark: '#9a0007', // a darker shade for primary dark
        },
        secondary: {
            main: '#ff5252', // a bright, slightly pinkish red for secondary
            light: '#ff867f', // lighter pinkish red
            dark: '#c50e29', // darker shade for secondary dark
        },
        background: {
            default: '#ffebee', // very light red, almost pink, for background
            paper: '#ffcdd2', // slightly darker shade for paper elements
        },
        text: {
            primary: '#b71c1c', // dark red for primary text
            secondary: '#e57373', // softer red for secondary text
        },
        // Additional color shades can be defined here
    },
    // Additional customizations
});

export { lightTheme, darkTheme, blueTheme, redTheme };
