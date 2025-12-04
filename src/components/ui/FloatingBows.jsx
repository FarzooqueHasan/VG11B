import React from 'react';
import './FloatingBows.css';

const FloatingBows = () => {
    // Create an array of 15 bows with random positions and delays
    const bows = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
        opacity: 0.1 + Math.random() * 0.2,
        scale: 0.5 + Math.random() * 0.5,
    }));

    return (
        <div className="floating-bows-container">
            {bows.map((bow) => (
                <div
                    key={bow.id}
                    className="floating-bow"
                    style={{
                        left: bow.left,
                        animationDelay: bow.animationDelay,
                        animationDuration: bow.animationDuration,
                        opacity: bow.opacity,
                        transform: `scale(${bow.scale})`,
                    }}
                >
                    🎀
                </div>
            ))}
        </div>
    );
};

export default FloatingBows;
