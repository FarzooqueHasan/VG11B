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
                        <span className="text-gradient">Get in Touch</span>
                    </h1>
                    <p className="page-description">
                        I'd love to hear from you! Whether you want to discuss languages, social service, or just say hello.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <Card className="info-card">
                            <h3>Contact Information</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <Mail className="info-icon" />
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:goyalvrinda71@gmail.com">goyalvrinda71@gmail.com</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Phone className="info-icon" />
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 84399 47891</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <MapPin className="info-icon" />
                                    <div>
                                        <h4>Location</h4>
                                        <p>Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="contact-form-section">
                        <Card className="form-card">
                            <h3>Send a Message</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="your.email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message 💌
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
