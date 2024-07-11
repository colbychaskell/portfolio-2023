import './TopicTag.css';

export const TopicTag = (props: { tag: string }) => {
    return (
        <div className="topic-tag bg-bg text-orange">
            <p>{props.tag}</p>
        </div>
    );
}
