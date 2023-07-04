import React from "react";
import './TopicTag.css';

export const TopicTag = (props) => {
    return (
        <div className="topic-tag">
            <p>{props.tag}</p>
        </div>
    );
}