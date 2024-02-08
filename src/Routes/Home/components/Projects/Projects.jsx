import React from "react";
import './Projects.css';
import Typography from '@mui/material/Typography';
import MediaCard from "./components/MediaCard/MediaCard.jsx";
import ProjectsGallery from "./components/ProjectsGallery/ProjectsGallery.jsx";

function Projects() {
    return (
        <div>
            <Typography variant="h2">Projects</Typography>
            <ProjectsGallery />
        </div>
    );
}

export default Projects;
