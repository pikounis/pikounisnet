import React from 'react';
import { Box, Typography, Link, Grid, useTheme } from '@mui/material';
import Signature from './components/Signature/Signature.jsx';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import './Footer.css';

function Footer() {
    const theme = useTheme();

    return (
        <Box
            className="footer"
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
                        <Link color="inherit" href="https://your-website.com/">
                            Anastasios Pikounis
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <Link href="https://github.com/pikounis" color="inherit" target="_blank">
                            <GitHubIcon style={{ fontSize: '30px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://linkedin.com/in/pikounis" color="inherit" target="_blank">
                            <LinkedInIcon style={{ fontSize: '30px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="mailto:anastasiospikounis@gmail.com" color="inherit" target="_blank">
                            <AlternateEmailIcon style={{ fontSize: '30px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://x.com/pikounaki" color="inherit" target="_blank">
                            <XIcon style={{ fontSize: '30px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://open.spotify.com/user/sosat2" color="inherit" target="_blank">
                            <MusicNoteIcon style={{ fontSize: '30px' }} />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
