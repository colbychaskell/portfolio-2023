export const getProjects = async () => {
    const response = await fetch('https://api.github.com/users/colbychaskell/repos');
    const data = await response.json();

    const repos =  data.map((project) => {
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
    return repos.sort((a, b) => {
        return (b.stars + b.forks + b.issues) - (a.stars + a.forks + a.issues);
    });
}