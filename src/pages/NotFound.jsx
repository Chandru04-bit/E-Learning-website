import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, Compass, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="not-found-page-view">
      <div className="not-found-card">
        <div className="not-found-icon-box">
          <FileQuestion size={64} className="not-found-icon" />
        </div>
        <span className="not-found-badge">404 Error</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Oops! The page or course you are searching for might have been moved, renamed,
          or is temporarily unavailable.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Return Home
          </Link>
          <Link to="/courses" className="btn btn-outline">
            <Compass size={16} /> Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
