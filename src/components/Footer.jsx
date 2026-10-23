import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  ShieldCheck,
  Award,
  Clock,
  BookOpen,
  Heart,
  Globe,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Platform trust bar */}
      <div className="footer-trust-banner">
        <div className="footer-trust-container">
          <div className="trust-item">
            <Award className="trust-icon" size={24} />
            <div>
              <h4>Industry-Recognized</h4>
              <p>Curriculum designed by leading experts</p>
            </div>
          </div>
          <div className="trust-item">
            <Clock className="trust-icon" size={24} />
            <div>
              <h4>Self-Paced Mastery</h4>
              <p>Learn at your schedule with lifetime access</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" size={24} />
            <div>
              <h4>Verified Progress</h4>
              <p>Track modules, quizzes, and certificates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main-container">
        {/* Brand column */}
        <div className="footer-brand-column">
          <Link to="/" className="brand-logo footer-logo">
            <div className="brand-icon-wrapper">
              <GraduationCap size={24} className="brand-icon" />
            </div>
            <span className="brand-text">
              Edu<span className="brand-accent">Pulse</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Empowering curious minds worldwide with cutting-edge tech skills, practical
            coding projects, and verified career-ready credentials.
          </p>
          <div className="footer-social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://edupulse.org" target="_blank" rel="noopener noreferrer" aria-label="Global Web">
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Platform</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Explore All Courses</Link></li>
            <li><Link to="/my-learning">My Learning Dashboard</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Create Account</Link></li>
          </ul>
        </div>

        {/* Categories column */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Popular Categories</h4>
          <ul className="footer-links-list">
            <li><Link to="/courses?category=Web+Development">Web Development</Link></li>
            <li><Link to="/courses?category=UI%2FUX+Design">UI/UX Design</Link></li>
            <li><Link to="/courses?category=Data+Science">Data Science & AI</Link></li>
            <li><Link to="/courses?category=Programming">Programming & Systems</Link></li>
            <li><Link to="/courses?category=Digital+Marketing">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Learning perks */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Learning Guarantee</h4>
          <ul className="footer-features-list">
            <li><BookOpen size={16} /> 100% Free Dummy Interactive Access</li>
            <li><Clock size={16} /> Progress auto-saved in your browser</li>
            <li><Mail size={16} /> Dedicated community support</li>
            <li><ShieldCheck size={16} /> No credit card required to explore</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} EduPulse Inc. All rights reserved. Built with React & LocalStorage.
          </p>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
