import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingIntro from './components/LandingIntro';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DynamicPage from './pages/DynamicPage';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(() => {
    // Show landing only if not seen in this session
    return !sessionStorage.getItem('landingShown');
  });

  const handleLandingComplete = () => {
    sessionStorage.setItem('landingShown', 'true');
    setShowLanding(false);
  };

  return (
    <>
      {showLanding && <LandingIntro onComplete={handleLandingComplete} />}
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="*" element={
            <Layout>
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
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
