import React, { useState, useEffect } from 'react';
import './HelloKittyGreeting.css';

const HelloKittyGreeting = () => {
    const [visible, setVisible] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [removed, setRemoved] = useState(false);

    useEffect(() => {
        // Show after a short delay
        const showTimer = setTimeout(() => {
            setVisible(true);

            // Show speech bubble shortly after kitty appears
            setTimeout(() => {
                setShowBubble(true);
            }, 1000);

            // Hide everything after 8 seconds
            setTimeout(() => {
                setVisible(false);
                setShowBubble(false);
                // Remove from DOM after fade out
                setTimeout(() => {
                    setRemoved(true);
                }, 1000);
            }, 8000);
        }, 2000);

        return () => clearTimeout(showTimer);
    }, []);

    if (removed) return null;

    return (
        <div className={`hello-kitty-greeting ${visible ? 'visible' : ''}`}>
            <div className={`speech-bubble ${showBubble ? 'visible' : ''}`}>
                Hello! Welcome to my world! 🎀
            </div>
            <img
                src="/hello_kitty_waving.png"
                alt="Hello Kitty Waving"
                className="hello-kitty-img"
            />
        </div>
    );
};

export default HelloKittyGreeting;
