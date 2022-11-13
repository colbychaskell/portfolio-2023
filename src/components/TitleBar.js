import React from "react";
import './TitleBar.css';
import { SocialLink } from "./SocialLink";
import GitHubIcon from './img/github.png';
import LinkedInIcon from './img/linkedin.png';
import EmailIcon from './img/email.png';

const SocialLinks = [  
    {
        link: "https://www.github.com/colbychaskell",
        icon: GitHubIcon,
        alt: "GitHub"
    },
    {
        link: "https://www.linkedin.com/in/colbyhaskell",
        icon: LinkedInIcon,
        alt: "LinkedIn"
    },
    {
        link: "mailto:cchaskel@usc.edu",
        icon: EmailIcon,
        alt: "Email"
    }
];

export const TitleBar = (props) => {
    return (
        <div className="title-bar">
            <h1 className="title-text">{props.name}</h1>   
            <div className="social-links">
                {SocialLinks.map((link, index) => {
                    return <SocialLink key={index} link={link.link} icon={link.icon} alt={link.alt} />  ;
                })}
            </div>
        </div>
    );
}