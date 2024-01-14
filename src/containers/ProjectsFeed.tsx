import { ProjectPreview } from '../components/ProjectPreview';
import { useState, useEffect } from 'react';
import { getProjects } from '../services/Github';

export const ProjectsFeed = (props) => {
    // Useeffect call to get projects from github
    const [projects, setProjects] = useState([{ name: "Loading...", description: "Loading...", link: "#" }]);

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
        })
    }, []);

    const projectsLoaded = projects.map((project, index) => {
        return <ProjectPreview key={index}
            name={project.name}
            description={project.description || "A very exciting project!"}
            link={project.link}
            stars={project.stars}
            forks={project.forks}
            issues={project.issues}
            tags={project.topics} />;
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-4">
                {props.isExpanded ? projectsLoaded : projectsLoaded.slice(0, 6)}
            </div>
        </>
    );
}
