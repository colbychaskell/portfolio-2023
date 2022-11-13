import React from 'react';
import PropTypes from 'prop-types';
import './SocialLink.css';

export const SocialLink = (props) => {
    return (
        <>
            <a className="social-link" href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.icon} alt={props.alt} />
            </a>
        </>
    );
}

SocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

