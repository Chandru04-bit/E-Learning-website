import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Home,
  User,
  LogOut,
  Menu,
  X,
  Compass,
  BookmarkCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { currentUser, isAuthenticated, logout, enrollments } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="brand-icon-wrapper">
            <GraduationCap size={24} className="brand-icon" />
          </div>
          <span className="brand-text">
            Edu<span className="brand-accent">Pulse</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
          >
            <Home size={17} className="nav-icon" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
          >
            <Compass size={17} className="nav-icon" />
            <span>Explore Courses</span>
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/my-learning"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
            >
              <BookmarkCheck size={17} className="nav-icon" />
              <span>My Learning</span>
              {enrollments.length > 0 && (
                <span className="nav-enrollment-badge">{enrollments.length}</span>
              )}
            </NavLink>
          )}
        </nav>

        {/* Desktop Auth Actions */}
        <div className="desktop-auth-actions">
          {isAuthenticated ? (
            <div className="user-profile-menu">
              <Link to="/my-learning" className="user-greeting-pill">
                <div className="user-avatar-circle">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="user-info-snippet">
                  <span className="user-name-display">{currentUser.name}</span>
                  <span className="user-role-label">Student</span>
                </div>
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger btn-logout"
                onClick={handleLogout}
                title="Log out from your account"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="auth-buttons-group">
              <Link to="/login" className="btn btn-ghost">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={closeMobileMenu}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <div className="brand-icon-wrapper">
                  <GraduationCap size={22} className="brand-icon" />
                </div>
                <span className="brand-text">
                  Edu<span className="brand-accent">Pulse</span>
                </span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {isAuthenticated && (
              <div className="mobile-user-card">
                <div className="user-avatar-circle large">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="mobile-user-details">
                  <p className="mobile-user-name">{currentUser.name}</p>
                  <p className="mobile-user-email">{currentUser.email}</p>
                  <span className="mobile-enrolled-count">
                    {enrollments.length} enrolled {enrollments.length === 1 ? 'course' : 'courses'}
                  </span>
                </div>
              </div>
            )}

            <div className="mobile-nav-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <Home size={18} />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/courses"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <Compass size={18} />
                <span>All Courses</span>
              </NavLink>

              {isAuthenticated && (
                <NavLink
                  to="/my-learning"
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <BookmarkCheck size={18} />
                  <span>My Learning</span>
                  {enrollments.length > 0 && (
                    <span className="mobile-badge">{enrollments.length}</span>
                  )}
                </NavLink>
              )}
            </div>

            <div className="mobile-auth-footer">
              {isAuthenticated ? (
                <button
                  type="button"
                  className="btn btn-outline-danger btn-block"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              ) : (
                <div className="mobile-auth-buttons">
                  <Link
                    to="/login"
                    className="btn btn-outline btn-block"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-primary btn-block"
                    onClick={closeMobileMenu}
                  >
                    Create Free Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
