import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RiskSimulator from './components/RiskSimulator';
import NaviDhan from './components/NaviDhan';
import EasterEgg from './components/EasterEgg';
import About from './components/About';
import Teenance from './components/Teenance';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showContactEmails, setShowContactEmails] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const longPressDelay = 3000; // 3 seconds

  const handleMouseDown = () => {
    longPressTimer.current = setTimeout(() => {
      setShowEasterEgg(true);
      window.location.href = '#/easter-egg';
    }, longPressDelay);
  };

  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setShowEasterEgg(true);
      window.location.href = '#/easter-egg';
    }, longPressDelay);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const toggleContactEmails = () => {
    setShowContactEmails(!showContactEmails);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">Abhinav Srivastava</span>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/teenance">Teenance</Link></li>
              <li><Link to="/risk-simulator">Risk Simulator</Link></li>
              <li><Link to="/navidhan">NaviDhan</Link></li>
              <li><a href="#contact" className="contact-button" onClick={toggleContactEmails}>Get in touch</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home 
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/teenance" element={<Teenance />} />
          <Route path="/risk-simulator" element={<RiskSimulator />} />
          <Route path="/navidhan" element={<NaviDhan />} />
          <Route path="/easter-egg" element={<EasterEgg />} />
        </Routes>

        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p><i className="email-icon">✉️</i> absolutelyabhinav@gmail.com</p>
              {showContactEmails && (
                <div className="additional-emails animate-fade-in">
                  <p><i className="email-icon">✉️</i> abhinavsrv@icloud.com</p>
                  <p><i className="email-icon">✉️</i> abhinav.sr022@outlook.com</p>
                </div>
              )}
              <p><i className="linkedin-icon">🔗</i> <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">linkedin.com/in/cofounderteenance</a></p>
              <p><i className="github-icon">💻</i> <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer">github.com/abhinavsrv</a></p>
              <p><i className="phone-icon">📱</i> 788-031-4040</p>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Abhinav Srivastava</span>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/teenance">Teenance</Link>
              <Link to="/risk-simulator">Risk Simulator</Link>
              <Link to="/navidhan">NaviDhan</Link>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/abhinavsrv/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2025 Abhinav Srivastava. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
