import React, { useState, useEffect } from 'react';
import { Plus, Save, Trash2, ArrowLeft, RefreshCw, FileText, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getPosts, savePost, deletePost } from '../services/postService';
import Button from '../components/ui/Button';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: 'academics',
        description: '',
        content: ''
    });

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const data = await getPosts();
        // Sort by date descending
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
    };

    const handleSelectPost = (post) => {
        setSelectedPost(post);
        setFormData({
            title: post.title,
            category: post.category,
            description: post.description,
            content: post.content || ''
        });
    };

    const handleNewPost = () => {
        setSelectedPost(null);
        setFormData({
            title: '',
            category: 'academics',
            description: '',
            content: ''
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const postToSave = {
                ...formData,
                id: selectedPost ? selectedPost.id : null,
                date: selectedPost ? selectedPost.date : undefined // Keep original date if editing
            };
            await savePost(postToSave);
            loadPosts();
            if (!selectedPost) {
                handleNewPost(); // Reset form after new creation
            }
            alert('MISSION DATA UPDATED SUCCESSFULLY');
        } catch (error) {
            alert('FAILED TO UPDATE MISSION DATA');
        }
    };

    const handleDelete = async () => {
        if (selectedPost && window.confirm('CONFIRM DELETION OF CLASSIFIED RECORD?')) {
            try {
                await deletePost(selectedPost.id);
                loadPosts();
                handleNewPost();
            } catch (error) {
                alert('FAILED TO DELETE RECORD');
            }
        }
    };

    return (
        <div className="admin-dashboard container">
            <div className="admin-header">
                <div>
                    <h1 className="admin-title">MISSION CONTROL</h1>
                    <p style={{ color: 'var(--color-primary)' }}>CLASSIFIED DATA MANAGEMENT</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="outline" onClick={async () => {
                        try {
                            await logout();
                            navigate('/login');
                        } catch {
                            alert("FAILED TO LOGOUT");
                        }
                    }}>
                        <LogOut size={16} style={{ marginRight: '8px' }} /> ABORT MISSION
                    </Button>
                    <Link to="/">
                        <Button variant="outline"><ArrowLeft size={16} /> RETURN TO BASE</Button>
                    </Link>
                </div>
            </div>

            <div className="admin-grid">
                {/* Left Panel: List */}
                <div className="post-list-panel">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--color-text-muted)' }}>FLIGHT LOGS</h3>
                        <button onClick={handleNewPost} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer' }}>
                            <Plus size={24} />
                        </button>
                    </div>

                    {posts.map(post => (
                        <div
                            key={post.id}
                            className={`post-list-item ${selectedPost && selectedPost.id === post.id ? 'active' : ''}`}
                            onClick={() => handleSelectPost(post)}
                        >
                            <h4>{post.title}</h4>
                            <div className="post-meta">
                                <span>{post.date}</span>
                                <span className="category-tag">{post.category.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel: Editor */}
                <div className="editor-panel">
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-heading)' }}>
                        {selectedPost ? `EDITING: ${selectedPost.id}` : 'NEW MISSION PROFILE'}
                    </h3>

                    <div className="editor-form">
                        <div className="form-group">
                            <label>OPERATION TITLE</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. OPERATION ALPHA"
                            />
                        </div>

                        <div className="form-group">
                            <label>SECTOR / CATEGORY</label>
                            <select
                                name="category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="academics">ACADEMICS (FLIGHT LOGS)</option>
                                <option value="language">LANGUAGE (COMMS)</option>
                                <option value="social-service">SOCIAL SERVICE (RESCUE)</option>
                                <option value="research">RESEARCH (R&D)</option>
                                <option value="insights">INSIGHTS (DEBRIEF)</option>
                                <option value="resources">RESOURCES (SUPPLY)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>MISSION BRIEF (DESCRIPTION)</label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Short summary..."
                            />
                        </div>

                        <div className="form-group">
                            <label>FULL REPORT (CONTENT)</label>
                            <textarea
                                name="content"
                                className="form-control"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Detailed mission report..."
                            />
                        </div>

                        <div className="editor-actions">
                            <Button onClick={handleSave} variant="primary">
                                <Save size={18} style={{ marginRight: '8px' }} /> SAVE DATA
                            </Button>
                            {selectedPost && (
                                <button className="btn-delete" onClick={handleDelete} style={{ padding: '0.8rem 1.5rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Trash2 size={18} /> DELETE
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
