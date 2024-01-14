import './TopicTag.css';

export const TopicTag = (props: { tag: string }) => {
    return (
        <div className="topic-tag">
            <p>{props.tag}</p>
        </div>
    );
}
