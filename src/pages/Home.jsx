import React from 'react';
import { ArrowRight, BookOpen, Languages, Heart, Lightbulb, Mail, Plane, Radio, Shield } from 'lucide-react';
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
                        <p className="hero-greeting"><span className="status-indicator"></span> PILOT ID: VG-11B</p>
                        <h1 className="hero-title">VRINDA GOYAL</h1>
                        <h2 className="hero-subtitle">
                            NAVIGATING <span className="text-gradient">LANGUAGES</span> & <span className="text-gradient">SERVICE</span>
                        </h2>
                        <p className="hero-description">
                            Flight Log: Recording journey in Linguistics, Social Impact, and Academic Excellence.
                            Mission: Build connections and deploy positive change.
                        </p>
                        <div className="hero-actions">
                            <Button to="/language" variant="primary" size="lg">
                                OPEN COMMS <Radio size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                            <Button to="/social-service" variant="outline" size="lg">
                                SERVICE MISSION
                            </Button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="profile-wrapper">
                            <div className="profile-placeholder">
                                {/* CSS Radar Animation Effect - No Emoji */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-grid">
                    <StatItem number="05" label="LANGUAGES LOGGED" />
                    <StatItem number="100+" label="SERVICE HOURS" />
                    <StatItem number="15+" label="MISSIONS COMPLETE" />
                    <StatItem number="MAX" label="THRUST / PASSION" />
                </div>
            </section>

            {/* Daily Insights */}
            <section className="section daily-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="text-gradient">MISSION</span> DEBRIEF
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
                            FLIGHT <span className="text-gradient">OPERATIONS</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>
                    <div className="features-grid">
                        <FeatureCard
                            icon={Languages}
                            title="COMMS / LANGUAGES"
                            description="Decoding cultures and bridging gaps through linguistic mastery."
                            link="/language"
                        />
                        <FeatureCard
                            icon={Heart}
                            title="SERVICE / RESCUE"
                            description="Deploying resources and time to aid communities in need."
                            link="/social-service"
                        />
                        <FeatureCard
                            icon={BookOpen}
                            title="FLIGHT SCHOOL"
                            description="Academic rigor and scholarly pursuits. Pushing the envelope."
                            link="/academics"
                        />
                        <FeatureCard
                            icon={Lightbulb}
                            title="INTEL / INSIGHTS"
                            description="Strategic thoughts on growth, learning, and future trajectories."
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
                            SIMULATION <span className="text-gradient">DRILLS</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>
                    <Quiz />
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section cta-section">
                <div className="container cta-container">
                    <h2>ESTABLISH CONTACT</h2>
                    <p>Frequency open. Requesting permission to communicate.</p>
                    <Button to="/contact" variant="primary" size="lg">
                        TRANSMIT MESSAGE <Mail size={20} style={{ marginLeft: '8px' }} />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, link }) => (
    <Link to={link} className="feature-link">
        <Card className="feature-card panel"> {/* Added panel class for consistency */}
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
