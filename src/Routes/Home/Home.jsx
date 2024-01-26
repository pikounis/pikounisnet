import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Home.css';
import sea from '../../../public/sea.png';
import {Grid, Typography, Container} from "@mui/material";
import Photo from './components/Photo/Photo.jsx';

function Home() {
    const { t } = useTranslation();
    // Access the current theme from the Redux store
    const themeName = useSelector((state) => state.theme.currentTheme);

    const textColor = themeName === 'dark' ? 'white' : 'black';

    return (
            <div style={{ color: textColor  }}>
                <div className="container">
                    <img src={sea} alt="Sea" className="full-screen-img" />
                </div>
                <div >
                    <Container>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Photo />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2">Anastasios Pikounis</Typography>
                                <Typography variant="body1">
                                    Support Engineer at Fornova
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Typography align="justify" variant="body1">
                                    {t('bio')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

            </div>
    );
}

export default Home;
