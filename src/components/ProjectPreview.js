import React from 'react';
import './ProjectPreview.css';
import { ProjectStats } from './ProjectStats';

export const ProjectPreview = (props) => {
    const { name = "Untitled Project", description = "A very exciting project!", link="https://www.github.com/colbychaskell", stars=0, forks=0, issues=0} = props;

    return (
        <div className="project-preview">
            <div className="project-info">
                <h1>{name}</h1>
                <p>{description}</p>
                {/* <a href={link}>View Project</a> */}
            </div>
            <ProjectStats stars={stars} forks={forks} issues={issues} />
        </div>
    );
}