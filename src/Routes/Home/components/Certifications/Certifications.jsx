import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import './Certifications.css';
import certificationsData from './certifications.json';

// CertificationLogo Component
function CertificationLogo({ link }) {
    return <img src={link} alt="Certification logo" className="certification-logo" />;
}

function Certifications() {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        // Simulating fetching data from a JSON file
        setCertifications(certificationsData);
    }, []);

    return (
        <div className="certifications-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="certifications-title">Certifications</Typography>
                <Paper elevation={3} className="certifications-container">
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        {certifications.map((certification, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                <div className="certification-item">
                                    <CertificationLogo link={certification.link} />
                                    <Typography variant="subtitle1">{certification.name}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Certifications;
