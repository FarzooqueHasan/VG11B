import React, { useEffect, useState } from 'react';
import './IntroAnimation.css';

const IntroAnimation = ({ onComplete }) => {
    const [bootLogs, setBootLogs] = useState([]);
    const [showHud, setShowHud] = useState(false);
    const [pilotDetected, setPilotDetected] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const logs = [
            "INITIALIZING VG-11B SYSTEMS...",
            "LOADING CORE MODULES...",
            "CHECKING AVIONICS...",
            "RADAR: ONLINE",
            "WEAPONS: STANDBY",
            "ENGINES: SPOOLING UP...",
            "ALL SYSTEMS NOMINAL."
        ];

        let delay = 500;
        logs.forEach((log, index) => {
            setTimeout(() => {
                setBootLogs(prev => [...prev, log]);
            }, delay);
            delay += Math.random() * 500 + 300;
        });

        setTimeout(() => setShowHud(true), 3500);

        setTimeout(() => setPilotDetected(true), 4500);

        const totalDuration = 6000;
        const exitTimeout = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
        }, totalDuration);

        return () => clearTimeout(exitTimeout);
    }, [onComplete]);

    return (
        <div className={`intro-container ${isExiting ? 'exiting' : ''}`}>
            <div className="noise-overlay"></div>
            <div className="scanline"></div>

            {!showHud && (
                <div className="boot-terminal">
                    {bootLogs.map((log, i) => (
                        <div key={i} className="log-line">
                            <span className="prompt">{'>'}</span> {log}
                        </div>
                    ))}
                    <div className="cursor-blink">_</div>
                </div>
            )}

            {showHud && (
                <div className="hud-layer">
                    <div className="hud-grid"></div>
                    <div className="hud-elements">
                        <div className="horizon-line"></div>
                        <div className="center-reticle"></div>
                        {pilotDetected && (
                            <h1 className="pilot-msg">
                                <span className="alert-icon">⚠️</span> PILOT DETECTED
                            </h1>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IntroAnimation;
