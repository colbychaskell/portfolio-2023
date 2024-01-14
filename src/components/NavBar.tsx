import './NavBar.css';
import { SocialLink } from "./SocialLink";
import GitHubIcon from './img/github.png';
import LinkedInIcon from './img/linkedin.png';
import EmailIcon from './img/email.png';

interface SocialLink {
    link: string,
    icon: string,
    alt: string
};

const SocialLinks: SocialLink[] = [
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

type NavBarProps = {
    name: string,
};

export const NavBar = (props: NavBarProps) => {
    return (
        <nav className="title-bar">
            <h1 className="font-medium text-lg">{props.name}</h1>
            <div className="social-links flex flex-row">
                {SocialLinks.map((link: SocialLink, index: number) => {
                    return <SocialLink key={index} link={link.link} icon={link.icon} alt={link.alt} />;
                })}
            </div>
        </nav>
    );
}
