import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">
                        <span className="text-gradient">ESTABLISH COMMS</span>
                    </h1>
                    <p className="page-description">
                        SECURE LINE OPEN. TRANSMIT QUERIES RELATING TO LINGUISTICS, SOCIAL OPS, OR GENERAL BRIEFINGS.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <Card className="info-card panel">
                            <h3>COMMS CHANNELS</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <Mail className="info-icon" />
                                    <div>
                                        <h4>ELECTRONIC MAIL</h4>
                                        <a href="mailto:goyalvrinda71@gmail.com">goyalvrinda71@gmail.com</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Phone className="info-icon" />
                                    <div>
                                        <h4>LANDLINE / CELL</h4>
                                        <p>+91 84399 47891</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <MapPin className="info-icon" />
                                    <div>
                                        <h4>BASE COORDINATES</h4>
                                        <p>Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="contact-form-section">
                        <Card className="form-card panel terminal-form">
                            <h3>ENCRYPTED TRANSMISSION</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">IDENTIFIER (NAME)</label>
                                    <input type="text" id="name" placeholder="ENTER ID..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">RELAY ADDRESS (EMAIL)</label>
                                    <input type="email" id="email" placeholder="USER@NO-REPLY.COM" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">PAYLOAD (MESSAGE)</label>
                                    <textarea id="message" rows="5" placeholder="TYPE MESSAGE HERE..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    TRANSMIT DATA
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
