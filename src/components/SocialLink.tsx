import './SocialLink.css';

interface SocialLinkProps {
    link: string,
    icon: string,
    alt: string
};

export const SocialLink = (props: SocialLinkProps) => {
    return (
        <a className="social-link" href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.icon} alt={props.alt} />
        </a>
    );
}
