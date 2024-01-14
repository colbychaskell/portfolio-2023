type Project = {
    name: string,
    description: string,
    html_url: string,
    stargazers_count: number,
    forks: number,
    open_issues: number,
    topics: string[]
}

export interface ProjectInfo {
    name: string,
    description: string,
    link: string,
    stars: number,
    forks: number,
    issues: number,
    topics: string[]
};

export const getProjects = async (): Promise<ProjectInfo[]> => {
    const response = await fetch('https://api.github.com/users/colbychaskell/repos');
    const data = await response.json();

    const repos =  data.map((project: Project) => {
        return {
            name: project.name,
            description: project.description,
            link: project.html_url,
            stars: project.stargazers_count,
            forks: project.forks,
            issues: project.open_issues,
            topics: project.topics
        };
    });

    // This will sort the repos by stars + forks + issues, descending
    return repos.sort((a: ProjectInfo, b: ProjectInfo) => {
        return (b.stars + b.forks + b.issues) - (a.stars + a.forks + a.issues);
    });
}
