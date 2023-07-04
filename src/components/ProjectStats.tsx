import React from 'react';
import './ProjectStats.css';

export const ProjectStats = (props) => {
    return (
        <div className="project-stats">
            <div className="stat">
                <h2>{props.stars}</h2>
                <p>Stars</p>
            </div>
            <div className="stat">
                <h2>{props.forks}</h2>
                <p>Forks</p>
            </div>
            <div className="stat">
                <h2>{props.issues}</h2>
                <p>Issues</p>
            </div>
        </div>
    );
}