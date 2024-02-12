import * as React from 'react';
import MediaCard from '../MediaCard/MediaCard.jsx';
import './ProjectsGallery.css';
import projects from './projects.json';
import { useTranslation } from 'react-i18next';

function ProjectsGallery() {
    const { i18n } = useTranslation();

    return (
        <div className="projectsGallery">
            {projects.map((project) => {
                const currentLang = i18n.language;
                const title = project.title[currentLang] || project.title.uk;
                const description = project.description[currentLang] || project.description.uk; // Fallback to English if the current language description is not available

                // Ensure you're passing the technologies array to MediaCard
                return (
                    <MediaCard
                        key={project.id}
                        title={title}
                        description={description}
                        image={project.image}
                        websiteUrl={project.websiteUrl}
                        githubUrl={project.githubUrl}
                        technologies={project.technologies} // Pass this prop to MediaCard
                    />
                );
            })}
        </div>
    );
}

export default ProjectsGallery;
