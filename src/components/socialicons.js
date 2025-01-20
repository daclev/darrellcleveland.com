import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./components.css"

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://github.com/daclev" target="_blank" rel="noopener noreferrer" className="github-icon" >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/darrell-cleveland-12a603ab" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:dscleveland08@gmail.com" className="email-icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
        </div>
    );
};

export default SocialIcons;
