import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import './DynamicPage.css';

const DynamicPage = ({ title, category, description }) => {
    // Sample content - in a real app, this would come from a CMS or database
    const samplePosts = [
        {
            id: 1,
            title: `${title} Project 1`,
            description: `An exciting journey into ${title.toLowerCase()}...`,
            date: '2024-12-01'
        },
        {
            id: 2,
            title: `${title} Experience`,
            description: `Exploring new horizons in ${title.toLowerCase()}...`,
            date: '2024-11-15'
        },
        {
            id: 3,
            title: `${title} Insights`,
            description: `Reflections on my ${title.toLowerCase()} journey...`,
            date: '2024-10-20'
        }
    ];

    return (
        <div className="dynamic-page">
            <div className="page-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                    <h1 className="page-title">
                        <span className="text-gradient">{title}</span>
                    </h1>
                    <p className="page-description">{description}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="posts-grid">
                        {samplePosts.map((post) => (
                            <Card key={post.id} className="post-card">
                                <div className="post-date">{post.date}</div>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <div className="post-footer">
                                    <span className="read-more">Read more →</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DynamicPage;
