import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/my-learning', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const { name, email, password, confirmPassword } = formData;

    // 1. Validate full name
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (name.trim().length < 2) {
      setErrorMessage('Full name must be at least 2 characters long.');
      return;
    }

    // 2. Validate email format
    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please provide a valid email address (e.g. student@domain.com).');
      return;
    }

    // 3. Validate password requirements
    if (!password) {
      setErrorMessage('Please enter a password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    // 4. Validate password confirmation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify both password fields.');
      return;
    }

    setIsSubmitting(true);
    const result = register({
      name: name.trim(),
      email: email.trim(),
      password
    });
    setIsSubmitting(false);

    if (result.success) {
      // Redirect to login page upon successful account creation
      navigate('/login', {
        state: { registeredEmail: email.trim() }
      });
    } else {
      setErrorMessage(result.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-page-view">
      <div className="auth-card-container">
        {/* Brand header */}
        <div className="auth-header">
          <Link to="/" className="auth-brand-logo">
            <div className="brand-icon-wrapper">
              <GraduationCap size={28} className="brand-icon" />
            </div>
            <span className="brand-text">
              Edu<span className="brand-accent">Pulse</span>
            </span>
          </Link>
          <h1 className="auth-title">Create an Account</h1>
          <p className="auth-subtitle">Join thousands of students learning modern tech skills.</p>
        </div>

        {/* Error message alert */}
        {errorMessage && (
          <div className="auth-error-alert" role="alert">
            <AlertCircle size={18} className="error-icon" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="reg-name" className="form-label">
              Full Name
            </label>
            <div className="form-input-wrapper">
              <User size={18} className="input-icon" />
              <input
                id="reg-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="e.g. Jordan Smith"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="reg-email" className="form-label">
              Email Address
            </label>
            <div className="form-input-wrapper">
              <Mail size={18} className="input-icon" />
              <input
                id="reg-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="reg-password" className="form-label">
              Password
            </label>
            <div className="form-input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="reg-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="reg-confirm-password" className="form-label">
              Confirm Password
            </label>
            <div className="form-input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="reg-confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Benefits summary list */}
          <div className="reg-perks-list">
            <div className="reg-perk-item">
              <CheckCircle2 size={15} className="text-emerald-500 mr-2" />
              <span>Instant access to 14+ complete interactive courses</span>
            </div>
            <div className="reg-perk-item">
              <CheckCircle2 size={15} className="text-emerald-500 mr-2" />
              <span>Progress and lesson checklists saved in LocalStorage</span>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating account...' : 'Create Free Account'}{' '}
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Footer redirection link */}
        <div className="auth-footer-prompt">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
