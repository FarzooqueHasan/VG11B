import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Instagram, Plane, AlertTriangle } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const [altitude, setAltitude] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
            // Simulate altitude based on scroll (35000 + scroll * 1.5)
            // Simulate altitude based on scroll (Descending from 45000ft)
            setAltitude(Math.max(0, Math.floor(45000 - window.scrollY * 15)));
        };

        const timer = setInterval(() => setTime(new Date()), 1000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, [scrolled]);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const navLinks = [
        { path: '/', label: 'MISSION CONTROL' },
        { path: '/academics', label: 'FLIGHT LOGS' },
        { path: '/language', label: 'COMMS' },
        { path: '/social-service', label: 'RESCUE OPS' },
        { path: '/insights', label: 'INTEL' },
        { path: '/contact', label: 'ESTABLISH CONTACT' }
    ];

    return (
        <div className="layout">
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <Plane className="logo-icon" size={28} />
                        <span className="logo-text">VG-11B <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)' }}>PILOT</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <main className="main-content">
                <div className="container" style={{ paddingTop: '20px' }}>
                    {/* Top HUD moved to sticky footer, keeping simple clearance here */}
                </div>
                {children}
            </main>

            {/* Mission Status Bar (Sticky Footer) */}
            <div className="mission-status-bar">
                <div className="status-item">
                    <span className="status-label">ZULU TIME:</span>
                    <span className="status-value">{formatTime(time)}</span>
                </div>
                <div className="status-item">
                    <span className="status-label">COORDS:</span>
                    <span className="status-value">28.61° N, 77.20° E</span>
                </div>
                <div className="status-item">
                    <span className="status-label">ALTITUDE:</span>
                    <span className="status-value">{altitude.toLocaleString()} FT</span>
                </div>
                <div className="status-item status-alert-item">
                    <span className="status-label">SYS.STATUS:</span>
                    <span className="status-value status-ok">NOMINAL</span>
                </div>
            </div>

            <footer className="footer">
                <div className="container footer-content panel">
                    <div className="footer-section">
                        <h3>PILOT: Vrinda Goyal</h3>
                        <p>Language Enthusiast // Social Advocate // Lifelong Learner</p>
                    </div>
                    <div className="footer-section social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
                        <a href="mailto:goyalvrinda71@gmail.com" className="social-link"><Mail size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                    </div>
                    <div className="footer-section">
                        <p>&copy; {new Date().getFullYear()} VG-11B. ALL RIGHTS RESERVED.</p>
                        <Link to="/admin" style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textDecoration: 'none' }}>WARNING: AUTHORIZED PERSONNEL ONLY</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
