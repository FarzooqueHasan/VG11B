import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/ui/Button";
import { AlertCircle, Lock } from "lucide-react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/admin");
        } catch {
            setError("FAILED TO AUTHENTICATE. VERIFY CREDENTIALS.");
        }
        setLoading(false);
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className="panel" style={{
                maxWidth: '400px',
                width: '100%',
                padding: '2rem',
                border: '1px solid var(--color-primary)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Lock size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                    <h2 style={{ color: 'var(--color-heading)', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>
                        SECURITY GATE
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                        RESTRICTED AREA. IDENTIFY YOURSELF.
                    </p>
                </div>

                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: '1px solid #f87171',
                        color: '#f87171',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        <AlertCircle size={16} /> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="form-group">
                        <label style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', display: 'block' }}>
                            PILOT ID (EMAIL)
                        </label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="pilot@vg11b.com"
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', display: 'block' }}>
                            ACCESS CODE (PASSWORD)
                        </label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    <Button disabled={loading} type="submit" variant="primary" style={{ marginTop: '1rem', width: '100%' }}>
                        {loading ? 'AUTHENTICATING...' : 'ACCESS DASHBOARD'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
