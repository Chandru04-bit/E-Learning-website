import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Star,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Code,
  Palette,
  Database,
  Terminal,
  Megaphone
} from 'lucide-react';
import { courses, testimonials, platformStats, platformFeatures } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Filter sections
  const popularCourses = courses.filter((c) => c.isPopular).slice(0, 4);
  const recentCourses = courses.filter((c) => c.isRecent).slice(0, 4);

  const categoryCards = [
    { name: 'Web Development', icon: Code, count: '3 Courses', color: 'indigo' },
    { name: 'UI/UX Design', icon: Palette, count: '3 Courses', color: 'violet' },
    { name: 'Data Science', icon: Database, count: '3 Courses', color: 'blue' },
    { name: 'Programming', icon: Terminal, count: '3 Courses', color: 'emerald' },
    { name: 'Digital Marketing', icon: Megaphone, count: '2 Courses', color: 'amber' }
  ];

  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tag">
              <Sparkles size={16} className="hero-tag-icon" />
              <span>Future-Proof Your Career Today</span>
            </div>

            <h1 className="hero-headline">
              Master High-Demand <span className="highlight-text">Digital Skills</span> with Guided Practice
            </h1>

            <p className="hero-description">
              Explore industry-vetted courses in Web Development, UI/UX Design, Data Science,
              and Systems Engineering. Learn at your own pace, track your progress lesson by
              lesson, and graduate with verified job-ready competence.
            </p>

            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-primary btn-lg">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={() => {
                  if (isAuthenticated) {
                    navigate('/my-learning');
                  } else {
                    navigate('/courses');
                  }
                }}
              >
                <PlayCircle size={18} /> Start Learning
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="hero-trust-metrics">
              <div className="trust-metric">
                <span className="metric-number">4.9/5</span>
                <div className="metric-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="star-icon filled" />
                  ))}
                </div>
                <span className="metric-label">Over 15,000+ positive student reviews</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-decoration">
              <div className="hero-main-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning together in modern tech workspace"
                  className="hero-main-image"
                />
              </div>

              {/* Floating feature pills */}
              <div className="floating-badge badge-top-right">
                <Award size={20} className="floating-badge-icon" />
                <div>
                  <span className="float-title">Certified Skills</span>
                  <span className="float-sub">Industry aligned</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <Users size={20} className="floating-badge-icon text-indigo" />
                <div>
                  <span className="float-title">45k+ Students</span>
                  <span className="float-sub">Active community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="stats-banner-section">
        <div className="stats-container">
          {platformStats.map((stat, idx) => (
            <div key={idx} className="stat-box">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-light-neutral">
        <div className="section-header text-center">
          <span className="section-pretitle">Categories</span>
          <h2 className="section-title">Explore by Domain</h2>
          <p className="section-subtitle">
            Find the right curriculum suited to your personal goals and career aspirations.
          </p>
        </div>

        <div className="category-cards-grid">
          {categoryCards.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/courses?category=${encodeURIComponent(cat.name)}`}
                className={`category-item-card color-${cat.color}`}
              >
                <div className="category-item-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="category-item-name">{cat.name}</h3>
                <span className="category-item-count">{cat.count}</span>
                <span className="category-item-arrow">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="section-padding">
        <div className="section-header-row">
          <div>
            <span className="section-pretitle">Trending Now</span>
            <h2 className="section-title">Most Popular Courses</h2>
            <p className="section-subtitle">
              Join thousands of learners in our highest-rated interactive programs.
            </p>
          </div>
          <Link to="/courses" className="btn btn-outline">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="courses-grid">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Learning Benefits & Platform Features */}
      <section className="section-padding bg-slate-subtle">
        <div className="section-header text-center">
          <span className="section-pretitle">Why EduPulse</span>
          <h2 className="section-title">Designed for Real-World Competence</h2>
          <p className="section-subtitle">
            We prioritize hands-on engineering, intuitive progress tracking, and measurable mastery.
          </p>
        </div>

        <div className="features-grid">
          {platformFeatures.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">
                <CheckCircle size={24} className="feature-icon" />
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added Courses Section */}
      <section className="section-padding">
        <div className="section-header-row">
          <div>
            <span className="section-pretitle">Fresh Content</span>
            <h2 className="section-title">Recently Added Courses</h2>
            <p className="section-subtitle">
              Stay ahead with the latest releases in cutting-edge tech and engineering.
            </p>
          </div>
          <Link to="/courses" className="btn btn-outline">
            Browse All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="courses-grid">
          {recentCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section-padding bg-light-neutral">
        <div className="section-header text-center">
          <span className="section-pretitle">Student Success Stories</span>
          <h2 className="section-title">Trusted by Thousands of Career Shifters</h2>
          <p className="section-subtitle">
            See how EduPulse students achieved their dream roles at leading tech companies.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon filled" />
                ))}
              </div>
              <p className="testimonial-text">"{t.content}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                  <span className="author-course-tag">{t.courseTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="cta-banner-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Accelerate Your Tech Career?</h2>
            <p className="cta-description">
              Start building real-world projects today. Enroll in any course for free, track your
              progress, and unlock your potential with EduPulse.
            </p>
            <div className="cta-actions">
              <Link to="/courses" className="btn btn-light btn-lg">
                Explore All Courses <ArrowRight size={18} />
              </Link>
              {!isAuthenticated && (
                <Link to="/register" className="btn btn-outline-white btn-lg">
                  Create Free Account
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
