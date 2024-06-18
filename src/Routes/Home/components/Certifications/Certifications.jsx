import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import './Certifications.css';
import certificationsData from './certifications.json';

function CertificationLogo({ link }) {
    return <img src={link} alt="Certification logo" className="cert-logo" />;
}

function Certifications() {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        setCertifications(certificationsData);
    }, []);

    return (
        <div className="certifications-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="certifications-title">Certifications</Typography>
                <Paper elevation={3} className="certifications-container">
                    <Grid container spacing={4} justifyContent="center">
                        {certifications.map((certification, index) => (
                            <Grid item key={index} className="common-item">
                                <div>
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
