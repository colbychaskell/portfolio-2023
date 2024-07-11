export interface Project {
  name: string;
  description: string;
  full_name: string;
  fork: boolean;
  html_url: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  parent: Project;
  topics: string[];
}

async function getProjectDetails(request: RequestInfo): Promise<Project> {
  const response = await fetch(request);
  const details = (await response.json()) as Project;

  // If this is not a fork repo, data is correct
  if (!details.fork) {
    return details;
  }

  return {
    ...details,
    html_url: details.parent.html_url,
    stargazers_count: details.parent.stargazers_count,
    open_issues: details.parent.open_issues,
    forks: details.parent.forks,
  };
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    "https://api.github.com/users/colbychaskell/repos",
  );
  const data = await response.json();

  const repos: Project[] = await Promise.all(
    data.map(async (project: Project) => {
      return await getProjectDetails(
        `https://api.github.com/repos/${project.full_name}`,
      );
    }),
  );

  // This will sort the repos by stars + forks + issues, descending
  return repos.sort((a: Project, b: Project) => {
    return (
      b.stargazers_count +
      b.forks +
      b.open_issues -
      (a.stargazers_count + a.forks + a.open_issues)
    );
  });
};
