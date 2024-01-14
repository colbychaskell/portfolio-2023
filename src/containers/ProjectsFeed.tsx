import { ProjectPreview } from '../components/ProjectPreview';
import { useState, useEffect } from 'react';
import { getProjects } from '../services/Github';
import type { ProjectInfo } from '../services/Github';

type ProjectsFeedProps = {
    isExpanded: boolean
};

export const ProjectsFeed = (props: ProjectsFeedProps) => {
    // Useeffect call to get projects from github
    const [projects, setProjects] = useState<ProjectInfo[]>([]);

    useEffect(() => {
        getProjects().then((data: ProjectInfo[]) => {
            setProjects(data);
        })
    }, []);

    const projectsLoaded = projects.map((project: ProjectInfo, index: number) => {
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
