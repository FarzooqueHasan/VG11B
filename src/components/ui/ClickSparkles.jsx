import React, { useEffect } from 'react';
import './ClickSparkles.css';

const ClickSparkles = () => {
    useEffect(() => {
        const createSparkle = (e) => {
            const sparkle = document.createElement('div');
            sparkle.className = 'click-sparkle';
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;

            // Randomize sparkle properties
            const size = 10 + Math.random() * 20;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

            // Random sparkle shape (star or heart)
            sparkle.innerHTML = Math.random() > 0.5 ? '✨' : '💖';

            document.body.appendChild(sparkle);

            // Remove after animation
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        };

        window.addEventListener('click', createSparkle);

        return () => {
            window.removeEventListener('click', createSparkle);
        };
    }, []);

    return null; // This component doesn't render anything itself
};

export default ClickSparkles;
