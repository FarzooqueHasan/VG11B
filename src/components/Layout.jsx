import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';
import CustomCursor from './ui/CustomCursor';
import FloatingBows from './ui/FloatingBows';
import ClickSparkles from './ui/ClickSparkles';
import HelloKittyGreeting from './HelloKittyGreeting';
import './Layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/academics', label: 'Academics' },
        { path: '/language', label: 'Language' },
        { path: '/social-service', label: 'Social Service' },
        { path: '/research', label: 'Research' },
        { path: '/insights', label: 'Insights' },
        { path: '/resources', label: 'Resources' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="layout">
            <CustomCursor />
            <FloatingBows />
            <ClickSparkles />
            <HelloKittyGreeting />

            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">VG</span>
                        <span className="logo-bow">🎀</span>
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-section">
                        <h3>Vrinda Goyal <Heart size={16} className="inline-heart" /></h3>
                        <p>Language Enthusiast, Social Service Advocate, Lifelong Learner.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com/vrindagoyal" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/vrinda-goyal-02345935b/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/lingualoom_learning/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                            <a href="mailto:goyalvrinda71@gmail.com"><Mail size={20} /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <p>&copy; {new Date().getFullYear()} Vrinda Goyal. Made with 🎀 by TheWhales India</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
