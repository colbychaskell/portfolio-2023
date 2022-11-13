import React from 'react';
import './TitledSection.css';

export const TitledSection = (props) => {
    return (
        <section className="titled-section" style={{"background-color": props.backgroundColor}}>
            <div className="section-header">
                <div className="section-title">
                    <h1>{ props.title }</h1>
                    <h4>{ props.subtitle }</h4>
                </div>
            </div>
            <div className="section-content">
                { props.children }
            </div>
        </section>
    );
}