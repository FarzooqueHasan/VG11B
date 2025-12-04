import React from 'react';
import './AnimatedIcon.css';

const AnimatedIcon = ({ icon: Icon, size = 24, className = '', ...props }) => {
    return (
        <div className={`animated-icon ${className}`} {...props}>
            <Icon size={size} />
        </div>
    );
};

export default AnimatedIcon;
