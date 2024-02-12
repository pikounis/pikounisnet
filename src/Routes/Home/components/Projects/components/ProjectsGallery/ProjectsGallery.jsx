import * as React from 'react';
import MediaCard from '../MediaCard/MediaCard.jsx';
import './ProjectsGallery.css';
import projects from './projects.json';
import { useTranslation } from 'react-i18next';

function ProjectsGallery() {
    const { i18n } = useTranslation(); // Use i18n to access the current language

    return (
        <div className="projectsGallery">
            {projects.map((project) => {
                // Determine the current language and select the corresponding description
                const currentLang = i18n.language;
                const description = project.description[currentLang] || project.description.uk; // Fallback to English if the current language description is not available

                return (
                    <MediaCard
                        key={project.id}
                        title={project.title}
                        description={description} // Pass the selected description directly
                        image={project.image}
                        websiteUrl={project.websiteUrl}
                        githubUrl={project.githubUrl}
                    />
                );
            })}
        </div>
    );
}

export default ProjectsGallery;
