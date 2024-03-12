import React from 'react';
import { Typography, Paper, List, ListItem, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Technologies.css';

function Technologies() {
    const {i18n} = useTranslation();
    // const currentLang = i18n.language;

    return (
        <div className="believe-root">
            <Container maxWidth="lg">
                <Typography variant="h4" className="believe-title">Technologies</Typography>
            </Container>

        </div>
    );
}

export default Technologies;