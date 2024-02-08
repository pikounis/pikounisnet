import * as React from 'react';
import MediaCard from '../MediaCard/MediaCard.jsx';
import './ProjectsGallery.css';
import projects from './projects.json'; // Adjust the path as necessary

function ProjectsGallery() {
    return (
        <div className="projectsGallery">
            {projects.map((project) => (
                <MediaCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    websiteUrl={project.websiteUrl}
                    githubUrl={project.githubUrl}
                />
            ))}
        </div>
    );
}

export default ProjectsGallery;
