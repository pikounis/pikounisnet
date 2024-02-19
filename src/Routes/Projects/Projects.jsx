import React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography';
import AllProjects from '../Home/components/AllProjects/AllProjects.jsx';

function Projects() {
    return (
        <div>
            <div className="project-container">
                <AllProjects />
            </div>

        </div>
    );
}

export default Projects;
