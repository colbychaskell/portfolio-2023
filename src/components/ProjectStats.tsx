interface ProjectStatsProps {
    stars: number,
    forks: number,
    issues: number
};

export const ProjectStats = (props: ProjectStatsProps) => {
    const statsList = [
        {
            "name": "Stars",
            "value": props.stars,
        },
        {
            "name": "Forks",
            "value": props.forks,
        },
        {
            "name": "Issues",
            "value": props.issues,
        }
    ];

    return (
        <div className="flex flex-row justify-evenly bg-sky-100 py-1">
            {statsList.map((stat) => {
                return (<div key={stat.name} className="flex flex-row justify-around align-center">
                    <h2>{stat.value}</h2>
                    <p className="mx-1">{stat.name}</p>
                </div>);
            })}
        </div>
    );
}
