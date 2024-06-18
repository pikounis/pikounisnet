import React from 'react';
import { Box, Typography, Link, Grid, useTheme } from '@mui/material';
import Signature from './components/Signature/Signature.jsx';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailLockIcon from '@mui/icons-material/MailLock';
import XIcon from '@mui/icons-material/X';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ThemeMenu from "../ButtonAppBar/components/ThemeMenu/ThemeMenu.jsx";
import './Footer.css';
import {useTranslation} from "react-i18next";

function Footer() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <div >
            <Box
                // style={{paddingTop: '50px'}}
                sx={{
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    py: 3, // Adjust as needed
                    textAlign: 'center',
                }}
            >
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4} container justifyContent="center" alignItems="center" >
                        <IconButton onClick={() => window.scrollTo(0, 0)} aria-label="Scroll to top">
                            <ExpandLessIcon style={{ fontSize: '30px' }} />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Signature />
                        <Typography variant="body2" color="text.secondary">
                            {'Copyright © '}
                            <Link color="inherit" href="https://apikounis.com/">
                                Anastasios Pikounis
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {/*{'.'}*/}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <IconButton href="https://github.com/pikounis" color="inherit" target="_blank">
                                <GitHubIcon style={{ fontSize: '30px' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton href="https://linkedin.com/in/pikounis" color="inherit" target="_blank">
                                <LinkedInIcon style={{ fontSize: '30px' }} />
                            </IconButton>
                        </Grid>
                        {/*<Grid item>*/}
                        {/*    <IconButton href="mailto:@gmail.com" color="inherit" target="_blank">*/}
                        {/*        <AlternateEmailIcon style={{ fontSize: '30px' }} />*/}
                        {/*    </IconButton>*/}
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                        {/*    <IconButton href="https://x.com/username" color="inherit" target="_blank">*/}
                        {/*        <XIcon style={{ fontSize: '30px' }} />*/}
                        {/*    </IconButton>*/}
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                        {/*    <ThemeMenu />*/}
                        {/*</Grid>*/}
                        <Grid item>
                            <IconButton href="https://open.spotify.com/user/sosat2" color="inherit" target="_blank">
                                <MusicNoteIcon style={{ fontSize: '30px' }} />
                            </IconButton>
                        </Grid>
                        {/*<Grid item>*/}
                        {/*    <IconButton href="https://keybase.io/pikounis" color="inherit" target="_blank">*/}
                        {/*        <MailLockIcon style={{ fontSize: '30px' }} />*/}
                        {/*    </IconButton>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Grid>
            </Box>
        </div>

    );
}

export default Footer;
