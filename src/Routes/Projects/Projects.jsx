import React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography';
import AllProjects from '../Home/components/AllProjects/AllProjects.jsx';

function Projects() {
    return (
            <div className="project-container">
                <AllProjects />
            </div>
    );
}

export default Projects;
