import React from 'react';
import './ProjectPreview.css';
import { ProjectStats } from './ProjectStats';
import { TopicTag } from './TopicTag';

export const ProjectPreview = (props) => {
    const { name = "Untitled Project",
            description = "A very exciting project!", 
            link="https://www.github.com/colbychaskell", 
            stars=0, 
            forks=0, 
            issues=0,
            tags = []
        } = props;

    const handleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="project-preview" onClick={handleClick}>
            <div className="card-content">
                <div className="project-info">                
                    <h1>{name}</h1>
                    <a href={link} target="_blank" rel="noreferrer"><p>{description}</p></a>
                </div>

                <ul className="tag-list">
                    {tags.map((tag, index) => {
                        return <li key={index}><TopicTag tag={tag} /></li>
                    })}
                </ul>
            </div>
            {/* TODO: Add topic tags here */}
            <ProjectStats stars={stars} forks={forks} issues={issues} />
        </div>
    );
}