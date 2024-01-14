type Project = {
    name: string,
    description: string,
    full_name: string,
    html_url: string,
    stargazers_count: number,
    forks: number,
    open_issues: number,
    topics: string[]
};

export interface ProjectInfo {
    name: string,
    description: string,
    link: string,
    stars: number,
    forks: number,
    issues: number,
    topics: string[]
};


interface ProjectDetails {
    name: string,
    description: string,
    full_name: string
    fork: boolean,
    html_url: string,
    stargazers_count: number
    forks: number,
    open_issues: number,
    parent: ProjectDetails,
    topics: string[]
}

async function getProjectDetails(request: RequestInfo): Promise<ProjectInfo> {
    const response = await fetch(request);
    const details = await response.json() as ProjectDetails;

    const info: ProjectInfo = {
        name: details.name,
        description: details.description,
        link: details.html_url,
        stars: details.stargazers_count,
        forks: details.forks,
        issues: details.open_issues,
        topics: details.topics
    }

    // If this is not a fork repo, data is correct
    if (!details.fork) {
        return info;
    }

    return ({
        ...info,
        link: details.parent.html_url,
        stars: details.parent.stargazers_count,
        issues: details.parent.open_issues,
        forks: details.parent.forks
    });
}

export const getProjects = async (): Promise<ProjectInfo[]> => {
    const response = await fetch('https://api.github.com/users/colbychaskell/repos');
    const data = await response.json();

    const repos: ProjectInfo[] = await Promise.all(data.map(async (project: Project) => {
        return await getProjectDetails(`https://api.github.com/repos/${project.full_name}`);
    }));

    // This will sort the repos by stars + forks + issues, descending
    return repos.sort((a: ProjectInfo, b: ProjectInfo) => {
        return (b.stars + b.forks + b.issues) - (a.stars + a.forks + a.issues);
    });
}
