import React from 'react';
import './IOSPreview.css';
import Tilt from 'react-parallax-tilt';


export const IOSPreview = (props) => {
    return (
        <div className="ios-preview-screen">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <a href="https://apps.apple.com/us/app/betterbrews/id1585521602" target="_blank" rel="noopener noreferrer">
                    <img src={props.image} alt={props.alt} />
                </a>
            </Tilt>
        </div>
    );
}