import './IOSPreview.css';
import Tilt from 'react-parallax-tilt';

interface IOSPreviewProps {
    image: string,
    alt: string
};

export const IOSPreview = (props: IOSPreviewProps) => {
    return (
        <div className="ios-preview-screen ">
            <a href="https://github.com/BetterBrews/BetterBrews-IOS" target="_blank" rel="noopener noreferrer">
                <img className="border-bg" src={props.image} alt={props.alt} />
            </a>
        </div>
    );
}
