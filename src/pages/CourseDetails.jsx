import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Clock,
  BookOpen,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  HelpCircle,
  FolderGit2,
  ArrowRight,
  ShieldCheck,
  Award,
  Share2,
  Users,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';
import LessonModal from '../components/LessonModal';

export const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEnrolled, enroll, isAuthenticated, showToast } = useAuth();

  // Find course by id
  const course = courses.find((c) => c.id === id);

  // Expandable modules state: default open first module
  const [expandedModules, setExpandedModules] = useState({ 0: true });
  // Interactive lesson player modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!course) {
    return (
      <div className="course-not-found-container">
        <div className="empty-state-card">
          <h2>Course Not Found</h2>
          <p>The course you are looking for does not exist or may have been moved.</p>
          <Link to="/courses" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);

  const toggleModule = (index) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/courses/${course.id}` } });
      return;
    }

    if (enrolled) {
      navigate('/my-learning');
      return;
    }

    const result = enroll(course.id);
    if (result.success) {
      // Prompt user or open modal
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Course link copied to clipboard!', 'info');
    }
  };

  // Related courses in same category (excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  // Fallback if not enough in same category
  const fallbackCourses = relatedCourses.length < 3
    ? courses.filter((c) => c.id !== course.id).slice(0, 3)
    : relatedCourses;

  return (
    <div className="course-details-page">
      {/* Top Breadcrumb */}
      <div className="details-breadcrumb-bar">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/courses" className="breadcrumb-link">Courses</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/courses?category=${encodeURIComponent(course.category)}`} className="breadcrumb-link">
            {course.category}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{course.title}</span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="course-hero-banner">
        <div className="course-hero-container">
          <div className="course-hero-main">
            <div className="course-hero-badges">
              <span className="badge category-badge-pill">{course.category}</span>
              <span className="badge level-badge-pill">{course.level}</span>
              {course.isPopular && (
                <span className="badge popular-badge-pill">
                  <Sparkles size={13} className="inline mr-1" /> Best Seller
                </span>
              )}
            </div>

            <h1 className="course-details-title">{course.title}</h1>

            <p className="course-details-short-desc">{course.shortDescription}</p>

            <div className="course-hero-meta-row">
              <div className="rating-block">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon filled" />
                  ))}
                </div>
                <span className="rating-score-bold">{course.rating.toFixed(1)}</span>
                <span className="reviews-subtext">({course.reviewsCount.toLocaleString()} reviews)</span>
              </div>

              <div className="students-enrolled-block">
                <Users size={16} />
                <span>{(course.studentsCount || 4500).toLocaleString()} students enrolled</span>
              </div>
            </div>

            {/* Instructor snippet */}
            <div className="instructor-hero-strip">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="instructor-avatar-hero"
              />
              <div className="instructor-details-hero">
                <span className="created-by-label">Created by</span>
                <span className="instructor-hero-name">{course.instructor.name}</span>
                <span className="instructor-hero-role">{course.instructor.role}</span>
              </div>
            </div>
          </div>

          {/* Sticky Enrollment Card (Desktop Sidecard) */}
          <div className="course-enrollment-card-wrapper">
            <div className="course-enrollment-card">
              <div className="card-media-preview">
                <img
                  src={course.image}
                  alt={course.title}
                  className="preview-image"
                />
                <button
                  type="button"
                  className="preview-play-overlay"
                  onClick={() => setIsModalOpen(true)}
                  title="Preview Course Curriculum"
                >
                  <PlayCircle size={44} />
                  <span>Preview Curriculum</span>
                </button>
              </div>

              <div className="card-pricing-block">
                <div className="price-tag-group">
                  <span className="price-current">${course.price.toFixed(2)}</span>
                  {course.originalPrice && (
                    <span className="price-original">${course.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="price-badge-discount">Save 40%</span>
                </div>
                <p className="guarantee-text">
                  <ShieldCheck size={14} className="inline text-emerald-500 mr-1" />
                  30-day money-back guarantee • Full lifetime access
                </p>
              </div>

              <div className="card-cta-actions">
                {enrolled ? (
                  <div className="enrolled-actions-box">
                    <div className="enrolled-status-banner">
                      <CheckCircle size={18} className="text-emerald-500" />
                      <span>You are enrolled in this course</span>
                    </div>
                    <Link to="/my-learning" className="btn btn-secondary btn-block">
                      Go to My Learning <ArrowRight size={16} />
                    </Link>
                    <button
                      type="button"
                      className="btn btn-outline btn-block mt-2"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Continue Curriculum Checklist
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary btn-block btn-lg"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-ghost btn-sm btn-block mt-2"
                  onClick={handleShare}
                >
                  <Share2 size={15} /> Share this course
                </button>
              </div>

              <div className="card-features-list">
                <h4 className="card-features-title">This course includes:</h4>
                <ul>
                  <li><Clock size={15} /> {course.duration} on-demand video lessons</li>
                  <li><BookOpen size={15} /> {course.lessonsCount} curriculum modules & exercises</li>
                  <li><FolderGit2 size={15} /> 4 production-ready portfolio projects</li>
                  <li><Award size={15} /> Verified completion certificate</li>
                  <li><ShieldCheck size={15} /> Full lifetime access on web and mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="course-body-container">
        <div className="course-main-column">
          {/* What You Will Learn (Learning Outcomes) */}
          <section className="learning-outcomes-card">
            <h2 className="section-card-title">What You'll Learn</h2>
            <div className="outcomes-grid">
              {course.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="outcome-item">
                  <CheckCircle2 size={18} className="outcome-icon" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* In-Depth Description */}
          <section className="course-description-section">
            <h2 className="section-card-title">Course Overview & Description</h2>
            <div className="course-description-text">
              <p>{course.fullDescription}</p>
              <p>
                Each module is constructed to take you step-by-step from foundational concepts to
                complex production implementations. You will write code alongside practical,
                real-world scenarios rather than simplified toy examples.
              </p>
            </div>
          </section>

          {/* Curriculum with Expandable Accordions */}
          <section className="course-curriculum-section">
            <div className="curriculum-header-row">
              <div>
                <h2 className="section-card-title">Course Curriculum</h2>
                <p className="curriculum-summary-subtitle">
                  {course.curriculum.length} modules • {course.lessonsCount} lessons • {course.duration} total length
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  const allOpen = Object.keys(expandedModules).length === course.curriculum.length;
                  if (allOpen) {
                    setExpandedModules({});
                  } else {
                    const next = {};
                    course.curriculum.forEach((_, i) => { next[i] = true; });
                    setExpandedModules(next);
                  }
                }}
              >
                {Object.keys(expandedModules).length === course.curriculum.length
                  ? 'Collapse All Modules'
                  : 'Expand All Modules'}
              </button>
            </div>

            <div className="curriculum-accordion-list">
              {course.curriculum.map((module, mIdx) => {
                const isOpen = !!expandedModules[mIdx];
                const lessons = module.lessons || [];

                return (
                  <div key={mIdx} className="curriculum-module-card">
                    <button
                      type="button"
                      className="curriculum-module-btn"
                      onClick={() => toggleModule(mIdx)}
                      aria-expanded={isOpen}
                    >
                      <div className="module-title-group">
                        <span className="accordion-chevron">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                        <span className="module-name-text">{module.moduleTitle}</span>
                      </div>
                      <span className="module-lessons-count">
                        {lessons.length} {lessons.length === 1 ? 'lesson' : 'lessons'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="curriculum-lessons-container">
                        {lessons.map((lesson) => (
                          <div key={lesson.id} className="curriculum-lesson-row">
                            <div className="lesson-left-meta">
                              {lesson.type === 'project' ? (
                                <FolderGit2 size={16} className="text-amber-500" />
                              ) : lesson.type === 'quiz' ? (
                                <HelpCircle size={16} className="text-purple-500" />
                              ) : lesson.type === 'reading' ? (
                                <FileText size={16} className="text-emerald-500" />
                              ) : (
                                <PlayCircle size={16} className="text-indigo-500" />
                              )}
                              <span className="lesson-row-title">{lesson.title}</span>
                            </div>
                            <div className="lesson-right-meta">
                              <span className="lesson-type-tag">{lesson.type}</span>
                              <span className="lesson-duration-text">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Instructor Bio Section */}
          <section className="course-instructor-bio-card">
            <h2 className="section-card-title">Meet Your Instructor</h2>
            <div className="instructor-bio-layout">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="instructor-large-avatar"
              />
              <div className="instructor-bio-info">
                <h3 className="instructor-bio-name">{course.instructor.name}</h3>
                <p className="instructor-bio-title">{course.instructor.role}</p>
                <div className="instructor-stats-inline">
                  <span><Star size={14} className="star-icon filled inline" /> 4.9 Instructor Rating</span>
                  <span><Users size={14} className="inline" /> 35,000+ Students</span>
                  <span><BookOpen size={14} className="inline" /> 5 Courses</span>
                </div>
                <p className="instructor-bio-desc">
                  With over a decade of leadership in software engineering and design at Silicon
                  Valley tech firms, {course.instructor.name} specializes in breaking down complex
                  architectures into intuitive, engaging, hands-on learning experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Related Courses Section */}
      <section className="related-courses-section section-padding bg-light-neutral">
        <div className="related-container">
          <div className="section-header-row">
            <div>
              <span className="section-pretitle">Explore More</span>
              <h2 className="section-title">Related Courses in {course.category}</h2>
            </div>
            <Link to={`/courses?category=${encodeURIComponent(course.category)}`} className="btn btn-outline">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="courses-grid">
            {fallbackCourses.map((relCourse) => (
              <CourseCard key={relCourse.id} course={relCourse} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Modal */}
      <LessonModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CourseDetails;
