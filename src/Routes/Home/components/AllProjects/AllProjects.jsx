import React from "react";
import './AllProjects.css';
import Typography from '@mui/material/Typography';
import MediaCard from "./components/MediaCard/MediaCard.jsx";
import ProjectsGallery from "./components/ProjectsGallery/ProjectsGallery.jsx";

function AllProjects() {
    return (
        <div>
            <Typography variant="h2" className="projects-title" >Projects</Typography>
            <ProjectsGallery />
        </div>
    );
}

export default AllProjects;
