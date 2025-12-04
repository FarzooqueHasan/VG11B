import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;

        const updatePosition = (e) => {
            if (dot && outline) {
                const x = e.clientX;
                const y = e.clientY;

                // Include the centering translate in the transform
                // This fixes the issue where the cursor was top-left aligned
                dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
                outline.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
        };

        const handleMouseOver = (e) => {
            if (outline && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button'))) {
                outline.classList.add('cursor-hover');
            } else if (outline) {
                outline.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={outlineRef} className="cursor-outline" />
        </>
    );
};

export default CustomCursor;
