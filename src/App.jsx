import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DynamicPage from './pages/DynamicPage';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro only if not seen in this session
    return !sessionStorage.getItem('introShown');
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {!showIntro && (
        <AuthProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="*" element={
                <Layout>
                  <div className="flight-pattern"> {/* Added flight pattern background wrapper */}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route
                        path="/academics"
                        element={<DynamicPage
                          title="Academics"
                          category="academics"
                          description="Exploring the frontiers of knowledge and academic excellence."
                        />}
                      />
                      <Route
                        path="/language"
                        element={<DynamicPage
                          title="Language"
                          category="language"
                          description="Discovering the beauty of languages and cultures around the world."
                        />}
                      />
                      <Route
                        path="/social-service"
                        element={<DynamicPage
                          title="Social Service"
                          category="social-service"
                          description="Making a positive impact through community service and volunteer work."
                        />}
                      />
                      <Route
                        path="/research"
                        element={<DynamicPage
                          title="Research"
                          category="research"
                          description="Deep dives into research projects and scholarly inquiries."
                        />}
                      />
                      <Route
                        path="/insights"
                        element={<DynamicPage
                          title="Insights"
                          category="insights"
                          description="Thoughts and reflections on learning, growth, and making a difference."
                        />}
                      />
                      <Route
                        path="/resources"
                        element={<DynamicPage
                          title="Resources"
                          category="resources"
                          description="Curated tools, books, and materials for learning and growth."
                        />}
                      />
                      <Route path="/login" element={<Login />} />
                      <Route
                        path="/admin"
                        element={
                          <PrivateRoute>
                            <AdminDashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </div>
                </Layout>
              } />
            </Routes>
          </Router>
        </AuthProvider>
      )}
    </>
  );
}

export default App;
