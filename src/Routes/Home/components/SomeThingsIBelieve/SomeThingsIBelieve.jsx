import React from 'react';
import { Typography, Paper, List, ListItem, Container, Grid } from '@mui/material';
import beliefs from './believe.json'; // Ensure this is correctly imported
import { useTranslation } from 'react-i18next';

function SomeThingsIBelieve() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <div className="believe-root">
            <Container maxWidth="lg" sx={{ textAlign: 'center', marginBottom: '20px', paddingTop: '100px' }}>
                <Typography variant="h2">Some things I believe</Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {beliefs.map((belief) => (
                        <Grid item xs={12} sm={6} key={belief.id} sx={{ display: 'flex', height: '100%' }}>
                            <Paper elevation={3} sx={{ p: 2, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Typography variant="h5" gutterBottom>
                                    {belief.title[currentLang] || belief.title.uk} {/* Fallback to 'uk' if currentLang not found */}
                                </Typography>
                                <List sx={{ flexGrow: 1 }}>
                                    {belief.bulletPoints.map((point, index) => (
                                        <ListItem key={index} disableGutters>
                                            <Typography variant="body1">
                                                - {point[currentLang] || point.uk} {/* Fallback to 'uk' for each point */}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default SomeThingsIBelieve;
