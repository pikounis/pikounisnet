import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard({ title, description, image, websiteUrl, githubUrl }) {
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
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {websiteUrl && (
                    <Button size="small" href={websiteUrl} target="_blank">Website</Button>
                )}
                <Button size="small" href={githubUrl} target="_blank">GitHub</Button>
            </CardActions>
        </Card>
    );
}


export default MediaCard;