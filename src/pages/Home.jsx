import React from 'react';
import { ArrowRight, BookOpen, Languages, Heart, Lightbulb, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedIcon from '../components/ui/AnimatedIcon';
import DailyContent from '../components/DailyContent';
import Quiz from '../components/Quiz';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <p className="hero-greeting">Hi, I'm</p>
                        <h1 className="hero-title">Vrinda Goyal.</h1>
                        <h2 className="hero-subtitle">
                            Exploring the <span className="text-gradient">Beauty</span> of Languages & Service.
                        </h2>
                        <p className="hero-description">
                            Welcome to my digital space where I share my journey in Language Learning, Social Service,
                            and Academic Excellence. Building connections through words and making a difference through action.
                        </p>
                        <div className="hero-actions">
                            <Button to="/language" variant="primary" size="lg">
                                Explore Languages <ArrowRight size={20} />
                            </Button>
                            <Button to="/social-service" variant="outline" size="lg">
                                Social Service
                            </Button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="profile-wrapper">
                            <div className="profile-glow"></div>
                            <div className="profile-placeholder">
                                <span className="profile-emoji">🎀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-grid">
                    <StatItem number="5+" label="Languages Learning" />
                    <StatItem number="100+" label="Hours of Service" />
                    <StatItem number="15+" label="Projects Completed" />
                    <StatItem number="∞" label="Passion" />
                </div>
            </section>

            {/* Daily Insights */}
            <section className="section daily-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="text-gradient">Daily</span> Inspiration
                        </h2>
                        <div className="section-line"></div>
                    </div>
                    <DailyContent />
                </div>
            </section>

            {/* What I Do */}
            <section className="section features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            What I <span className="text-gradient">Do</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="features-grid">
                        <FeatureCard
                            icon={Languages}
                            title="Language"
                            description="Exploring the beauty of different languages and cultures around the world."
                            link="/language"
                        />
                        <FeatureCard
                            icon={Heart}
                            title="Social Service"
                            description="Making a positive impact through community service and volunteer work."
                            link="/social-service"
                        />
                        <FeatureCard
                            icon={BookOpen}
                            title="Academics"
                            description="Deep dives into my academic pursuits and scholarly achievements."
                            link="/academics"
                        />
                        <FeatureCard
                            icon={Lightbulb}
                            title="Insights"
                            description="Thoughts on learning, growth, and making a difference in the world."
                            link="/insights"
                        />
                    </div>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="section quiz-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Test Your <span className="text-gradient">Knowledge</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>
                    <Quiz />
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section cta-section">
                <div className="container cta-container">
                    <h2>Let's Connect!</h2>
                    <p>Whether you have a question or just want to say hi, I'd love to hear from you!</p>
                    <Button to="/contact" variant="primary" size="lg">
                        Say Hello <Mail size={20} />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, link }) => (
    <Link to={link} className="feature-link">
        <Card className="feature-card">
            <AnimatedIcon icon={icon} size={32} className="feature-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="feature-arrow">
                <ArrowRight size={20} />
            </div>
        </Card>
    </Link>
);

const StatItem = ({ number, label }) => (
    <div className="stat-item">
        <span className="stat-number">{number}</span>
        <span className="stat-label">{label}</span>
    </div>
);

export default Home;
