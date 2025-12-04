import React, { useEffect, useState } from 'react';
import './LandingIntro.css';

const LandingIntro = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 1000);
        }, 3500); // Slightly longer to read text

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`landing-intro ${fadeOut ? 'fade-out' : ''}`}>
            <div className="landing-content">
                <img
                    src="/hello_kitty_waving.png"
                    alt="Hello Kitty Welcome"
                    className="landing-image"
                />
                <h1 className="landing-title-bold">
                    Welcome to<br />Vrinda's World!
                </h1>
            </div>
        </div>
    );
};

export default LandingIntro;
