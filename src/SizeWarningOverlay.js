// SizeWarningOverlay.js
import React from 'react';
import './SizeWarningOverlay.scss';

const SizeWarningOverlay = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="overlay">
            <div className="overlay-message">
                Please resize your browser window to a larger width.
            </div>
        </div>
    );
};

export default SizeWarningOverlay;
