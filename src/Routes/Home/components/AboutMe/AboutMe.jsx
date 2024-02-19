import React from "react";
import './AboutMe.css';
import { Container, Grid, Typography, Box } from "@mui/material";
import Photo from "../Photo/Photo.jsx";
import {useTranslation} from "react-i18next";

function AboutMe() {
    const { t } = useTranslation();
    return (
        <div>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
                        <Photo />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">Anastasios Pikounis</Typography>
                        <Typography variant="body1">
                            Support Engineer at <a href="https://fornova.com" target="_blank" >Fornova</a>
                        </Typography>
                    </Grid>
                    <Box sx={{ height: '50px', width: '100%' }}></Box>
                    <Grid item xs={12} md={12} className="last-grid-item">
                        <Typography align="justify" variant="body1">
                            {t('bio')}
                        </Typography>
                    </Grid>
                    <Box sx={{ height: '100px', width: '100%' }}></Box>
                </Grid>
            </Container>
        </div>
    );

}

export default AboutMe;
