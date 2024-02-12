import React from 'react';

function DevIcon({ technology }) {
    // State to hold the dynamically loaded logo
    const [logo, setLogo] = React.useState(null);

    React.useEffect(() => {
        // Dynamically import the logo based on the technology prop
        import(`../../../../../../assets/Technologies/${technology.toLowerCase()}.svg`)
            .then(module => setLogo(module.default))
            .catch(error => console.error(`Failed to load the logo for ${technology}:`, error));
    }, [technology]); // Re-run this effect if the technology prop changes

    if (!logo) {
        return null; // or some placeholder
    }

    return <img src={logo} alt={`${technology} logo`} style={{ width: '50px', height: '50px' }} />;
}

export default DevIcon;
