import { StarIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface ProjectStatsProps {
    stars: number,
    forks: number,
    issues: number
};

export const ProjectStats = (props: ProjectStatsProps) => {
    const statsList = [
        {
            "name": "stars",
            "icon": <StarIcon className="h-5 w-5" />,
            "value": props.stars,
        },
        {
            "name": "forks",
            "icon": <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 256 256" id="git-fork">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="188" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="188" cy="67.998" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="68" cy="67.998" r="28" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M68,95.99756v8.002a24,24,0,0,0,24.00049,24l72-.00146a24,24,0,0,0,23.99951-24V95.99756"></path>
                <line x1="128.002" x2="128" y1="128" y2="160" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </svg>,
            "value": props.forks,
        },
        {
            "name": "issues",
            "icon": <ExclamationCircleIcon className="h-5 w-5" />,
            "value": props.issues,
        }
    ];


    return (
        <div className="flex flex-row items-center justify-evenly bg-sky-100 py-1">
            {statsList.map((stat) => {
                return (
                    <div key={stat.name} className="flex flex-row justify-around align-center">
                        <div className="flex flex-col justify-center mx-1">
                            {stat.icon}
                        </div>
                        <h2>{(stat.value).toLocaleString(undefined)}</h2>
                    </div>);
            })}
        </div>
    );
}
