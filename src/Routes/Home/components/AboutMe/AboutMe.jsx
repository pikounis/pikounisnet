import React from "react";
import './AboutMe.css';
import {Container, Grid, Typography, Box, Button} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { blue } from '@mui/material/colors';
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
                        <Typography variant="h2" className="aboutme-title" >{t('myname')}</Typography>
                        <Typography variant="body1"className="aboutme-title" >
                            {t('softwareengineer')}
                        </Typography>
                    </Grid>
                    {/*<Grid item xs={12} md={6}>*/}
                    {/*    <Box>*/}
                    {/*        /!* Name and Verified Icon on the same line *!/*/}
                    {/*        <Box display="flex" alignItems="center">*/}
                    {/*            <Typography variant="h2" className="aboutme-title" sx={{ marginRight: 1 }}>*/}
                    {/*                Anastasios Pikounis*/}
                    {/*            </Typography>*/}
                    {/*            <VerifiedIcon sx={{ color: blue[500], fontSize: '1.5rem' }} />*/}
                    {/*        </Box>*/}

                    {/*        /!* Job Title below Name and Icon *!/*/}
                    {/*        <Typography variant="body1" className="aboutme-title">*/}
                    {/*            Software Engineer*/}
                    {/*        </Typography>*/}
                    {/*    </Box>*/}
                    {/*</Grid>*/}
                    <Box sx={{ height: '50px', width: '100%' }}></Box>
                    <Grid item xs={12} md={12} className="last-grid-item">
                        <Typography align="justify" variant="body1">
                            {t('bio1')}
                        </Typography>
                        <br />
                        <Typography align="justify" variant="body1">
                            {t('bio2')}
                        </Typography>
                        <br />
                        <Typography align="justify" variant="body1">
                            {t('bio3')}
                        </Typography>

                    </Grid>
                    {/*<Box sx={{ height: '100px', width: '100%' }}></Box>*/}
                </Grid>
            </Container>
        </div>
    );

}

export default AboutMe;
