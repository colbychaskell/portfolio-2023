import './SocialLink.css';

interface SocialLinkProps {
    link: string,
    icon: JSX.Element,
};

export const SocialLink = (props: SocialLinkProps) => {
    return (
        <a className="social-link" href={props.link} target="_blank" rel="noopener noreferrer">
            {props.icon}

        </a>
    );
}
