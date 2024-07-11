import './ProjectFeatureSection.css';
import { IOSPreview } from '../components/IOSPreview';

export const ProjectFeatureSection = () => {
    return (
        <>
            <div className="project-feature-section">
                <h1 className="text-fg_day text-3xl font-extrabold">BetterBrews</h1>

                <div className="preview-row">
                    <IOSPreview image="/better-brews.png" alt="BetterBrews Home Screen" />
                    <IOSPreview image="/better-brews-log-entry.png" alt="BetterBrews Log Entry Screen" />
                    <IOSPreview image="/better-brews-log.png" alt="BetterBrews Log Screen" />
                </div>
            </div>
        </>
    );
};
