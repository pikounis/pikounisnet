import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DevIcon from '../DevIcon/DevIcon.jsx';
import IconButton from "@mui/material/IconButton";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function MediaCard({ title, description, image, websiteUrl, githubUrl, technologies }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '1rem' }}>
                    {description}
                </Typography>
                {/* Technology icons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {technologies && technologies.map((tech, index) => (
                        <DevIcon key={index} technology={tech} />
                    ))}
                </div>
            </CardContent>
            <CardActions>
                {websiteUrl && (
                    <IconButton href={websiteUrl} color="inherit" target="_blank">
                        <LinkIcon style={{ fontSize: '30px' }} />
                    </IconButton>
                    // <Button size="small" href={websiteUrl} target="_blank">Website</Button>
                )}
                {githubUrl && (
                    <IconButton href={websiteUrl} color="inherit" target="_blank">
                        <GitHubIcon style={{ fontSize: '30px' }} />
                    </IconButton>
                    // <Button size="small" href={githubUrl} target="_blank">GitHub</Button>
                )}
            </CardActions>
        </Card>
    );
}

export default MediaCard;
