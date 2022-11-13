import React from 'react';
import './ProjectFeatureSection.css';
import BBHome from './img/BetterBrews/bb.png';
import BBLogEntry from './img/BetterBrews/bb_log_entry.png';
import BBLog from './img/BetterBrews/bb_log.png';
import { IOSPreview } from '../components/IOSPreview';

export const ProjectFeatureSection = (props) => {
    return (
        <>
        <div className="project-feature-section">
            <h1>BetterBrews</h1>
            <div className="preview-row">
                <IOSPreview className="preview" image={BBHome} alt="BetterBrews Home Screen" />
                <IOSPreview className="preview" image={BBLogEntry} alt="BetterBrews Log Entry Screen" />
                <IOSPreview className="preview" image={BBLog} alt="BetterBrews Log Screen" />
            </div>
        </div>
        </>
    );
};