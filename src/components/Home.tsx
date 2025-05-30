import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('.header') as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <section className="hero animate-section" ref={heroRef}>
        <div className="hero-content">
          <h1 className="portfolio-title animate-text">PORTFOLIO</h1>
          <div className="social-links animate-fade-in">
            <p>LI: <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">linkedin.com/in/cofounderteenance</a></p>
          </div>
          <div className="hero-text animate-fade-in-delay">
            <p>I love quantitative finance and machine learning. I approach problems in a rational and pragmatic way and seek the simplest and most functional solutions possible.</p>
          </div>
        </div>
        <div className="scroll-indicator animate-bounce">
          <span>Scroll down</span>
        </div>
      </section>

      <section id="about" className="about animate-section" ref={aboutRef}>
        <div className="about-content">
          <div className="about-text">
            <h2 className="animate-slide-up">Hello, I'm Abhinav!</h2>
            <p className="about-description animate-slide-up-delay">
              I'm a Computer Science student at BIT Mesra with a strong focus on quantitative finance, machine learning, and algorithm design. I've co-founded a fintech startup where I lead the development of high-frequency, low-latency trading algorithms for volatile markets like crypto, forex, and derivatives.
            </p>
            <div className="about-details animate-slide-up-delay-2">
              <div className="detail">
                <span className="detail-date">Sept 2024</span>
              </div>
              <div className="detail">
                <span className="detail-location">Ranchi, India</span>
              </div>
            </div>
            <div className="social-link animate-slide-up-delay-3">
              <a href="https://linkedin.com/in/cofounderteenance" target="_blank" rel="noopener noreferrer">linkedin.com/in/cofounderteenance</a>
            </div>
          </div>
          <div className="about-image animate-fade-in">
            <img src={profileImage} alt="Abhinav Srivastava" className="animate-float" />
            <div className="contact-box animate-slide-in">
              <h3>Contact</h3>
              <p><i className="location-icon">📍</i> Ranchi, India</p>
              <p><i className="email-icon">✉️</i> absolutelyabhinav@gmail.com</p>
              <p><i className="phone-icon">📱</i> 788-031-4040</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume animate-section" ref={resumeRef}>
        <h2 className="section-title animate-text-reveal">RESUME</h2>
        
        <div className="education">
          <h3 className="animate-slide-up">Education</h3>
          <div className="timeline">
            <div className="timeline-item animate-slide-in-left">
              <div className="year">2024-2028</div>
              <div className="institution">Birla Institute of Technology, Mesra</div>
              <div className="degree">Bachelor of Technology - BTech, Computer Science and Engineering</div>
              <div className="details">
                <p>- IEEE Society, Technical Team Member</p>
                <p>- FineArts Society, First Year Coordinator</p>
                <p>- Member, Institute Innovation Council</p>
              </div>
            </div>
            <div className="timeline-item animate-slide-in-left-delay">
              <div className="year">July 2024</div>
              <div className="institution">Indian Institute of Technology, Kharagpur</div>
              <div className="degree">Summer of Quant, Elementary and Advanced</div>
              <div className="details">
                <p>- Cleared the SOQ Elementary with distinction</p>
                <p>- Cleared the SOQ Advanced with 9.5 CGPA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <h3 className="animate-slide-up">Experience</h3>
          <div className="timeline">
            <div className="timeline-item animate-slide-in-right">
              <div className="year">Sept 2024 - Present</div>
              <div className="position">CTO and Quantitative Researcher</div>
              <div className="company">Teenance Group</div>
              <div className="details">
                <p>TeeNance is a fintech startup focused on building ultra-low latency trading systems and intelligent financial tools. We operate in high-volatility markets like crypto and forex, leveraging advanced ML and algorithmic strategies.</p>
                <p>- Developing ultra-high frequency and super-low frequency trading systems for profit maximization</p>
                <p>- Secured funding in BIT Mesra's flagship event- BIT NISHAN</p>
                <p>- Trading in volatile markets like Crypto Futures, Options, and Forex</p>
              </div>
            </div>
            <div className="timeline-item animate-slide-in-right-delay">
              <div className="year">April 2025 - Present</div>
              <div className="position">Technical Team Member</div>
              <div className="company">IEEE</div>
              <div className="details">
                <p>Technical Team, IEEE Society (Student Chapter), BIT Mesra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <h3 className="animate-slide-up">Technical Skills</h3>
          <div className="skills-container">
            <div className="skills-column animate-fade-in">
              <h4>Software Skills</h4>
              <div className="skill-badges">
                <span className="skill-badge animate-pop">Python</span>
                <span className="skill-badge animate-pop-delay-1">Data Science</span>
                <span className="skill-badge animate-pop-delay-2">Machine Learning</span>
                <span className="skill-badge animate-pop-delay-3">Deep Learning</span>
                <span className="skill-badge animate-pop-delay-4">NLP</span>
              </div>
            </div>
            <div className="skills-column animate-fade-in-delay">
              <h4>Coding Skills</h4>
              <div className="skill-badges">
                <span className="skill-badge animate-pop">HTML</span>
                <span className="skill-badge animate-pop-delay-1">CSS</span>
                <span className="skill-badge animate-pop-delay-2">JavaScript</span>
                <span className="skill-badge animate-pop-delay-3">SQL</span>
                <span className="skill-badge animate-pop-delay-4">Algorithms</span>
                <span className="skill-badge animate-pop-delay-5">Data Structures</span>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="animate-slide-up">Licenses & Certifications</h3>
          <div className="cert-container">
            <div className="cert-item animate-scale-in">
              <div className="cert-title">Algorithms-I and Algorithms-II</div>
              <div className="cert-issuer">Princeton University</div>
              <div className="cert-date">Issued Mar 2025</div>
            </div>
            <div className="cert-item animate-scale-in-delay-1">
              <div className="cert-title">Programming in Python</div>
              <div className="cert-issuer">University of Leeds</div>
              <div className="cert-date">Issued Feb 2025</div>
            </div>
            <div className="cert-item animate-scale-in-delay-2">
              <div className="cert-title">Options-101</div>
              <div className="cert-issuer">Akuna Capital</div>
              <div className="cert-date">Issued Sep 2024</div>
            </div>
            <div className="cert-item animate-scale-in-delay-3">
              <div className="cert-title">Supervised Machine Learning: Regression and Classification</div>
              <div className="cert-issuer">DeepLearning.AI</div>
              <div className="cert-date">Issued Apr 2024</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="projects animate-section" ref={projectsRef}>
        <h2 className="section-title animate-text-reveal">PROJECTS</h2>
        
        <div className="featured-projects">
          <div className="project-card large animate-slide-up">
            <h3>Risk Simulator</h3>
            <p className="project-subtitle">Enterprise-Grade Financial Risk Analytics Platform</p>
            <div className="project-tags">
              <span className="project-tag">#QuantitativeFinance</span>
              <span className="project-tag">#MachineLearning</span>
            </div>
            <p className="project-excerpt">
              A comprehensive analytics platform designed to transform how financial institutions assess credit risk, optimize portfolios, and simulate market conditions.
            </p>
            <Link to="/risk-simulator" className="project-link-button">View Project</Link>
          </div>
          
          <div className="project-card large animate-slide-up-delay">
            <h3>NaviDhan</h3>
            <p className="project-subtitle">AI-Powered Financial Guidance for Rural Communities</p>
            <div className="project-tags">
              <span className="project-tag">#AI</span>
              <span className="project-tag">#FinancialInclusion</span>
            </div>
            <p className="project-excerpt">
              A full-stack AI/ML platform designed to deliver personalized financial literacy, intelligent budgeting, and explainable investment guidance to underserved rural populations.
            </p>
            <Link to="/navidhan" className="project-link-button">View Project</Link>
          </div>
        </div>
        
        <div className="other-projects">
          <div className="project-card animate-scale-in">
            <h3>Comprehensive Backtesting of Advanced Trading Algorithms</h3>
            <p>Investigated algorithmic trading strategies for Apple stock using Python and backtesting. Implemented GitHub OAuth for trading data analysis.</p>
            <div className="project-skills">
              <span>Python</span>
              <span>SKLearn</span>
              <span>Matplotlib</span>
            </div>
          </div>
          
          <div className="project-card animate-scale-in-delay-1">
            <h3>Advanced Decision Tree Classification for Meteorological Forecasting</h3>
            <p>Built Decision Tree Classifier to forecast weather conditions. Ensured dataset integrity with 1,281 meteorological samples.</p>
            <div className="project-skills">
              <span>Python</span>
              <span>Numpy</span>
              <span>Pandas</span>
            </div>
          </div>
          
          <div className="project-card animate-scale-in-delay-2">
            <h3>Advanced Credit Card Fraud Detection Through ML</h3>
            <p>Developed a fraud detection system using Decision Tree, Random Forest, AdaBoost, and XGBoost.</p>
            <div className="project-skills">
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>XGBoost</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
