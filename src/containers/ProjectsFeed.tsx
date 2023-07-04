import React from 'react';
import { ProjectPreview } from '../components/ProjectPreview';
import { useState, useEffect } from 'react';
import { getProjects } from '../services/Github';
import './ProjectsFeed.css';

export const ProjectsFeed = (props) => {
    // Useeffect call to get projects from github
    const [ projects, setProjects ] = useState([{name: "Loading...", description: "Loading...", link: "#"}]);

    useEffect( () => {
        getProjects().then((data) => {
            setProjects(data);
    })}, []);

    return (  
        <div className="projects-feed">
            { projects.map((project, index) => {
                const description = project.description == null ? "A very exciting project!" : project.description;
                return  <ProjectPreview key={index} 
                                        name={project.name} 
                                        description={description} 
                                        link={project.link} 
                                        stars={project.stars} 
                                        forks={project.forks} 
                                        issues={project.issues}
                                        tags={project.topics} />;
            }) }
        </div>
    );
}