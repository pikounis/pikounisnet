import React, { useEffect, useState } from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import './Certifications.css';
import certificationsData from './certifications.json';
import {useTranslation} from "react-i18next";

function CertificationLogo({ link }) {
    return <img src={link} alt="Certification logo" className="cert-logo" />;
}

function Certifications() {
    const { t } = useTranslation();
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        setCertifications(certificationsData);
    }, []);

    return (
        <div className="certifications-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="certifications-title">{t('certifications')}</Typography>
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
