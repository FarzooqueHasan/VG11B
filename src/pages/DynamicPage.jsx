import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPostsByCategory } from '../services/postService';
import Card from '../components/ui/Card';
import './DynamicPage.css';

const DynamicPage = ({ title, category, description }) => {
    // Mapping titles to Aviation terms
    const getMilitaryTitle = (t) => {
        const map = {
            'Academics': 'FLIGHT LOGS',
            'Language': 'COMMS INTEL',
            'Social Service': 'RESCUE MISSIONS',
            'Research': 'R&D LAB',
            'Insights': 'DEBRIEFINGS',
            'Resources': 'SUPPLY DROP'
        };
        return map[t] || t.toUpperCase();
    };

    const militaryTitle = getMilitaryTitle(title);



    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPostsByCategory(category);
            setPosts(data);
        };
        fetchPosts();
    }, [category]);

    return (
        <div className="dynamic-page">
            <div className="page-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> RETURN TO BASE
                    </Link>
                    <h1 className="page-title">
                        <span className="text-gradient">{militaryTitle}</span>
                    </h1>
                    <p className="page-description">
                        <span className="status-indicator"></span> {description}
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="posts-grid">
                        {posts.length === 0 ? (
                            <div className="no-intel">NO INTEL GATHERED FOR THIS SECTOR YET.</div>
                        ) : (
                            posts.map((post) => (
                                <Card key={post.id} className="post-card panel">
                                    <div className="post-header">
                                        <span className="post-date">DATE: {post.date}</span>
                                        <span className="clearance-level">TOP SECRET</span>
                                    </div>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">{post.description}</p>
                                    <div className="post-footer">
                                        <span className="read-more">OPEN FILE [ + ]</span>
                                    </div>
                                </Card>
                            )))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DynamicPage;
