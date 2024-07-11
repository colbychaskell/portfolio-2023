import { ProjectPreview } from '../components/ProjectPreview';
import { useState, useEffect } from 'react';
import { getProjects } from '../services/Github';
import type { Project } from '../services/Github';

type ProjectsFeedProps = {
    isExpanded: boolean
};

export const ProjectsFeed = (props: ProjectsFeedProps) => {
    // Useeffect call to get projects from github
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
        }

        fetchProjects().catch(console.error);
    }, []);

    const createPreviews = (projects: Project[]): JSX.Element[] => {
        if (projects.length == 0) {
            return [<ProjectPreview name="Fetching Projects..."
                description="Waiting for GitHub API response..."
                link=""
                stars={0}
                forks={0}
                issues={0}
                tags={[]} />];

        }

        return projects.map((project: Project, index: number) => {
            if (!project) {
                return <ProjectPreview name="Fetching Projects..."
                    description=""
                    link=""
                    stars={0}
                    forks={0}
                    issues={0}
                    tags={[]} />;
            }

            return <ProjectPreview key={index}
                name={project.name}
                description={project.description || "A very exciting project!"}
                link={project.html_url}
                stars={project.stargazers_count}
                forks={project.forks}
                issues={project.open_issues}
                tags={project.topics} />;
        });
    }

    const projectPreviews = createPreviews(projects);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-4">
                {props.isExpanded ? projectPreviews : projectPreviews.slice(0, 6)}
            </div>
        </>
    );
}
