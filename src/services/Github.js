const ProjectsToFeature = ['Visual-CS', 'BetterBrews', 'QtChess', 'colbychaskell.github.io'];

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

    const filteredRepos =  repos.filter((repo) => {
        return ProjectsToFeature.includes(repo.name);
    });

    // This will sort the repos by stars + forks + issues, descending
    return filteredRepos.sort((a, b) => {
        return (b.stars + b.forks + b.issues) < (a.stars + a.forks + a.issues);
    });
}