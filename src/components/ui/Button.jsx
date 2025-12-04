import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, href, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
    const baseClass = `btn btn-${variant} btn-${size}`;
    const classes = `${baseClass} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
