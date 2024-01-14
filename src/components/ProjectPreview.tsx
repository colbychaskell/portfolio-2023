import { ProjectStats } from './ProjectStats';
import { TopicTag } from './TopicTag';

type ProjectPreviewProps = {
    name: string,
    description: string,
    link: string,
    stars: number,
    forks: number,
    issues: number,
    tags: string[]
};


export const ProjectPreview = ({
    name = "Untitled Project",
    description = "A very exciting project!",
    link = "https://www.github.com/colbychaskell",
    stars = 0,
    forks = 0,
    issues = 0,
    tags = []
}: ProjectPreviewProps) => {
    const projectTitle = name.replaceAll(new RegExp("[-_]", "g"), " ");

    const handleClick = () => {
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="cursor-pointer flex flex-col justify-between w-4/5 xl:w-4/6 h-64 bg-white mx-4 my-5 rounded-xl overflow-hidden hover:shadow-xl" onClick={handleClick}>
            <div className="flex flex-col justify-between px-5 py-3 h-full overflow-hidden">
                <div className="">
                    <h1 className="text-xl font-semibold m-1">{projectTitle}</h1>
                    <p className="text-clip">
                        {description}
                    </p>
                </div>

                <ul className="my-1 mx-5 flex flex-row justify-center flex-wrap">
                    {tags.map((tag: string, index: number) => {
                        return <li key={index}><TopicTag tag={tag} /></li>
                    })}
                </ul>
            </div>
            <ProjectStats stars={stars} forks={forks} issues={issues} />
        </div>
    );
}
