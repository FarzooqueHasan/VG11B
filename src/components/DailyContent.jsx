import React, { useState, useEffect } from 'react';
import './DailyContent.css';

const quotes = [
    {
        text: "Every language you learn opens a new window to the world.",
        author: "Vrinda Goyal"
    },
    {
        text: "Service to others is the rent you pay for your room here on earth.",
        author: "Muhammad Ali"
    },
    {
        text: "The beautiful thing about learning is that no one can take it away from you.",
        author: "B.B. King"
    },
    {
        text: "In a world where you can be anything, be kind.",
        author: "Unknown"
    }
];

const DailyContent = () => {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="daily-content glass">
            <div className="daily-icon">💭</div>
            <blockquote className="daily-quote">
                <p>"{quotes[currentQuote].text}"</p>
                <footer>— {quotes[currentQuote].author}</footer>
            </blockquote>
            <div className="quote-indicators">
                {quotes.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentQuote ? 'active' : ''}`}
                        onClick={() => setCurrentQuote(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DailyContent;
