import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Fab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Technologies.css';
import {useTranslation} from "react-i18next";

function TechnologyLogo({ technology }) {

    const [logo, setLogo] = useState(null);

    useEffect(() => {
        import(`../../../../assets/Technologies/${technology.toLowerCase()}.svg`)
            .then(module => setLogo(module.default))
            .catch(error => console.error(`Failed to load the logo for ${technology}:`, error));
    }, [technology]);

    if (!logo) {
        return null;
    }

    return <img src={logo} alt={`${technology} logo`} className="common-logo" />;
}

function Technologies() {
    const { t } = useTranslation();
    const technologies = [
        'React', 'Python', 'Java', 'JavaScript', 'TypeScript',
        'Haskell', 'C', 'Redux', 'HTML', 'CSS',
        'NodeJS', 'Spring', 'mySQL', 'PostgreSQL', 'MongoDB',
        'Firebase', 'AWS', 'PostMan', 'GitHub', 'googleCloud',
        'express', 'Mui', 'NextJS', 'Docker', 'Maven',
    ];

    const [displayedTechnologies, setDisplayedTechnologies] = useState(technologies.slice(0, 10));
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        if (isExpanded) {
            setDisplayedTechnologies(technologies.slice(0, 10));
        } else {
            setDisplayedTechnologies(technologies);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="technologies-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="technologies-title">{t('technologies')}</Typography>
                <Paper elevation={3} className="technologies-container">
                    {displayedTechnologies.map((technology, index) => (
                        <div key={index} className="common-item">
                            <TechnologyLogo technology={technology} />
                            <Typography variant="subtitle1">{technology}</Typography>
                        </div>
                    ))}
                </Paper>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Fab color="primary" aria-label={isExpanded ? "show less" : "show more"} onClick={handleToggleExpand}>
                        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Fab>
                </div>
            </Container>
        </div>
    );
}

export default Technologies;
