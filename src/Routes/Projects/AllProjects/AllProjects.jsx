import React from "react";
import './AllProjects.css';
import Typography from '@mui/material/Typography';
import MediaCard from "./components/MediaCard/MediaCard.jsx";
import ProjectsGallery from "./components/ProjectsGallery/ProjectsGallery.jsx";
import {useTranslation} from "react-i18next";

function AllProjects() {
    const { t } = useTranslation();
    return (
        <div>
            <Typography variant="h2" className="projects-title" >{t('projects')}</Typography>
            <ProjectsGallery />
        </div>
    );
}

export default AllProjects;
