import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Grid, Fab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Technologies.css';


// TechnologyLogo Component
function TechnologyLogo({ technology }) {
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        import(`../../../../assets/Technologies/${technology.toLowerCase()}.svg`)
            .then(module => setLogo(module.default))
            .catch(error => console.error(`Failed to load the logo for ${technology}:`, error));
    }, [technology]);

    if (!logo) {
        return null; // Or some placeholder
    }

    return <img src={logo} alt={`${technology} logo`} style={{ maxWidth: '50px', maxHeight: '50px' }} />;
}

function Technologies() {
    const technologies = [
        'React', 'Python', 'Java', 'JavaScript', 'TypeScript',
        'Haskell', 'C', 'Redux', 'HTML', 'CSS',
        'NodeJS', 'Spring', 'mySQL', 'PostgreSQL', 'MongoDB',
        'Firebase', 'Figma', 'PostMan', 'GitHub', 'googleCloud',
        'express', 'Mui', 'NextJS', 'Docker',
    ];

    const [displayedTechnologies, setDisplayedTechnologies] = useState(technologies.slice(0, 10));
    const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion

    const handleToggleExpand = () => {
        if (isExpanded) {
            setDisplayedTechnologies(technologies.slice(0, 10)); // Collapse to show fewer items
        } else {
            setDisplayedTechnologies(technologies); // Expand to show all items
        }
        setIsExpanded(!isExpanded); // Toggle expansion state
    };

    return (
        <div className="believe-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="believe-title">Technologies</Typography>
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        {displayedTechnologies.map((technology, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TechnologyLogo technology={technology} />
                                    <Typography variant="subtitle1">{technology}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <Fab color="primary" aria-label={isExpanded ? "show less" : "show more"} onClick={handleToggleExpand}>
                            {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </Fab>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}

export default Technologies;
