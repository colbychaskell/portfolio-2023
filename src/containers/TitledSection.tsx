import { useState } from 'react';
import { ProjectsFeed } from './ProjectsFeed';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline';

export const TitledSection = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const seeMoreButton = (
        <div className="flex flex-col py-6 hover:cursor-pointer hover:text-blue-800 transition ease-in-out"
            onClick={() => {setExpanded(true)}}>
            <h2 className='text-lg font-semibold'>
                See More
            </h2>
            <ChevronDoubleDownIcon className="h-10 font-semibold" />
        </div>);

    const seeLessButton = (
        <div className="flex flex-col py-6 hover:cursor-pointer hover:text-blue-800 transition ease-in-out"
            onClick={() => {setExpanded(false)}}>
            <h2 className='text-lg font-semibold'>
                See Less
            </h2>
            <ChevronDoubleUpIcon className="h-10 font-semibold" />
        </div>);

    return (
        <section className="flex flex-col items-center overflow-hidden w-full bg-sky-50">
            <div className="flex flex-col items-start p-10 w-full">
                <h1 className="text-xl font-semibold text-left">{props.title}</h1>
                <h4 className="text-left">{props.subtitle}</h4>
            </div>
            <ProjectsFeed isExpanded={isExpanded} />
            {isExpanded ? seeLessButton : seeMoreButton}
        </section>
    );
}
